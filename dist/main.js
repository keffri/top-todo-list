/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_projectDOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/projectDOM */ \"./src/modules/projectDOM.js\");\n\n\nconst newProjectButton = document.getElementById(\"newProjectButton\");\n\nnewProjectButton.addEventListener(\"click\", _modules_projectDOM__WEBPACK_IMPORTED_MODULE_0__.default.projectBox);\n\n\n//# sourceURL=webpack://top-todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/projectDOM.js":
/*!***********************************!*\
  !*** ./src/modules/projectDOM.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst projectDOM = (() => {\n  function projectBox() {\n    const content = document.getElementById(\"content\");\n\n    const boxContainer = document.createElement(\"div\");\n    boxContainer.setAttribute(\"id\", \"boxContainer\");\n\n    const newProjectBox = document.createElement(\"div\");\n    newProjectBox.setAttribute(\"id\", \"newProjectBox\");\n\n    const projectInput = document.createElement(\"input\");\n    projectInput.setAttribute(\"placeholder\", \"Please enter a project name...\");\n    projectInput.setAttribute(\"id\", \"projectInput\");\n    projectInput.setAttribute(\"type\", \"text\");\n\n    const createProject = document.createElement(\"button\");\n    createProject.setAttribute(\"id\", \"createProject\");\n    createProject.textContent = \"Create Project\";\n\n    const closeButton = document.createElement(\"button\");\n    closeButton.setAttribute(\"id\", \"closeButton\");\n    closeButton.textContent = \"X\";\n\n    content.appendChild(boxContainer);\n    boxContainer.appendChild(newProjectBox);\n    newProjectBox.appendChild(projectInput);\n    newProjectBox.appendChild(createProject);\n    newProjectBox.appendChild(closeButton);\n\n    function removeProjectBox() {\n      document.getElementById(\"boxContainer\").remove();\n    }\n\n    closeButton.addEventListener(\"click\", removeProjectBox);\n  }\n\n  return { projectBox };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projectDOM);\n\n\n//# sourceURL=webpack://top-todo-list/./src/modules/projectDOM.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;