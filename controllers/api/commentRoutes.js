const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("commentRoutes is working.");
});

module.exports = router;
