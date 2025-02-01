import { Router } from "express";
import { getExpesnesByCategory } from "../controllers/expenseController";

const router = Router();

router.get("/", getExpesnesByCategory);

export default router;
