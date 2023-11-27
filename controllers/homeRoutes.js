const router = require("express").Router();
const { Posts, Comments, Users } = require("../models");
const withAuth = require("../utils/auth");

// Checks user's session data and if they are logged in
router.get("/", async (req, res) => {
  try {
    // Looks for all Posts and JOIN's it with Comments and Users
    const postData = await Posts.findAll({
      include: [
        {
          model: Users,
          attributes: ["name"],
        },
        {
          model: Comments,
          attributes: ["comment_content"],
        },
      ],
    });

    // maps the data into a new array
    const posts = postData.map((post) => post.get({ plain: true }));

    console.log(posts);

    // renders the homepage posts if user is logged in
    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
