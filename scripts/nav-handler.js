// Menu & Navigation
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")

// Sections
const introduction = document.querySelector(".introduction")
const about = document.querySelector(".about")
const comments = document.querySelector(".comments")
const contact = document.querySelector(".contact")

// Navigation
const navIntroduction = nav.children[0]
const navAbout = nav.children[1]
const navComments = nav.children[2]
const navContact = nav.children[3]

menu.addEventListener("click", () => {
  nav.classList.toggle("nav-open")
})

navIntroduction.addEventListener("click", () => {
  introduction.scrollIntoView({ behavior: "smooth" })
  nav.classList.toggle("nav-open")
})
navAbout.addEventListener("click", () => {
  about.scrollIntoView({ behavior: "smooth" })
  nav.classList.toggle("nav-open")
})
navComments.addEventListener("click", () => {
  comments.scrollIntoView({ behavior: "smooth" })
  nav.classList.toggle("nav-open")
})
navContact.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth" })
  nav.classList.toggle("nav-open")
})
