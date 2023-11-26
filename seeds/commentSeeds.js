const { Comments } = require("../models");

const commentData = [
  {
    date_created: "November 25th 2023",
    comment_content: "This was a really great post! Very helpful!",
    user_id: 2,
    post_id: 1,
  },
  {
    date_created: "November 20th 2023",
    comment_content:
      "I didn't find this post to be that useful, but in some situations it can apply.",
    user_id: 1,
    post_id: 2,
  },
  {
    date_created: "December 10th 2023",
    comment_content:
      "This post contained a lot of relevant information and I enjoyed it!",
    user_id: 3,
    post_id: 2,
  },
];

const seedCommentData = () => Comments.bulkCreate(commentData);

module.exports = seedCommentData;
