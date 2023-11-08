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
