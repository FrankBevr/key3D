// Import necessary modules
import { Application } from "./deps.ts";
import router from "./router.ts";

const app = new Application();
app.use(router.routes());
app.use(router.allowedMethods());

// Start the server
app.listen({ port: 8000 });