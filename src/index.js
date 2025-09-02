import dotenv from "dotenv";
import express from "express";
dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
