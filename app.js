import express from "express";
const app = express();
import connectDB from "./database/connectdb.js";
const DB_URL = process.env.URL || "mongodb://localhost:27017/";
const port = process.env.PORT || 3000;
import router from "./router/login_route.js";

connectDB(DB_URL);

app.set("view engine", "ejs");

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listen at http://localhost:${port}`);
});
