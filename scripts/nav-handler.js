// Menu & Navigation
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")
const sidebar = document.querySelector(".sidebar")

// Comments section
const post = document.querySelectorAll(".post")

// Navigation
const navIntroduction = nav.children[0]

//Buttons
const more = document.querySelector(".more-btn")

menu.addEventListener("click", () => {
  nav.classList.remove("nav")
  nav.classList.add("sidebar")
  // menu.style = "display: none"
})
navIntroduction.addEventListener("click", () => {
  nav.classList.remove("sidebar")
  nav.classList.add("nav")
  // menu.style = `display: ` + "" + ``
})

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
