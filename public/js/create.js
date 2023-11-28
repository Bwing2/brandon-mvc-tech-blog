const createPostHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#userTitle").value.trim();
  const post_content = document.querySelector("#userBody").value.trim();

  if (title && post_content) {
    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        body: JSON.stringify({ title, post_content }),
        headers: { "Content-Type": "application/json" },
      });

      console.log(res);
      // If response is ok, redirect to homepage otherwise throw alert
      if (res.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Failed to create post, please try again.");
      }
    } catch (err) {
      res.status(500).json(err);
      alert("Something went wrong, please try again.");
    }
  }
};

// Applies event listener to createForm class on create.handlebars
document
  .querySelector(".createForm")
  .addEventListener("submit", createPostHandler);
