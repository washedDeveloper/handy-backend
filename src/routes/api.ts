import express from "express";
import controllers from "../controllers/controllers";

const router = express.Router();

router.post("/createIssue", controllers.createIssue);
router.post("/getIssues", controllers.getIssues);
router.get("/getPopular", controllers.getPopular);
router.post("/addStars", controllers.addStars);

export default router;
