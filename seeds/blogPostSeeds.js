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
  {
    user_id: 3,
    title: "Test 3",
    date: "September 20th 2023",
    post_content: "This test was just alright, nothing special.",
  },
];

const seedPostData = () => Posts.bulkCreate(blogPostData);

module.exports = seedPostData;
