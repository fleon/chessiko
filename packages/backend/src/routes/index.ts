import { Router } from "express";
import healthRouter from "./health";

const router = Router();

// Mount route modules
router.use("/health", healthRouter);

export default router;
