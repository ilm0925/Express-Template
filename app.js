import express from "express";
import ejs from "ejs";
import path from "path";

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

import index from "./router/index.js";
import user from "./router/user.js";

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use("/", index);
app.use("/auth", user);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
