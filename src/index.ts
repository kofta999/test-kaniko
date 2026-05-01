import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { hostname } from "os";

const app = new Hono();

app.get("/", (c) => {
  return c.text(`Hello from ${hostname()}!, Env Vars: DB_URL: ${process.env.DB_URL}. Service Name: ${process.env.SERVICE_NAME}`);
});

serve(
  {
    fetch: app.fetch,
    port: parseInt(process.env.PORT || "8080"),
  },
  (info) => {
    console.log(`Server is running on http://${hostname()}:${info.port}`);
  },
);
