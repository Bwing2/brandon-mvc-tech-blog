const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("blogPostRoutes is working.");
});

module.exports = router;
