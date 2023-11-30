const router = require("express").Router();
const { Posts, Comments, Users } = require("../../models");
const withAuth = require("../../utils/auth");

// Get route for editing a specific post
router.get("/edit/:id", withAuth, async (req, res) => {
  try {
    const postData = await Posts.findByPk(req.params.id);
    console.log(postData);

    // Need a check if postData is null/unidentified otherwise get plain object from postData
    if (!postData) {
      return res.status(404).json({ message: "No post found with this id." });
    }

    const post = postData.get({ plain: true });
    console.log(post);

    res.render("edit", {
      post,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Post request for creating a new post
router.post("/create", withAuth, async (req, res) => {
  try {
    const newPost = await Posts.create({
      title: req.body.title,
      post_content: req.body.post_content,
      user_id: req.session.user_id,
    });
    res.status(200).json(newPost);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Put request for editing a specific post
router.put("/edit/:id", withAuth, async (req, res) => {
  try {
    // Updates title and post_content specifically where id matches req.params.id
    const editPost = await Posts.update(
      {
        title: req.body.title,
        post_content: req.body.post_content,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(editPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete route for chosen post
router.delete("/edit/:id", withAuth, async (req, res) => {
  try {
    // Updates title and post_content specifically where id matches req.params.id
    const deletePost = await Posts.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(deletePost);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
