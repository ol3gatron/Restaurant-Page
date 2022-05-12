const menu = function() {
  const menu = document.createElement("div");
  menu.classList = "menuContent"

  const menuItem1 = document.createElement("div");
  const menuItem1Img = document.createElement("div")
  const menuItem1text = document.createElement("p")
  menuItem1.classList = "menuItem"
  menuItem1Img.classList = "menuItem1Img"
  menuItem1text.classList = "menuItemText"
  menuItem1text.textContent = "3x Milk Bucket, 2x Sugar, Egg, 3x Wheat"
  menuItem1.appendChild(menuItem1Img)
  menuItem1.appendChild(menuItem1text)


  const menuItem2 = document.createElement("div");
  const menuItem2Img = document.createElement("div")
  const menuItem2text = document.createElement("p")
  menuItem2.classList = "menuItem"
  menuItem2Img.classList = "menuItem2Img"
  menuItem2text.classList = "menuItemText"
  menuItem2text.textContent = "Pumpkin, Sugar, Egg"
  menuItem2.appendChild(menuItem2Img)
  menuItem2.appendChild(menuItem2text)

  const menuItem3 = document.createElement("div");
  const menuItem3Img = document.createElement("div")
  const menuItem3text = document.createElement("p")
  menuItem3.classList = "menuItem"
  menuItem3Img.classList = "menuItem3Img"
  menuItem3text.classList = "menuItemText"
  menuItem3text.textContent = "Red Mushroom, Brown Mushroom, Bowl"
  menuItem3.appendChild(menuItem3Img)
  menuItem3.appendChild(menuItem3text)

  const menuItem4 = document.createElement("div");
  const menuItem4Img = document.createElement("div")
  const menuItem4text = document.createElement("p")
  menuItem4.classList = "menuItem"
  menuItem4Img.classList = "menuItem4Img"
  menuItem4text.classList = "menuItemText"
  menuItem4text.textContent = "2x Wheat, Cocoa Beans"
  menuItem4.appendChild(menuItem4Img)
  menuItem4.appendChild(menuItem4text)

  const menuItem5 = document.createElement("div");
  const menuItem5Img = document.createElement("div")
  const menuItem5text = document.createElement("p")
  menuItem5.classList = "menuItem"
  menuItem5Img.classList = "menuItem5Img"
  menuItem5text.classList = "menuItemText"
  menuItem5text.textContent = "Glass Bottle, Honey Block"
  menuItem5.appendChild(menuItem5Img)
  menuItem5.appendChild(menuItem5text)

  const menuItem6 = document.createElement("div");
  const menuItem6Img = document.createElement("div")
  const menuItem6text = document.createElement("p")
  menuItem6.classList = "menuItem"
  menuItem6Img.classList = "menuItem6Img"
  menuItem6text.classList = "menuItemText"
  menuItem6text.textContent = "Glass Bottle, Water"
  menuItem6.appendChild(menuItem6Img)
  menuItem6.appendChild(menuItem6text)

  menu.appendChild(menuItem1)
  menu.appendChild(menuItem2)
  menu.appendChild(menuItem3)
  menu.appendChild(menuItem4)
  menu.appendChild(menuItem5)
  menu.appendChild(menuItem6)

  return menu
}

export default menu