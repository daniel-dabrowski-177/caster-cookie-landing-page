// Menu & Navigation
const menu = document.querySelector(".menu")
const nav = document.querySelector(".nav")
const sidebar = document.querySelector(".sidebar-wrapper")

const li = document.querySelectorAll("li")

menu.addEventListener("click", () => {
  nav.classList.remove("nav")
  nav.classList.add("sidebar")
  sidebar.style = "display: ''"
})

li.forEach((c) => {
  c.addEventListener("click", () => {
    console.log(c.textContent)
    sidebar.style = "display: none"
    menu.style = "display: ''"

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

    if (c.textContent == "Introduction") {
      window.scrollTo(0, 0)
    } else if (c.textContent == "About") {
      window.scrollTo(0, aboutTop)
    } else if (c.textContent == "Comment") {
      window.scrollTo(0, commentsTop)
    } else if (c.textContent == "Contact") {
      window.scrollTo(0, contactTop)
    }
  })
})
