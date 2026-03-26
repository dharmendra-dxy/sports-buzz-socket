import express from "express";
import { getCommentryList } from "../controllers/commentry.controller";

const router = express.Router();

router.get("/", getCommentryList);

export default router;
