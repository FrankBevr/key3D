/***********
 * IMPORTS *
 **********/
import { Application, Router } from "./deps.ts";
import { postgres } from "./deps.ts";
import { Product } from "./types.ts";

/******************
 * DATABASE SETUP *
 *****************/
// Local Postgres
const databaseUrl = "postgres://postgres:new_password@localhost:5432/key3d";
const pool = new postgres.Pool(databaseUrl, 3, true);

const connection = await pool.connect();
try {
  // Create the table
  const createProductsTableScript = await Deno.readTextFile(
    "./migrations/create_products_table.sql",
  );
  await connection.queryObject(createProductsTableScript);

  // Insert mockup data
  const insert_productsScript = await Deno.readTextFile(
    "./migrations/insert_products.sql",
  );
  await connection.queryObject(insert_productsScript);
} finally {
  // Release the connection back into the pool
  connection.release();
}

/**************
 * DATA SETUP *
 *************/
const products = new Map<string, Product>();

// Fetch data from the database
const result = await connection.queryObject<Product>`
  SELECT * FROM products
`;

// Populate the products map with the fetched data
for (const product of result.rows) {
  products.set(product.id, product);
}

/************
 * API SETUP *
 ************/
const router = new Router();
router
  .get("/", (context) => {
    context.response.body = "Hello world!";
  })
  .get("/products", (context) => {
    context.response.body = Array.from(products.values());
  })
  .get("/product/:id", (context) => {
    const id = Number(context.params?.id);
    if (id && products.has(id)) {
      context.response.body = products.get(id);
    } else {
      context.response.status = 404;
      context.response.body = { msg: "Product not found" };
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
