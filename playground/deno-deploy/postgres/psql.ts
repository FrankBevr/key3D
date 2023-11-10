import { Client } from "https://deno.land/x/postgres@v0.17.0/mod.ts";

const client = new Client({
  user: "postgres",
  database: "key3d",
  hostname: "localhost",
  port: 5432,
  password: "newpassword",
});
await client.connect();

const result = await client.queryArray("SELECT ID, NAME FROM PEOPLE");
console.log(result.rows);

await client.end();
