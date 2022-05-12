import css from "./style.css"
import header from "./header.js"
import home from "./main.js"
import menu from "./menu.js"
import contact from "./contact.js"

const container = document.createElement("div")
container.className = "container"


const mainContent = document.createElement("div")
mainContent.className = "main"

container.appendChild(header())
mainContent.appendChild(home())
container.appendChild(mainContent)
document.body.appendChild(container)

container.addEventListener("click", (e) => {
  if (e.target.className === "home") {
    container.style.height = "100vh"
    mainContent.firstChild.remove()
    mainContent.appendChild(home())
  } else if (e.target.className === "menu") {
    container.style.height = "auto"
    mainContent.firstChild.remove()
    mainContent.appendChild(menu())
  } else if (e.target.className === "contact") {
    container.style.height = "100vh"
    mainContent.firstChild.remove()
    mainContent.appendChild(contact())
  }
})