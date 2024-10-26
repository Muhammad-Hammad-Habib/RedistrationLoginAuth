import express from "express";
const router = express.Router();
import login_user from "../controller/login_conlrol.js";

router.get("/", login_user.home_page);
router.get("/registration", login_user.registration);
router.get("/login", login_user.login);

export default router;
