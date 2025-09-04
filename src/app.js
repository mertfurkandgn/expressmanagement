import express from "express";
const app = express();

// max JSON body limit
app.use(express.json({ limit: "16kb" }))

// max URL-encoded body limit
app.use(express.urlencoded({ extended: true, limit: "16kb" }))

// public folder static service
app.use(express.static("public"))


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