// Menu & Navigation
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")
const sidebar = document.querySelector(".sidebar")
const commentsContainer = document.querySelector(".comments-container")

// Comments section -> card & post
const card = document.querySelectorAll(".card")
const post = document.querySelectorAll(".post")
// const more = document.querySelector(button.children[0].textContent)

// Navigation
const navIntroduction = nav.children[0]
const navAbout = nav.children[1]
const navComments = nav.children[2]
const navContact = nav.children[3]

menu.addEventListener("click", () => {
  console.log("click")
  nav.classList.remove("nav")
  nav.classList.add("sidebar")
  menu.style = "display: none"
})
navIntroduction.addEventListener("click", () => {
  nav.classList.remove("sidebar")
  nav.classList.add("nav")
  menu.style = `display: ` + "" + ``
})

window.addEventListener("resize", () => {
  if (window.screen.width >= 768) {
    post.forEach((p) => {
      p.classList.remove("post")
      p.classList.add("card")
      post[3].style.display = ""
      post[4].style.display = ""
      post[5].style.display = ""
    })
    more.style.display = "none"
  } else {
    post.forEach((p) => {
      p.classList.remove("card")
      p.classList.add("post")
      post[3].style.display = "none"
      post[4].style.display = "none"
      post[5].style.display = "none"
    })
    more.style.display = ""
  }
})

// more.addEventListener("click", () => {
//   post[3].style.display = ""
//   post[4].style.display = ""
//   post[5].style.display = ""
//   more.style.display = "none"
// })

const ul = document.querySelector("ul")
const li = document.querySelectorAll("li")

ul.addEventListener("click", (e) => {
  const currentActive = e.target
  li.forEach((i) => {
    i.classList.remove("active")
  })
  currentActive.classList.add("active")
  let active = document.querySelector(".active")

  const about = document.querySelector(".about")
  const comments = document.querySelector(".comments")
  const contact = document.querySelector(".contact")
  const yOffset = -110
  const aboutTop =
    about.getBoundingClientRect().top + window.pageYOffset + yOffset
  const commentsTop =
    comments.getBoundingClientRect().top + window.pageYOffset + yOffset
  const contactTop =
    contact.getBoundingClientRect().top + window.pageYOffset + yOffset

  if (active.textContent == "Introduction") {
    window.scrollTo(0, 0)
  } else if (active.textContent == "About") {
    window.scrollTo(0, aboutTop)
  } else if (active.textContent == "Comment") {
    window.scrollTo(0, commentsTop)
  } else if (active.textContent == "Contact") {
    window.scrollTo(0, contactTop)
  }
})
