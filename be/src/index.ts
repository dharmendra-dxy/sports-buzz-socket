import dotenv from 'dotenv';

import express from "express";
import type {Request, Response} from "express";

import { drizzle } from 'drizzle-orm/neon-http';


dotenv.config();
const app = express();
const PORT = process.env.PORT;


app.use(express.json());
app.use(express.urlencoded({extended: true}));


const db = drizzle(process.env.DATABASE_URL!);

app.get("/", (req:Request, res: Response) => {
  res.send({
    success: true,
    message: "Working fine"
  })
})

app.listen(PORT, () => console.log(`App is listed on http://localhost:${PORT}`))
