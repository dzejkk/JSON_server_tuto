const form = document.querySelector("form");

const createPost = async (e) => {
  e.preventDefault();

  // new object to store new data
  const newPost = {
    title: form.title.value,
    author: form.author.value,
    content: form.body.value,
    views: 0,
  };

  // post method  in the object
  await fetch("http://localhost:8000/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { 'Content-Type': 'application/json' }
  });

  window.location.replace("/");
};

form.addEventListener("submit", createPost);
