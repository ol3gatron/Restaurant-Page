import css from "./style.css"
import header from "./header.js"
import home from "./main.js"

const container = document.createElement("div")
container.className = "container"


const mainContent = document.createElement("div")
mainContent.className = "main"

container.appendChild(header())
mainContent.appendChild(home())
container.appendChild(mainContent)
document.body.appendChild(container)

container.addEventListener("click", (e) => {
  console.log(e.target.className)
})