import express from "express";
import { getMatchList } from "../controllers/matches.controller";

const router = express.Router();

router.get("/", getMatchList);

export default router;
