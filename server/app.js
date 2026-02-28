import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

// Better Auth handler
app.all("/api/auth/*", toNodeHandler(auth));

app.use(express.json());

// You can add your routes here
// app.use("/api", someRouter);

export default app;