import express from "express";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("<h2>It's Working!</h2>");
});

app.listen(PORT, () => console.log(`API is listening on port ${PORT}`));
