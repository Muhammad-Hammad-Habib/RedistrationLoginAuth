import mongoose from "mongoose";
import { type } from "os";

const user_schema = new mongoose.Schema({
  name: { type: String, require: true, trim: true },
  email: { type: String, require: true, trim: true },
  password: { type: String, require: true, trim: true },
  created: { type: Date, default: Date.now },
});

const user_model = mongoose.model("user",user_schema)
export default user_model;
