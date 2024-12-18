import express from "express";
import connectDB from "./database/connectdb.js";
import router from "./router/login_route.js";
const app = express();
const DB_URL = process.env.URL || "mongodb://localhost:27017/";
const port = process.env.PORT || 3000;

connectDB(DB_URL);

app.set("view engine", "ejs");

app.use(express.urlencoded({extended : true}))

app.use("/", router);

app.listen(port, () => {
  console.log(`Server listen at http://localhost:${port}`);
});
