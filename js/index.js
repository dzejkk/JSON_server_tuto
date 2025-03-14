const blogContainer = document.querySelector(".blogs");

const renderPosts = async () => {
  let uri = "http://localhost:8000/posts";

  const response = await fetch(uri);
  const posts = await response.json();

  console.log(posts);

  let template = "";

  posts.map((post) => {
    template += `
                <div class="blog-post-container">
                    <h1>${post.title}</h2>
                    <p>${post.author}</p>
                    <article>${post.content}</article>
                </div>`   ;
  });

  blogContainer.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", (e) => renderPosts());
