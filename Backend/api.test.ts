import { Application, Status } from "./deps.ts";
import { superoak } from "./deps.ts";
import router from "./router.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

Deno.test("GET /products", async () => {
  const request = await superoak(app);
  await request.get("/products").expect(Status.OK);
});

Deno.test("GET /product/:id", async () => {
  const request = await superoak(app);
  await request.get("/product/3").expect(Status.OK);
});

// Deno.test("POST /product", async () => {
//   const request = await superoak(app);
//   await request.post("/product").send({
//     name: "Test Product",
//     description: "This is a test product",
//   }).expect(Status.OK);
// });

// Deno.test("PUT /product/:id", async () => {
//   const request = await superoak(app);
//   await request.put("/product/3").send({
//     name: "Updated Test Product",
//     description: "This is an updated test product",
//   }).expect(Status.OK);
// });

// Deno.test("DELETE /product/:id", async () => {
//   const request = await superoak(app);
//   await request.delete("/product/12").expect(Status.OK);
// });
