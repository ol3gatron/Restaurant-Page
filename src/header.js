const header = function() {
  const header = document.createElement("div")
  const headerTitle = document.createElement("h1")
  const headerMenu = document.createElement("ul")

  const headerMenuHome = document.createElement("li")
  const headerMenuMenu = document.createElement("li")
  const headerMenuContact = document.createElement("li")

  headerMenuHome.className = "home"
  headerMenuMenu.className = "menu"
  headerMenuContact.className = "contact"
  header.className = "header"

  header.appendChild(headerTitle)
  header.appendChild(headerMenu)
  headerMenu.appendChild(headerMenuHome)
  headerMenu.appendChild(headerMenuMenu)
  headerMenu.appendChild(headerMenuContact)

  headerTitle.textContent = "Ender King"
  headerMenuHome.textContent = "Home"
  headerMenuMenu.textContent = "Menu"
  headerMenuContact.textContent = "Contact"


  return header
}

export default header