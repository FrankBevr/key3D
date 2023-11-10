import { Router } from "./deps.ts";
import { postgres } from "./deps.ts";
import { Product } from "./types.ts";

const router = new Router();

// Define the database connection string
const databaseUrl = "postgres://postgres:new_password@localhost:5432/key3d";
// Create a new connection pool
const pool = new postgres.Pool(databaseUrl, 3, true);
// Connect to the database
const connection = await pool.connect();
// Create the products table
const createProductsTableScript = await Deno.readTextFile(
  "./migrations/create_products_table.sql",
);
await connection.queryObject(createProductsTableScript);

// Define the /products GET route
router.get("/products", async (context) => {
  const getProductsScript = await Deno.readTextFile(
    "./migrations/get_products.sql",
  );
  const result = await connection.queryObject<Product>(getProductsScript);
  console.log("all products were send");
  context.response.body = result.rows;
});

// Define the /product/:id GET route
router.get("/product/:id", async (context) => {
  const id = Number(context.params?.id);
  const getProductByIdScript = await Deno.readTextFile(
    "./migrations/get_product_by_id.sql",
  );
  const result = await connection.queryObject<Product>(
    getProductByIdScript,
    id,
  );
  console.log("a product by id is getted");
  context.response.body = result.rows[0];
});

// Define the /product POST route
router.post("/product", async (context) => {
  const body = context.request.body();
  const product: Product = await body.value;
  const insertProductScript = await Deno.readTextFile(
    "./migrations/insert_products.sql",
  );
  await connection.queryObject(
    insertProductScript,
    product.name,
    product.description,
  );
  console.log("a product is posted");
  context.response.body = { msg: "Product created", product };
});

// Define the /product/:id PUT route
router.put("/product/:id", async (context) => {
  const id = Number(context.params?.id);
  const body = context.request.body();
  const productUpdate: Product = await body.value;
  const updateProductScript = await Deno.readTextFile(
    "./migrations/update_products.sql",
  );
  await connection.queryObject(
    updateProductScript,
    productUpdate.name,
    productUpdate.description,
    id,
  );
  console.log("a product is updated");
  context.response.body = { msg: "Product updated", product: productUpdate };
});

// Define the /product/:id DELETE route
router.delete("/product/:id", async (context) => {
  const id = Number(context.params?.id);
  const deleteProductScript = await Deno.readTextFile(
    "./migrations/delete_products.sql",
  );
  await connection.queryObject(deleteProductScript, id);
  console.log("a product is deleted");
  context.response.body = { msg: "Product deleted" };
});

export default router;
