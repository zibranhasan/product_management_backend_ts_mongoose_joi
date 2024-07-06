import express, { Application } from "express";
const app: Application = express();
import cors from "cors";
import { ProductRoutes } from "./modules/product/product.route";
import { OrderRoutes } from "./modules/order/order.route";

//parsers
app.use(express.json());
app.use(cors());

//api/v1/
//application routes
app.use("/api", ProductRoutes);
app.use("/api", OrderRoutes);
app.get("/", (req, res) => {
  res.send("Hello World!");
});

export default app;
