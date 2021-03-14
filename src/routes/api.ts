import express from "express";
import controllers from "../controllers/controllers";

const router = express.Router();

router.post("/createIssue", controllers.createIssue);
router.get("/getIssues", controllers.getIssues);

export default router;
