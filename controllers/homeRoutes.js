const router = require("express").Router();
const { Posts, Comments, Users } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    // Looks for all Posts and JOIN's it with Comments and Users
    const postData = await Posts.findAll({
      include: [
        {
          model: Comments,
          attributes: ["comment_content"],
        },
        {
          model: Users,
          attributes: ["name"],
        },
      ],
    });

    //
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
