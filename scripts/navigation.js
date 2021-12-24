// Menu & Navigation
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")
const sidebar = document.querySelector(".sidebar")
const li = document.querySelectorAll("li")

const about = document.querySelector(".about")
const comments = document.querySelector(".comments")
const contact = document.querySelector(".contact")
const yOffset = -110

menu.addEventListener("click", () => {
  nav.classList.remove("nav")
  nav.classList.add("sidebar")
  nav.style = "display: ''"
  menu.style = "display: none"
})

window.addEventListener("click", () => {})

li.forEach((c) => {
  c.addEventListener("click", () => {
    const aboutTop =
      about.getBoundingClientRect().top + window.pageYOffset + yOffset
    const commentsTop =
      comments.getBoundingClientRect().top + window.pageYOffset + yOffset
    const contactTop =
      contact.getBoundingClientRect().top + window.pageYOffset + yOffset

    if (c.textContent == "Introduction") {
      window.scrollTo(0, 0)
    } else if (c.textContent == "About") {
      window.scrollTo(0, aboutTop)
    } else if (c.textContent == "Comment") {
      window.scrollTo(0, commentsTop)
    } else if (c.textContent == "Contact") {
      window.scrollTo(0, contactTop)
    }

    if (window.screen.width >= 1024) {
      nav.style = "display: ''"
    } else {
      nav.style = "display: none"
      menu.style = "display: ''"
    }
  })
})

const aboutTop =
  about.getBoundingClientRect().top + window.pageYOffset + yOffset
const commentsTop =
  comments.getBoundingClientRect().top + window.pageYOffset + yOffset
const contactTop =
  contact.getBoundingClientRect().top + window.pageYOffset + yOffset

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    li.forEach((i) => {
      i.classList.remove("active")
    })
    li[0].classList.add("active")
  }
  if (window.scrollY > aboutTop) {
    li.forEach((i) => {
      i.classList.remove("active")
    })
    li[1].classList.add("active")
  }
  if (window.scrollY > commentsTop) {
    li.forEach((i) => {
      i.classList.remove("active")
    })
    li[2].classList.add("active")
  }
  if (window.scrollY > contactTop) {
    li.forEach((i) => {
      i.classList.remove("active")
    })
    li[3].classList.add("active")
  }
})
