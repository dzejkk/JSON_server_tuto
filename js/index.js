const blogContainer = document.querySelector(".blogs");
const loadMoreBtn = document.querySelector(".load-more-button");


const renderPosts = async () => {
  let uri = "http://localhost:8000/posts";

  const response = await fetch(uri);
  const posts = await response.json();

  //console.log(posts);

  let template = "";

  posts.map((post) => {
    template += `
                <div class="blog-post-container">
                    <h2>${post.title}</h2>
                    <p class="author">${post.author}</p>
                    <article>${post.content.slice(0,100)}</article>
                    <a href=/details.html>Read more</a>
                </div>`   ;
  });

  blogContainer.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", (e) => renderPosts());
