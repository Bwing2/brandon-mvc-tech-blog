const router = require("express").Router();
const { Users } = require("../../models");

// Post route for login
router.post("/login", async (req, res) => {
  try {
    // Looks for valid name where it matches in req.body.name
    const userData = await Users.findOne({
      where: {
        name: req.body.name,
      },
    });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again." });
      return;
    }

    // Looks for valid password matching in req.body.password
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect username or password, please try again." });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Post route for logout
router.post("/logout", (req, res) => {
  // Will destroy session after logout
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
