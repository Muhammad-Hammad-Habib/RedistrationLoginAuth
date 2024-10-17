import express from "express";
const router = express.Router();
import login_user from "../controller/login_conlrol.js";

router.get("/", login_user.home_page);

export default router;
