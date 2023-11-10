import { Application, Router } from "./deps.ts";

interface Product {
  id: string;
  name: string;
  description: string;
}

const products = new Map<string, Product>();
products.set("1", {
  id: "1",
  name: "Product 1",
  description: "This is product 1",
});

const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/product", (context) => {
    context.response.body = Array.from(products.values());
  })
  .get("/product/:id", (context) => {
    if (products.has(context?.params?.id)) {
      context.response.body = products.get(context.params.id);
    }
  })
  .post("/product", async (context) => {
    if (!context.request.hasBody) {
      context.response.status = 400;
      context.response.body = { msg: "Invalid product data" };
      return;
    }

    const body = context.request.body();
    const product: Product = await body.value;

    products.set(product.id, product);

    context.response.body = { msg: "Product created", product };
  });

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: 8000 });
