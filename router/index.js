const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("main", { data: "Main" });
});

module.exports = router;
