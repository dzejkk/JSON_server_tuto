const form = document.querySelector("form");



const createPost = async (e)=> {
    e.preventDefault();



    // new object to store new data
    const newPost = {
        title: form.title.value,
        body: form.body.value,
        like: 0
    };



    // post method  in the object 
    await fetch("http://localhost:8000/posts", {
        method: "POST",
        body: JSON.stringify(newPost)
    })




}



form.addEventListener("submit", createPost);