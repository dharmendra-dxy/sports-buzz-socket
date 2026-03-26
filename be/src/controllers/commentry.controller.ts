import type { Request, Response } from "express";


export const getCommentryList = (req: Request, res:Response) => {
  res.json({success: true, message: "GET Matches"});
}