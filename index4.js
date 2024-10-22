import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta));
const app = express();
const port = 3000;
var bandName = "";

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

app.use(bodyParser())