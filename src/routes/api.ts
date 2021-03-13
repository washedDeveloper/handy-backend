import express from "express";
import helloController from "../controllers/hello";

const router = express.Router();

router.get("/hello", helloController);

export default router;
