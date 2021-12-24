fetch("https://jsonplaceholder.typicode.com/comments")
  .then((res) => res.json())
  .then((data) => {
    const comment = document.querySelectorAll(".comment")

    comment.forEach((c) => {
      let random = Math.floor(Math.random() * 500 + 1)
      let comment = data[random].body
      c.children[0].textContent = comment
    })
  })
