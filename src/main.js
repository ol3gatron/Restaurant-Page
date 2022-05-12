const home = function() {
  const homeContent = document.createElement("div")
  homeContent.classList = "homeContent"

  const homeContentTitle = document.createElement("h1")
  homeContentTitle.textContent = "Best pizza in Minecraft World!"
  homeContentTitle.classList = "homeTitle"

  const homeContentSubTitle = document.createElement("p")
  homeContentSubTitle.textContent = "Work with passion since 2011"
  homeContentSubTitle.classList = "homeSubTitle"

  const cook = document.createElement("div")
  cook.classList = "cook"

  const footer = document.createElement("div")
  footer.textContent = "Order online or visit us"
  footer.classList = "homeFooter"


  homeContent.appendChild(homeContentTitle)
  homeContent.appendChild(homeContentSubTitle)
  homeContent.appendChild(cook)
  homeContent.appendChild(footer)

  return homeContent
}

export default home