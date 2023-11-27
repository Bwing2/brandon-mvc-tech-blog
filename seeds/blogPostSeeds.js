const { Posts } = require("../models");

const blogPostData = [
  {
    user_id: 1,
    title: "Test 1",
    date_created: "December 22, 2023 20:00:05",
    post_content: "This test is really good I rate it 10 out of 10.",
  },
  {
    user_id: 2,
    title: "Test 2",
    date_created: "November 4, 2023 13:55:20",
    post_content:
      "This test isn't as good, but I am still satisfied with the results.",
  },
  {
    user_id: 3,
    title: "Test 3",
    date_created: "September 20, 2023 1:03:44",
    post_content: "This test was just alright, nothing special.",
  },
];

const seedPostData = () => Posts.bulkCreate(blogPostData);

module.exports = seedPostData;
