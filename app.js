import express from "express";
const app = express();
import connectDB from "./database/connectdb.js"
const DB_URL = process.env.URL || "mongodb://localhost:27017/" 
const port = process.env.PORT || 3000;

connectDB(DB_URL);



app.listen(port,() => {
    console.log(`Server listen at http://localhost:${port}`)
})