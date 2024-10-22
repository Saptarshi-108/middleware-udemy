import express from "express";

const app = express();
const port = 3000;

function chandrahamsa(req, res, next) {
  console.log("Request method:", req.method);
  console.log("Request url:", req.url);
  next();
}

app.use(chandrahamsa);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
