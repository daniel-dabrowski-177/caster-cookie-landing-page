// Menu & Navigation
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")
const siebar = document.querySelector(".siebar")

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
  console.log("click")
  nav.classList.remove("nav")
  nav.classList.add("sidebar")
  menu.style = "display: none"
})

navIntroduction.addEventListener("click", () => {
  // introduction.scrollIntoView({ behavior: "smooth" })
  nav.classList.remove("sidebar")
  nav.classList.add("nav")
  menu.style = `display: ` + "" + ``
})
// navAbout.addEventListener("click", () => {
//   about.scrollIntoView({ behavior: "smooth" })
//   nav.classList.toggle("nav-open")
// })
// navComments.addEventListener("click", () => {
//   comments.scrollIntoView({ behavior: "smooth" })
//   nav.classList.toggle("nav-open")
// })
// navContact.addEventListener("click", () => {
//   contact.scrollIntoView({ behavior: "smooth" })
//   nav.classList.toggle("nav-open")
// })
