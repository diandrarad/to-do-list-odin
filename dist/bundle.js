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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `.transition {\r\n    transition: transform 0.2s ease-in-out;\r\n  }`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo-list/./src/css/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/js/addTodo.js":
/*!***************************!*\
  !*** ./src/js/addTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ addTodoToProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _todoElement__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoElement */ \"./src/js/todoElement.js\");\n\r\n\r\n\r\n\r\n\r\nconst expandedTodoTitle = document.getElementById('expanded-todo-title')\r\nconst modalBody = document.getElementById('modal-body')\r\n\r\nfunction addTodoToProject() {\r\n    expandedTodoTitle.textContent = 'Add a to-do'\r\n    modalBody.innerHTML = `\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoTitle\" class=\"form-label\">Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"addTodoTitle\" placeholder=\"Study\">\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoDescription\" class=\"form-label\">Description</label>\r\n            <textarea class=\"form-control\" id=\"addTodoDescription\" rows=\"2\"></textarea>\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoDueDate\" class=\"form-label\">Due Date</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"addTodoDueDate\">\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoPriority\" class=\"form-label\">Priority (No Priority/Low/Medium/High)</label>\r\n            <input type=\"range\" class=\"form-range\" value=\"-1\" min=\"-1\" max=\"2\" id=\"addTodoPriority\">\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <button onclick=\"saveAdd()\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Add</button>\r\n        </div>\r\n    `\r\n}\r\n\r\n// Function to save the added todo\r\nwindow.saveAdd = function () {\r\n    const todoTitle = document.getElementById('addTodoTitle').value\r\n    const todoDescription = document.getElementById('addTodoDescription').value\r\n    const todoDueDate = document.getElementById('addTodoDueDate').value\r\n    const todoPriority = document.getElementById('addTodoPriority').value\r\n    if (todoTitle && todoDescription && todoPriority) {\r\n        const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n        projects[_dom__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getSelectedProjectIndex()].addTodo(new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](todoTitle, todoDescription, todoDueDate, todoPriority, false))\r\n        _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(projects)\r\n        ;(0,_todoElement__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/js/addTodo.js?");

/***/ }),

/***/ "./src/js/dom.js":
/*!***********************!*\
  !*** ./src/js/dom.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todoElement__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todoElement */ \"./src/js/todoElement.js\");\n/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectItem */ \"./src/js/projectItem.js\");\n// dom.js\r\n\r\n\r\n\r\n\r\nconst domModule = (function () {\r\n    const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n    const projectListElement = document.getElementById('project-list')\r\n\r\n    let selectedProjectIndex = 0\r\n  \r\n    function displayProjects() {\r\n      // Clear the project list before updating\r\n      projectListElement.innerHTML = ''\r\n      const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n      const projectCount = projects.length\r\n  \r\n      if (projectCount === 0) {\r\n        const placeholderItem = document.createElement('div');\r\n        placeholderItem.className = 'p-5 text-center align-self-center border-0 fs-2';\r\n        placeholderItem.textContent = 'No projects available. Create a new project!';\r\n        projectListElement.appendChild(placeholderItem)\r\n      }\r\n\r\n      projects.forEach((project, index) => (0,_projectItem__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(project, index))\r\n\r\n      if (projectCount >= 0) {\r\n        if (projectCount === 1) setSelectedProject(0)\r\n        ;(0,_todoElement__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\r\n      } else setSelectedProject(null)\r\n    }\r\n\r\n    function setSelectedProject(index) {\r\n      selectedProjectIndex = index\r\n    }\r\n\r\n    function addProject() {\r\n      const projectName = prompt('Enter project name:')\r\n  \r\n      if (projectName) {\r\n        const newProject = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectName)\r\n        projects.push(newProject)\r\n        _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(projects)\r\n        displayProjects()\r\n      }\r\n    }\r\n  \r\n    // Return public functions\r\n    return {\r\n      displayProjects,\r\n      addProject,\r\n      getSelectedProjectIndex: () => selectedProjectIndex,\r\n      setSelectedProject\r\n    }\r\n  })()\r\n  \r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domModule);\n\n//# sourceURL=webpack://todo-list/./src/js/dom.js?");

/***/ }),

/***/ "./src/js/editTodo.js":
/*!****************************!*\
  !*** ./src/js/editTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ editTodoToProject)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _todoElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoElement */ \"./src/js/todoElement.js\");\n\r\n\r\n\r\n\r\nconst expandedTodoTitle = document.getElementById('expanded-todo-title')\r\nconst modalBody = document.getElementById('modal-body')\r\n\r\nfunction editTodoToProject(todo, todoIndex) {\r\n    expandedTodoTitle.textContent = `Edit: ${todo.title}`\r\n    modalBody.innerHTML = `\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoTitle\" class=\"form-label\">Title</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"addTodoTitle\" placeholder=\"Study\" value=\"${todo.title}\">\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoDescription\" class=\"form-label\">Description</label>\r\n            <textarea class=\"form-control\" id=\"addTodoDescription\" rows=\"2\">${todo.description}</textarea>\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoDueDate\" class=\"form-label\">Due Date</label>\r\n            <input type=\"date\" class=\"form-control\" id=\"addTodoDueDate\" value=\"${todo.dueDate}\">\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <label for=\"addTodoPriority\" class=\"form-label\">Priority (No Priority/Low/Medium/High)</label>\r\n            <input type=\"range\" class=\"form-range\" value=\"${todo.priority}\" min=\"-1\" max=\"2\" id=\"addTodoPriority\">\r\n        </div>\r\n        <div class=\"mb-3\">\r\n            <button onclick=\"saveEdit(${todoIndex})\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">Edit</button>\r\n        </div>\r\n    `\r\n}\r\n\r\n// Function to save the edited todo\r\nwindow.saveEdit = function (todoIndex) {\r\n    const newTitle = document.getElementById('addTodoTitle').value\r\n    const newDescription = document.getElementById('addTodoDescription').value\r\n    const newDueDate = document.getElementById('addTodoDueDate').value\r\n    const newPriority = document.getElementById('addTodoPriority').value\r\n\r\n    if (newTitle && newDescription && newPriority) {\r\n        const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n        const projectIndex = _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSelectedProjectIndex();\r\n\r\n        projects[projectIndex].todos[todoIndex].setTitle(newTitle)\r\n        projects[projectIndex].todos[todoIndex].setDescription(newDescription)\r\n        projects[projectIndex].todos[todoIndex].setDueDate(newDueDate)\r\n        projects[projectIndex].todos[todoIndex].setPriority(newPriority)\r\n        _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(projects)\r\n        ;(0,_todoElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n    }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/js/editTodo.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _projectItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectItem */ \"./src/js/projectItem.js\");\n// index.js\r\n\r\n\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', () => {\r\n  // Load projects from localStorage\r\n  const projects = _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadProjects()\r\n\r\n  // Check if the default projects flag is not set\r\n  const defaultProjectsFlag = localStorage.getItem('defaultProjectsFlag');\r\n\r\n  if (projects.length === 0) {\r\n    const defaultProject1 = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Launch Website (Example Project)')\r\n    defaultProject1.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Design Homepage', 'Create wireframes and design concepts for the homepage.', '2024-03-15', '2', true))\r\n    defaultProject1.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Implement Responsive Layout', 'Write CSS and implement a responsive layout for the entire website.', '2024-03-20', '1', false))\r\n    defaultProject1.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Set Up Database', 'Configure the database schema and set up necessary tables for user data.', '2024-03-25', '2', false))\r\n    defaultProject1.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Implement User Authentication', 'Develop user authentication system with email verification.', '2024-03-30', '2', true))\r\n    \r\n    const defaultProject2 = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Marketing Campaign (Example Project)')\r\n    defaultProject2.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Create Social Media Calendar', 'Plan and create a calendar for social media posts over the next month.', '2024-03-10', '1', true))\r\n    defaultProject2.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Design Campaign Graphics', 'Design graphics and visuals for the marketing campaign.', '2024-03-15', '2', false))\r\n    defaultProject2.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Write Blog Posts', 'Write engaging blog posts related to the campaign theme.', '2024-03-20', '1', false))\r\n    defaultProject2.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Launch Email Campaign', 'Prepare and send out email newsletters to subscribers.', '2024-03-25', '2', true))\r\n    \r\n    const defaultProject3 = new _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('Research and Development (Example Project)')\r\n    defaultProject3.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Market Research', 'Conduct market research to identify trends and competitors.', '2024-03-10', '2', true))\r\n    defaultProject3.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Prototype New Feature', 'Develop a prototype for a new feature based on user feedback.', '2024-03-15', '1', false))\r\n    defaultProject3.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Code Refactoring', 'Perform code refactoring for improved performance and maintainability.', '2024-03-20', '2', false))\r\n    defaultProject3.addTodo(new _todo__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('Test and QA', 'Conduct thorough testing and quality assurance on the latest release.', '2024-03-25', '2', true))\r\n    \r\n    projects.push(defaultProject1)\r\n    projects.push(defaultProject2)\r\n    projects.push(defaultProject3)\r\n\r\n    // Save projects to localStorage\r\n    _project__WEBPACK_IMPORTED_MODULE_1__[\"default\"].saveProjects(projects)\r\n\r\n    // Set the default projects flag to indicate that they have been created\r\n    localStorage.setItem('defaultProjectsFlag', 'true');\r\n  }\r\n\r\n  // Initialize your app with the loaded projects\r\n  _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayProjects()\r\n  ;(0,_projectItem__WEBPACK_IMPORTED_MODULE_4__.markProjectAsActive)()\r\n\r\n  // Add event listener to the \"Add Project\" button\r\n  const addProjectBtn = document.getElementById('add-project-btn')\r\n  addProjectBtn.addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].addProject)\r\n})\r\n\n\n//# sourceURL=webpack://todo-list/./src/js/index.js?");

/***/ }),

/***/ "./src/js/project.js":
/*!***************************!*\
  !*** ./src/js/project.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./src/js/todo.js\");\n// project.js\r\n\r\n\r\nclass Project {\r\n    constructor(name) {\r\n      this.name = name;\r\n      this.todos = [];\r\n    }\r\n  \r\n    addTodo(todo) {\r\n      this.todos.push(todo);\r\n    }\r\n\r\n    setName(newName) {\r\n      this.name = newName\r\n    }\r\n  \r\n    static loadProjects() {\r\n      const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];\r\n      const projects = storedProjects.map((projectData) => {\r\n        const project = new Project(projectData.name);\r\n        // Revive todos with Todo class\r\n        project.reviveTodos(projectData.todos);\r\n        return project;\r\n      });\r\n      return projects;\r\n    }\r\n  \r\n    static saveProjects(projects) {\r\n      localStorage.setItem('projects', JSON.stringify(projects));\r\n    }\r\n  \r\n    // Revive todos with Todo class methods\r\n    reviveTodos(todoData) {\r\n      this.todos = todoData.map((todo) => new _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"](todo.title, todo.description, todo.dueDate, todo.priority, todo.checked));\r\n    }\r\n  }\r\n  \n\n//# sourceURL=webpack://todo-list/./src/js/project.js?");

/***/ }),

/***/ "./src/js/projectItem.js":
/*!*******************************!*\
  !*** ./src/js/projectItem.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectItem),\n/* harmony export */   markProjectAsActive: () => (/* binding */ markProjectAsActive)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _todoElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoElement */ \"./src/js/todoElement.js\");\n\r\n\r\n\r\n\r\nconst projectListElement = document.getElementById('project-list')\r\n\r\nfunction projectItem(project, index) {\r\n    const projectItem = document.createElement('li')\r\n    projectItem.className = 'list-group-item d-flex justify-content-between align-items-center'\r\n    projectItem.style.overflow = 'hidden'\r\n    projectItem.role = 'button'\r\n\r\n    const projectH6 = document.createElement('h6')\r\n    projectH6.textContent = project.name;\r\n\r\n    const controlIcons = document.createElement('div')\r\n    controlIcons.className = 'd-flex'\r\n\r\n    const editBtn = document.createElement('i')\r\n    editBtn.className = 'bi bi-pen me-2'\r\n\r\n    const editInput = document.createElement('input')\r\n    editInput.value = projectH6.innerText\r\n    editInput.style.padding = '2px'\r\n    editInput.style.fontSize = '16px'\r\n    editInput.style.fontWeight = '500'\r\n    editInput.style.outline = 'none'\r\n    editInput.style.border = 'none'\r\n\r\n    editBtn.addEventListener('click', () => {\r\n        projectItem.replaceChild(editInput, projectH6)\r\n        editInput.focus()\r\n\r\n        // Attach a blur event listener to handle the replacement when focus is lost\r\n        editInput.addEventListener('blur', () => {\r\n        projectH6.innerText = projectItem.querySelector('input').value\r\n        projectItem.replaceChild(projectH6, projectItem.querySelector('input'))\r\n        displayProjects()\r\n        })\r\n\r\n        // Attach a keydown event listener to handle the replacement when Enter key is pressed\r\n        editInput.addEventListener('keydown', function(event) {\r\n        if (event.key === 'Enter') {\r\n            const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n            projects[index].setName(projectItem.querySelector('input').value)\r\n            _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(projects)\r\n            projectItem.replaceChild(projectH6, projectItem.querySelector('input'))\r\n            displayProjects()\r\n        }\r\n        })\r\n\r\n        // Add an event listener to handle clicks outside the edit area\r\n        document.addEventListener('click', handleDocumentClick)\r\n    })\r\n\r\n    // Event listener for clicks outside the li element\r\n    document.addEventListener('click', (event) => {\r\n        if (projectItem.querySelector('input') && !projectItem.contains(event.target)) {\r\n            projectH6.textContent = projectItem.querySelector('input').value\r\n            projectItem.replaceChild(projectH6, projectItem.querySelector('input'))\r\n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjects()\r\n        }\r\n    })\r\n\r\n    function handleDocumentClick(e) {\r\n        if (!e.target.closest(e.target)) {\r\n            projectItem.replaceChild(projectH6, editInput)\r\n            document.removeEventListener('click', handleDocumentClick)\r\n        }\r\n    }\r\n\r\n    const deleteBtn = document.createElement('i')\r\n    deleteBtn.className = 'bi bi-trash3'\r\n    deleteBtn.addEventListener('click', () => deleteProject(index))\r\n\r\n    // Add event listener to display todos when clicking on a project\r\n    projectItem.addEventListener('click', (e) => {\r\n        if (e.target !== editBtn && e.target !== deleteBtn) {\r\n            _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setSelectedProject(index)\r\n            ;(0,_todoElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\r\n            markProjectAsActive()\r\n        }\r\n    })\r\n\r\n    controlIcons.appendChild(editBtn)\r\n    controlIcons.appendChild(deleteBtn)\r\n    projectItem.appendChild(projectH6)\r\n    projectItem.appendChild(controlIcons)\r\n    projectListElement.appendChild(projectItem)\r\n}\r\n\r\n// Function to delete a project\r\nfunction deleteProject(projectIndex) {\r\n  const confirmation = window.confirm(\"Are you sure you want to delete this project?\")\r\n  \r\n  const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n  if (confirmation && projects[projectIndex]) {\r\n    _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(projects.filter((_, index) => index !== projectIndex))\r\n    if (projectIndex - 1 > 0) _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setSelectedProject(projectIndex - 1)\r\n    else _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].setSelectedProject(0)\r\n    _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayProjects()\r\n  }\r\n}\r\n\r\n// Function to mark the selected project as active\r\nfunction markProjectAsActive() {\r\n  const projectItems = projectListElement.children;\r\n\r\n  for (let i = 0; i < projectItems.length; i++) {\r\n    if (i === _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSelectedProjectIndex()) {\r\n      // Add a class to mark as active\r\n      projectItems[i].classList.add('border', 'border-success-subtle')\r\n      projectItems[i].setAttribute('aria-current', 'true')\r\n    } else {\r\n      // Remove the class from other projects\r\n      projectItems[i].classList.remove('border', 'border-success-subtle')\r\n      projectItems[i].removeAttribute('aria-current')\r\n    }\r\n  }\r\n}\n\n//# sourceURL=webpack://todo-list/./src/js/projectItem.js?");

/***/ }),

/***/ "./src/js/todo.js":
/*!************************!*\
  !*** ./src/js/todo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Todo)\n/* harmony export */ });\n// todo.js\r\nclass Todo {\r\n    constructor(title, description, dueDate, priority, checked=false) {\r\n      this.title = title\r\n      this.description = description\r\n      this.dueDate = dueDate\r\n      this.priority = priority\r\n      this.checked = checked\r\n    }\r\n\r\n    // Method to toggle a checked item\r\n    toggleCheckedItem() {\r\n      this.checked = !this.checked\r\n    }\r\n\r\n    setTitle(newTitle) {\r\n      this.title = newTitle\r\n    }\r\n\r\n    setDescription(newDescription) {\r\n      this.description = newDescription\r\n    }\r\n\r\n    setDueDate(newDueDate) {\r\n      this.dueDate = newDueDate\r\n    }\r\n\r\n    setPriority(newPriority) {\r\n      this.priority = newPriority\r\n    }\r\n  }\n\n//# sourceURL=webpack://todo-list/./src/js/todo.js?");

/***/ }),

/***/ "./src/js/todoDetails.js":
/*!*******************************!*\
  !*** ./src/js/todoDetails.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ expandModal)\n/* harmony export */ });\n/* harmony import */ var _editTodo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editTodo */ \"./src/js/editTodo.js\");\n\r\n\r\nconst expandedTodoTitle = document.getElementById('expanded-todo-title')\r\nconst modalBody = document.getElementById('modal-body')\r\nconst modalContent = document.querySelector('.modal-content')\r\n\r\nfunction expandModal(todo, index) {\r\n    // Display the modal with todo details\r\n      let priorityCategory = ''\r\n      switch (todo.priority) {\r\n        case '2':\r\n          priorityCategory = 'High Priority'\r\n          modalContent.className = 'modal-content bg-danger-subtle'\r\n          break;\r\n        case '1':\r\n          priorityCategory = 'Medium Priority'\r\n          modalContent.className = 'modal-content bg-warning-subtle'\r\n          break;\r\n        case '0':\r\n          priorityCategory = 'Low Priority'\r\n          modalContent.className = 'modal-content bg-success-subtle'\r\n          break;\r\n        default:\r\n          priorityCategory = 'No Priority Level'\r\n          modalContent.className = 'modal-content'\r\n          break;\r\n      }\r\n    expandedTodoTitle.textContent = todo.title\r\n    modalBody.innerHTML = `\r\n      <h4>${todo.description}</h4>\r\n      <h5>${todo.dueDate ? `Due Date: ${todo.dueDate}` : 'No Due Date'}</h5>\r\n      <h6>${priorityCategory}</h6>\r\n      <div class=\"my-3\">\r\n          <button id=\"editTodoBtn\" class=\"btn btn-primary\">Edit</button>\r\n      </div>\r\n    `\r\n    const editTodoBtn = document.getElementById('editTodoBtn')\r\n    editTodoBtn.addEventListener('click', () => (0,_editTodo__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(todo, index))\r\n  }\n\n//# sourceURL=webpack://todo-list/./src/js/todoDetails.js?");

/***/ }),

/***/ "./src/js/todoElement.js":
/*!*******************************!*\
  !*** ./src/js/todoElement.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ displayTodos)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/js/project.js\");\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ \"./src/js/dom.js\");\n/* harmony import */ var _todoDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todoDetails */ \"./src/js/todoDetails.js\");\n/* harmony import */ var _addTodo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addTodo */ \"./src/js/addTodo.js\");\n\r\n\r\n\r\n\r\n\r\nconst todoListElement = document.getElementById('todo-list')\r\n\r\nfunction displayTodos() {\r\n    // Clear the todo list before updating\r\n    todoListElement.innerHTML = ''\r\n    const projectIndex = _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSelectedProjectIndex()\r\n    if (projectIndex === null) return\r\n    const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n    if (projects.length === 0) return\r\n\r\n    if (projects[projectIndex].todos.length === 0) {\r\n        const placeholderItem = document.createElement('div');\r\n        placeholderItem.className = 'p-5 text-center align-self-center fs-2';\r\n        placeholderItem.textContent = 'No todos available for this project. Add a new todo!';\r\n        todoListElement.appendChild(placeholderItem);\r\n    }\r\n\r\n    // Separate checked and unchecked todos\r\n    const uncheckedTodos = projects[projectIndex].todos\r\n      .map((todo, originalIndex) => ({ todo, originalIndex }))\r\n      .filter(todo => !todo.todo.checked)\r\n      \r\n    const checkedTodos = projects[projectIndex].todos\r\n      .map((todo, originalIndex) => ({ todo, originalIndex }))\r\n      .filter(todo => todo.todo.checked)\r\n  \r\n    // Display unchecked todos first\r\n    uncheckedTodos.forEach(({ todo, originalIndex }) => {\r\n      displayTodoItem(todo, originalIndex);\r\n    });\r\n  \r\n    checkedTodos.forEach(({ todo, originalIndex }) => {\r\n      displayTodoItem(todo, originalIndex);\r\n    })\r\n\r\n    const addTodoBtn = document.getElementById('add-todo-btn')\r\n    addTodoBtn.setAttribute('data-bs-toggle', \"modal\")\r\n    addTodoBtn.setAttribute('data-bs-target', \"#expanded-todo-modal\")\r\n\r\n    // Add event listener to the \"Add Todo\" button\r\n    addTodoBtn.addEventListener('click', (e) => (0,_addTodo__WEBPACK_IMPORTED_MODULE_3__[\"default\"])())\r\n  }\r\n\r\n  function displayTodoItem(todo, index) {\r\n    const projectIndex = _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSelectedProjectIndex()\r\n    const todoChecked = todo.checked\r\n    const todoItem = document.createElement('li')\r\n    todoItem.className = 'list-group-item d-flex justify-content-between align-items-center transition'\r\n\r\n    // Add an event listener to handle checklist toggle after transition\r\n    // Remove the transition class after the transition is complete\r\n    todoItem.addEventListener('transitionend', () => {\r\n      todoItem.classList.remove('transition')\r\n    })\r\n\r\n    // Determine the color based on priority\r\n    let priorityColorClass = ''\r\n    let priorityCategory = ''\r\n    switch (todo.priority) {\r\n      case '2':\r\n        priorityColorClass = 'bg-danger'\r\n        priorityCategory = 'High'\r\n        break;\r\n      case '1':\r\n        priorityColorClass = 'bg-warning'\r\n        priorityCategory = 'Medium'\r\n        break;\r\n      case '0':\r\n        priorityColorClass = 'bg-success'\r\n        priorityCategory = 'Low'\r\n        break;\r\n      default:\r\n        break;\r\n    }\r\n\r\n    todoItem.innerHTML = `\r\n        <input ${todoChecked ? 'checked' : ''} onclick=\"toggleChecklist(${index})\" class=\"form-check-input me-1\" type=\"checkbox\">\r\n        <label role=\"button\" id='todo-${projectIndex}-${index}' class=\"ms-2 me-auto\">\r\n            <div ${todoChecked ? 'style=\"text-decoration: line-through;\"' : ''} class=\"fw-bold\">${todo.title}</div>\r\n            ${todo.dueDate ? `Due Date: '${todo.dueDate}` : 'No Due Date'}\r\n        </label>\r\n        ${todo.priority ? `\r\n            <p class=\"badge ${priorityColorClass} rounded-pill m-0 me-2\">${priorityCategory} Priority</p>\r\n        ` : ''}\r\n        <p role=\"button\" class=\"rounded-circle m-0\" onclick=\"deleteTodo(${projectIndex}, ${index})\"><i class=\"bi bi-trash3\"></i></p>\r\n    `\r\n\r\n    todoListElement.appendChild(todoItem)\r\n    const titleDiv = document.getElementById(`todo-${projectIndex}-${index}`)\r\n    titleDiv.setAttribute('data-bs-toggle', \"modal\")\r\n    titleDiv.setAttribute('data-bs-target', \"#expanded-todo-modal\")\r\n    titleDiv.addEventListener('click', () => (0,_todoDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(todo, index))\r\n  }\r\n\r\n  // Function to toggle the checklist state\r\n  window.toggleChecklist = function (todoIndex) {\r\n    const projectIndex = _dom__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSelectedProjectIndex()\r\n    const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n    const project = projects[projectIndex]\r\n\r\n    // Check if the project and its todos array exist\r\n    if (project && project.todos) {\r\n      const todo = project.todos[todoIndex];\r\n  \r\n      // Check if the todo object exists\r\n      if (todo) {\r\n        projects[projectIndex].todos[todoIndex].toggleCheckedItem()\r\n        _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(projects)\r\n        displayTodos()\r\n      } else {\r\n        console.error(`Todo at index ${todoIndex} not found in project.`)\r\n      }\r\n    } else {\r\n      console.error(`Project at index ${projectIndex} or its todos array not found.`)\r\n    }\r\n  }\r\n  \r\n  // Function to handle the deletion of a todo\r\n  window.deleteTodo = function (projectIndex, todoIndex) {\r\n    const confirmation = window.confirm(\"Are you sure you want to delete this to-do?\")\r\n    const projects = _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadProjects()\r\n    const project = projects[projectIndex]\r\n\r\n    if (project && confirmation) {\r\n      project.todos = project.todos.filter((todo, index) => index !== todoIndex)\r\n      _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"].saveProjects(projects)\r\n      displayTodos()\r\n    }\r\n  }\n\n//# sourceURL=webpack://todo-list/./src/js/todoElement.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;