import express from "express";
const router = express.Router();
import login_user from "../controller/login_conlrol.js";

router.get("/", login_user.home_page);

router.get("/registration", login_user.registration);
router.post("/registration", login_user.create_user);

router.get("/login", login_user.login);
router.post("/login", login_user.check_user);

export default router;