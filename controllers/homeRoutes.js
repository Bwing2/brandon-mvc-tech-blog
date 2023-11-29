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

// Get route for login
router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

// Get route for signup
router.get("/signup", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/");
    return;
  }
  res.render("signup");
});

// Get route for dashboard page
// looking specifically for where user_id matches the req.session.user_id
router.get("/dashboard", withAuth, async (req, res) => {
  const postData = await Posts.findAll({
    where: {
      user_id: req.session.user_id,
    },
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
  res.render("dashboard", {
    posts,
    logged_in: req.session.logged_in,
  });
});

// Get route for create page
router.get("/create", withAuth, (req, res) => {
  res.render("create", {
    logged_in: req.session.logged_in,
  });
});

// Get route for editing a specific post
router.get("/edit/:id", withAuth, async (req, res) => {
  const post = await Posts.findOne({
    where: {
      id: req.params.id,
    },
  });
  // console.log(req.params.id);
  // console.log(post);
  res.render("edit", {
    post,
    logged_in: req.session.logged_in,
  });
});

module.exports = router;
