const express = require("express");
const ejs = require("ejs");
const app = express();
const PORT = 3000;
const index = require("./router/index");
const user = require("./router/user");

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use("/", index);
app.use("/auth", user);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
