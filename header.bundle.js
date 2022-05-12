"use strict";
(self["webpackChunkwebpack_demo"] = self["webpackChunkwebpack_demo"] || []).push([["header"],{

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/header.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1kZW1vLy4vc3JjL2hlYWRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBoZWFkZXIgPSBmdW5jdGlvbigpIHtcclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXHJcbiAgY29uc3QgaGVhZGVyVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICBjb25zdCBoZWFkZXJNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpXHJcblxyXG4gIGNvbnN0IGhlYWRlck1lbnVIb21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgY29uc3QgaGVhZGVyTWVudU1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIilcclxuICBjb25zdCBoZWFkZXJNZW51Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKVxyXG5cclxuICBoZWFkZXJNZW51SG9tZS5jbGFzc05hbWUgPSBcImhvbWVcIlxyXG4gIGhlYWRlck1lbnVNZW51LmNsYXNzTmFtZSA9IFwibWVudVwiXHJcbiAgaGVhZGVyTWVudUNvbnRhY3QuY2xhc3NOYW1lID0gXCJjb250YWN0XCJcclxuICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIlxyXG5cclxuICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVyVGl0bGUpXHJcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlck1lbnUpXHJcbiAgaGVhZGVyTWVudS5hcHBlbmRDaGlsZChoZWFkZXJNZW51SG9tZSlcclxuICBoZWFkZXJNZW51LmFwcGVuZENoaWxkKGhlYWRlck1lbnVNZW51KVxyXG4gIGhlYWRlck1lbnUuYXBwZW5kQ2hpbGQoaGVhZGVyTWVudUNvbnRhY3QpXHJcblxyXG4gIGhlYWRlclRpdGxlLnRleHRDb250ZW50ID0gXCJFbmRlciBLaW5nXCJcclxuICBoZWFkZXJNZW51SG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiXHJcbiAgaGVhZGVyTWVudU1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIlxyXG4gIGhlYWRlck1lbnVDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCJcclxuXHJcblxyXG4gIHJldHVybiBoZWFkZXJcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9