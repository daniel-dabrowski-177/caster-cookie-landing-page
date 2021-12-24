const post = document.querySelectorAll(".post")
const more = document.querySelector(".more-btn")

if (window.screen.width >= 768) {
  post.forEach((p) => {
    post[3].style.display = ""
    post[4].style.display = ""
    post[5].style.display = ""
  })
  more.style.display = "none"
} else {
  post.forEach((p) => {
    post[3].style.display = "none"
    post[4].style.display = "none"
    post[5].style.display = "none"
  })
  more.style.display = ""
}

more.addEventListener("click", () => {
  post[3].style.display = ""
  post[4].style.display = ""
  post[5].style.display = ""
  more.style.display = "none"
})
