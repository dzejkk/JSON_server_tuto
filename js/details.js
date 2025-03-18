const id = new URLSearchParams(window.location.search).get("id"); // to get id
const container = document.querySelector(".details");
const deleteBtn = document.querySelector(".button");

const renderDetails = async () => {
  const res = await fetch("http://localhost:8000/posts/" + id); // getting one item + id !
  const post = await res.json();

  const template = `
      <h1>${post.title}</h1>
      <small>${post.date}</small>
      <p>${post.content}</p>

    `;
  container.innerHTML = template;
};

// Delete request

deleteBtn.addEventListener("click", async (e) => {
  const res = await fetch("http://localhost:8000/posts/" + id, {
    method: "DELETE",
  });

  window.location.replace("/");
});

window.addEventListener("DOMContentLoaded", (e) => renderDetails());
