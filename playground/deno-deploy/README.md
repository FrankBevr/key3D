### Quick Start

1. Install Deno\
   curl -fsSL https://deno.land/x/install/install.sh | sh

2. Install deployctl\
   deno install -A --no-check -r -f https://deno.land/x/deploy/deployctl.ts

3. run deployctl --help

4. Write a test program

5. Setup DenoLs (works super now, wow)

6. Write a Programm

```ts
Deno.serve(() => new Response("Hello, world!"));
```

7. Make a project with deployctl on website

8. Create new api key and copy project name and api key

9. Export them as .env variables
   - `export DENO_DEPLOY_TOKEN=your_access_token_here`

10. `deployctl deploy --project=<PROJECTNAME> --prod server.ts`

11. DONE ✅

Project Name: posh-gnu-88\
URL: https://posh-gnu-88.deno.dev/

### Use Cases

- Popular, middleware api server and website

middleware

- do a bits of code between request
  - setting a cookie
  - change of content based on geolocation

API Server

- on the edge out of the box

Full Websites

- ryan dhal blog
- chatrooms (intersting for games)

### Playground

- good for small thingies
- playgrounds are perfomred

- creating a playground (just press button)
- playground editor
- editor has editor and a preview
- ave and deploy and donce
- it allows switch between js, jsx ,ts, tsx
- makin public is avaialbe
- export to github is available
- after export, not availabe in deploy editor

### Deploy with GitHub Integration

- via deployctl, there is a page for more
- easiest via playground

### CI GithubAction

- actually i dont care about that section
- automatic is the best it seems
- do thingies
- add in .github/workflows/deploy.yml

### deployctl on cli

- we can install it
- deploy a local scirpt
  - `deployctl deploy --project=helloworld main.ts`
- deploy remote script
  - `deployctl deploy --project=helloworld https://deno.com/examples/hello.js`
- deploy remote no static
  - `deployctl deploy --project=helloworld --no-static https://deno.com/examples/hello.js`
- deploy and ignore node
  - `deployctl deploy --project=helloworld --exclude=node_modules main.tsx`

- for local thingies use deno itself
  - like `$ deno run --allow-net=:8000 https://deno.com/examples/hello.js`

### Others

- there is a thingie about regions
- there is a thingie about pricing

### Deployments

- deployment is a snapshot
- deployments are immutable after deployed
- custom domains avialabe
- branch domains supported
- prdocution vs preview `{project_name}-{deployment_id}.deno.dev`
- either preview or production
- `deployctl deploy --prod --project=helloworld main.ts`

### Custom Domains

- Via the dashboar
- have to click buttons and insert thingies
- dns will be updated
- TLS certificate can be provied

### Enviorment varial

- under settings add variable
- simple key value
- Existing DENO\_REGION and DENO\_DEPLOYMENT\_ID

### Organisations

- Organsiation for collabartions
- All member have the same privileges
- create one
- then add member
- If necessary remove member

### Application loggin

- there is a console API,
- logs panel provide an overview
- logs are streamed
- logs are not presistens
- log message are max 2kb size
- everything else gets trimmed

### Database Deno KV

- `deno run -A --unstable my_kv_code.ts`
- with Deno itsself, sqllite as bakcned
- kv is consitency
- its external consistency
  - serializablitity, one after the other
  - linearizability, if wrote then read update imidetilty thats nice
- if necessary use of "eventual"
- if eventual frankfurt get 7ms 🤤
- distributeded quest, its avaialbe as it seems
- availabe outside of deno deploy
- `const kv = await Deno.openKv("https://api.deno.com/databases/<database-id>/connect",);`
- data discturbution is there
- 6 centeres 3 regions.
- if commit, min 2 mutation on 2 datacetners, commit under 10 secs
- then something about rpo and rto

### Database DynamoDB

- Its a Amazon noSql DB
- Gater some credential
- create the project in deno deploy
- add .env value
- Write code to connects
  ```ts
  import {
    DynamoDBClient,
    GetItemCommand,
    PutItemCommand,
  } from "https://cdn.skypack.dev/@aws-sdk/client-dynamodb?dts";
  ```
- Add client `const client = new ApiFactory().makeNew(DynamoDB);`
- deploy via `deployctl deploy --project=<project-name> <application-file-name>`

### Database FaunaDB

- Its a graphQL DB
- get credentials
- create a project on deno deploy
- Write code to connect
  ```ts
  import query from "https://esm.sh/faunadb@4.7.1";
  import Client from "https://esm.sh/faunadb@4.7.1";

  // Grab the secret from the environment.
  const token = Deno.env.get("FAUNA_SECRET");
  if (!token) {
    throw new Error("environment variable FAUNA_SECRET not set");
  }

  var client = new Client.Client({
    secret: token,
    // Adjust the endpoint if you are using Region Groups
    endpoint: "https://db.fauna.com/",
  });
  // HEAD
  client.query(query.ToDate("2018-06-06"));
  ```
- deploy via `deployctl deploy --project=<project-name> <application-file-name>`

### Connect To Firebase

- the google cloud
- get credentials
- add fibaseConfig
  ```json
  var firebaseConfig = {
     apiKey: "APIKEY",
     authDomain: "example-12345.firebaseapp.com",
     projectId: "example-12345",
     storageBucket: "example-12345.appspot.com",
     messagingSenderId: "1234567890",
     appId: "APPID",
  };
  ```
- create deno depoy project
- add .env project
- connect via
  ```ts
  import "https://deno.land/x/xhr@0.1.1/mod.ts";
  import { installGlobals } from "https://deno.land/x/virtualstorage@0.1.0/mod.ts";
  installGlobals();
  ...
  app.use(async (ctx, next) => {
  const signedInUid = ctx.cookies.get("LOGGED_IN_UID");
  const signedInUser = signedInUid != null ? users.get(signedInUid) : undefined;
  if (!signedInUid || !signedInUser || !auth.currentUser) {
    const creds = await auth.signInWithEmailAndPassword(
      Deno.env.get("FIREBASE_USERNAME"),
      Deno.env.get("FIREBASE_PASSWORD"),
    );
    const { user } = creds;
    if (user) {
      users.set(user.uid, user);
      ctx.cookies.set("LOGGED_IN_UID", user.uid);
    } else if (signedInUser && signedInUid.uid !== auth.currentUser?.uid) {
      await auth.updateCurrentUser(signedInUser);
    }
  }
  return next();
  });
  ```
- deploy via `deployctl deploy --project=<project-name> <application-file-name>`

### Database Postgres

- Use Supabase to get a postgres url
- Use psql as well for local
- Install psql
- login
- reset password
- Add table
- Insert Data in Table
- Display table via deno

- next up: up to deno deplo
