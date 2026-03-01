const express = require("express");
const cors = require("cors");
const { toNodeHandler } = require("better-auth/node");
const { auth } = require("./lib/auth.js");

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));

// Better Auth handler
app.all(/\/api\/auth\/.*/, toNodeHandler(auth))
app.get("/", (req, res) => {
  res.send("server is running");
})

app.use(express.json());

// You can add your routes here
// app.use("/api", someRouter);

module.exports = app;