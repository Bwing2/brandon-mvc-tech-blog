const { Posts } = require("../models");

const blogPostData = [
  {
    user_id: 1,
    title: "Test 1",
    date: "December 22th 2023",
    post_content: "This test is really good I rate it 10 out of 10.",
  },
  {
    user_id: 2,
    title: "Test 2",
    date: "November 4th 2023",
    post_content:
      "This test isn't as good, but I am still satisfied with the results.",
  },
];

const seedPostTags = () => Posts.bulkCreate(blogPostData);

module.exports = seedPostTags;
