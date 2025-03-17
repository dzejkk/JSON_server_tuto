const id = new URLSearchParams(window.location.search).get("id"); // to get id 
const container = document.querySelector(".details");


const renderDetails = async ()=> {

    const res =  await fetch("http://localhost:8000/posts/" + id); // getting one item + id !
    const post = await res.json();


    const template = `
      <h1>${post.title}</h1>
      <small>${post.date}</small>
      <p>${post.content}</p>

    `
    
    container.innerHTML = template;





}



window.addEventListener("DOMContentLoaded", (e)=> renderDetails())