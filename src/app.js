import express from "express";
const app = express();

app.get('/',(req,res)=>{

    res.send('HELLO WORLD')

});

app.get("/ping", (req, res) => {
  res.send("pong2");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;