const contact = function() {
  const contactContent = document.createElement("div")
  contactContent.classList = "contactContent"

  const contactTitle = document.createElement("p")
  contactTitle.classList = "contactTitle"
  contactTitle.textContent = "📞 123 456 789"

  const contactSubTitle = document.createElement("p")
  contactSubTitle.classList = "contactTitle"
  contactSubTitle.textContent = "🏠 Ender Boulevard 42, Overworld, Minecraft"

  const contactImage = document.createElement("div")
  contactImage.classList = "contactImage"

  contactContent.appendChild(contactTitle)
  contactContent.appendChild(contactSubTitle)
  contactContent.appendChild(contactImage)

  return contactContent
}

export default contact