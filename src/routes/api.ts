import express from "express";
import controllers from "../controllers/controllers";

const router = express.Router();

router.post("/createProject", controllers.createProject);

export default router;
