import express from "express";

import matchRouter from "./matches.routes";
import commentryRouter from "./commentry.routes";

const router = express.Router();

router.use("/matches", matchRouter);
router.use("/commentry", commentryRouter);

export default router;