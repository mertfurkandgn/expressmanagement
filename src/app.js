import express from "express";
import cors from "cors";
const app = express();

// max JSON body limit
app.use(express.json({ limit: "16kb" }));

// max URL-encoded body limit
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

// public folder static service
app.use(express.static("public"));

// cors configurations
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://locahost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

//  import the routes

import healthCheckRouter from "./routes/healthcheck.routes.js";

app.use("/api/v1/healthcheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("HELLO WORLD");
});

app.get("/ping", (req, res) => {
  res.send("pong2");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
