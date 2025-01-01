import express from "express";

const router=express.Router();

router.route("/register").post(register);
router.route("/login").post(register);


export default router;
