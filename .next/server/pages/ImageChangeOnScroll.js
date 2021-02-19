module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/ImageChangeOnScroll.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/ImageChangeOnScroll.js":
/*!**************************************!*\
  !*** ./pages/ImageChangeOnScroll.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_ImageTogglerOnScroll__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/ImageTogglerOnScroll */ \"./src/ImageTogglerOnScroll.js\");\n\nvar _jsxFileName = \"/Users/olesya/code/react-hooks/pages/ImageChangeOnScroll.js\";\n\n\n\nconst ImageChangeOnScroll = () => {\n  const {\n    0: currentImageId,\n    1: setCurrentImageId\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  const {\n    0: mouseEventCnt,\n    1: setMouseEventCnt\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    window.document.title = `ImageId: ${currentImageId}`;\n    console.log(`useEffect: setting title to ${currentImageId}`);\n  }, [currentImageId]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n      children: [\"mouseEventCnt: \", mouseEventCnt]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, undefined), [1, 2, 3, 4].map(imageId => {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        onMouseOver: () => {\n          setCurrentImageId(imageId);\n          setMouseEventCnt(mouseEventCnt + 1);\n          console.log(`onMouseOver:${imageId}`);\n        },\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_src_ImageTogglerOnScroll__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          primaryImg: `/static/speakers/bw/image-${imageId}.jpg`,\n          secondaryImg: `/static/speakers/image-${imageId}.jpg`,\n          alt: \"\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 24,\n          columnNumber: 25\n        }, undefined)\n      }, imageId, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 21\n      }, undefined);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageChangeOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzP2Q4NjkiXSwibmFtZXMiOlsiSW1hZ2VDaGFuZ2VPblNjcm9sbCIsImN1cnJlbnRJbWFnZUlkIiwic2V0Q3VycmVudEltYWdlSWQiLCJ1c2VTdGF0ZSIsIm1vdXNlRXZlbnRDbnQiLCJzZXRNb3VzZUV2ZW50Q250IiwidXNlRWZmZWN0Iiwid2luZG93IiwiZG9jdW1lbnQiLCJ0aXRsZSIsImNvbnNvbGUiLCJsb2ciLCJtYXAiLCJpbWFnZUlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsTUFBTUEsbUJBQW1CLEdBQUcsTUFBTTtBQUM5QixRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Msc0RBQVEsQ0FBQyxDQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNDLGFBQUQ7QUFBQSxPQUFnQkM7QUFBaEIsTUFBb0NGLHNEQUFRLENBQUMsQ0FBRCxDQUFsRDtBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDWkMsVUFBTSxDQUFDQyxRQUFQLENBQWdCQyxLQUFoQixHQUF5QixZQUFXUixjQUFlLEVBQW5EO0FBQ0FTLFdBQU8sQ0FBQ0MsR0FBUixDQUFhLCtCQUE4QlYsY0FBZSxFQUExRDtBQUNILEdBSFEsRUFHUCxDQUFDQSxjQUFELENBSE8sQ0FBVDtBQUtBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSxvQ0FBc0JHLGFBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixFQUVLLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhUSxHQUFiLENBQWtCQyxPQUFELElBQWE7QUFDM0IsMEJBQ0k7QUFDSSxtQkFBVyxFQUFFLE1BQUs7QUFDZFgsMkJBQWlCLENBQUNXLE9BQUQsQ0FBakI7QUFDQVIsMEJBQWdCLENBQUNELGFBQWEsR0FBRSxDQUFoQixDQUFoQjtBQUNBTSxpQkFBTyxDQUFDQyxHQUFSLENBQWEsZUFBY0UsT0FBUSxFQUFuQztBQUNILFNBTEw7QUFBQSwrQkFNSSxxRUFBQyxpRUFBRDtBQUNBLG9CQUFVLEVBQUcsNkJBQTRCQSxPQUFRLE1BRGpEO0FBRUEsc0JBQVksRUFBRywwQkFBeUJBLE9BQVEsTUFGaEQ7QUFHQSxhQUFHLEVBQUM7QUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTkosU0FBVUEsT0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKO0FBY0gsS0FmQSxDQUZMO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBc0JILENBL0JEOztBQWtDZWIsa0ZBQWYiLCJmaWxlIjoiLi9wYWdlcy9JbWFnZUNoYW5nZU9uU2Nyb2xsLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGUsIHVzZUVmZmVjdH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IEltYWdlVG9nZ2xlck9uU2Nyb2xsIGZyb20gJy4uL3NyYy9JbWFnZVRvZ2dsZXJPblNjcm9sbCc7XG5cbmNvbnN0IEltYWdlQ2hhbmdlT25TY3JvbGwgPSAoKSA9PiB7XG4gICAgY29uc3QgW2N1cnJlbnRJbWFnZUlkLCBzZXRDdXJyZW50SW1hZ2VJZF0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbbW91c2VFdmVudENudCwgc2V0TW91c2VFdmVudENudF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5kb2N1bWVudC50aXRsZSA9IGBJbWFnZUlkOiAke2N1cnJlbnRJbWFnZUlkfWA7XG4gICAgICAgIGNvbnNvbGUubG9nKGB1c2VFZmZlY3Q6IHNldHRpbmcgdGl0bGUgdG8gJHtjdXJyZW50SW1hZ2VJZH1gKVxuICAgIH0sW2N1cnJlbnRJbWFnZUlkXSlcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8c3Bhbj5tb3VzZUV2ZW50Q250OiB7bW91c2VFdmVudENudH08L3NwYW4+XG4gICAgICAgICAgICB7WzEsIDIsIDMsIDRdLm1hcCgoaW1hZ2VJZCkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZUlkfVxuICAgICAgICAgICAgICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEN1cnJlbnRJbWFnZUlkKGltYWdlSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldE1vdXNlRXZlbnRDbnQobW91c2VFdmVudENudCArMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYG9uTW91c2VPdmVyOiR7aW1hZ2VJZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlVG9nZ2xlck9uU2Nyb2xsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmltYXJ5SW1nPXtgL3N0YXRpYy9zcGVha2Vycy9idy9pbWFnZS0ke2ltYWdlSWR9LmpwZ2B9XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRhcnlJbWc9e2Avc3RhdGljL3NwZWFrZXJzL2ltYWdlLSR7aW1hZ2VJZH0uanBnYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgXG4gICAgKVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2hhbmdlT25TY3JvbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/ImageChangeOnScroll.js\n");

/***/ }),

/***/ "./src/ImageTogglerOnScroll.js":
/*!*************************************!*\
  !*** ./src/ImageTogglerOnScroll.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/olesya/code/react-hooks/src/ImageTogglerOnScroll.js\";\n\n\nconst ImageTogglerOnScroll = ({\n  primaryImg,\n  secondaryImg\n}) => {\n  const imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n\n  const isInView = () => {\n    const rect = imageRef.current.getBoundingClientRect();\n    return rect.top >= 0 && rect.bottom <= window.innerHeight;\n  };\n\n  const {\n    0: isLoading,\n    1: setIsLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: inView,\n    1: setInView\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    setIsLoading(false);\n    setInView(isInView());\n    window.addEventListener(\"scroll\", scrollHandler);\n    return () => {\n      window.removeEventListener(\"scroll\", scrollHandler);\n    };\n  }, []);\n\n  const scrollHandler = () => {\n    setInView(isInView());\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n    src: isLoading ? \"data:image/gif;base64,R0lGODlhaQABAIAAAP///wAAACH5BAEAAAA\" : inView ? secondaryImg : primaryImg,\n    style: {\n      \"margin\": \"30px\",\n      \"height\": \"500px\",\n      \"width\": \"500px\"\n    },\n    alt: \"\",\n    ref: imageRef\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 28,\n    columnNumber: 9\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ImageTogglerOnScroll);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvSW1hZ2VUb2dnbGVyT25TY3JvbGwuanM/YjA3NSJdLCJuYW1lcyI6WyJJbWFnZVRvZ2dsZXJPblNjcm9sbCIsInByaW1hcnlJbWciLCJzZWNvbmRhcnlJbWciLCJpbWFnZVJlZiIsInVzZVJlZiIsImlzSW5WaWV3IiwicmVjdCIsImN1cnJlbnQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJib3R0b20iLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImlzTG9hZGluZyIsInNldElzTG9hZGluZyIsInVzZVN0YXRlIiwiaW5WaWV3Iiwic2V0SW5WaWV3IiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbEhhbmRsZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsTUFBTUEsb0JBQW9CLEdBQUcsQ0FBQztBQUFDQyxZQUFEO0FBQWFDO0FBQWIsQ0FBRCxLQUFnQztBQUV6RCxRQUFNQyxRQUFRLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUF2Qjs7QUFDQSxRQUFNQyxRQUFRLEdBQUcsTUFBTTtBQUNuQixVQUFNQyxJQUFJLEdBQUdILFFBQVEsQ0FBQ0ksT0FBVCxDQUFpQkMscUJBQWpCLEVBQWI7QUFDQSxXQUFPRixJQUFJLENBQUNHLEdBQUwsSUFBWSxDQUFaLElBQWlCSCxJQUFJLENBQUNJLE1BQUwsSUFBZUMsTUFBTSxDQUFDQyxXQUE5QztBQUNILEdBSEQ7O0FBS0EsUUFBTTtBQUFBLE9BQUNDLFNBQUQ7QUFBQSxPQUFZQztBQUFaLE1BQTRCQyxzREFBUSxDQUFDLElBQUQsQ0FBMUM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JGLHNEQUFRLENBQUMsS0FBRCxDQUFwQztBQUVBRyx5REFBUyxDQUFDLE1BQU07QUFDWkosZ0JBQVksQ0FBQyxLQUFELENBQVo7QUFDQUcsYUFBUyxDQUFDWixRQUFRLEVBQVQsQ0FBVDtBQUNBTSxVQUFNLENBQUNRLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDQyxhQUFsQztBQUNBLFdBQU0sTUFBTTtBQUNSVCxZQUFNLENBQUNVLG1CQUFQLENBQTJCLFFBQTNCLEVBQXFDRCxhQUFyQztBQUNQLEtBRkc7QUFHSCxHQVBRLEVBT04sRUFQTSxDQUFUOztBQVNBLFFBQU1BLGFBQWEsR0FBRyxNQUFNO0FBQ3hCSCxhQUFTLENBQUNaLFFBQVEsRUFBVCxDQUFUO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSTtBQUNBLE9BQUcsRUFDQ1EsU0FBUyxHQUFHLDJEQUFILEdBQWlFRyxNQUFNLEdBQUdkLFlBQUgsR0FBa0JELFVBRnRHO0FBSUksU0FBSyxFQUFFO0FBQUUsZ0JBQVMsTUFBWDtBQUFtQixnQkFBUyxPQUE1QjtBQUFxQyxlQUFRO0FBQTdDLEtBSlg7QUFLSSxPQUFHLEVBQUMsRUFMUjtBQUtXLE9BQUcsRUFBRUU7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBU0gsQ0FqQ0Q7O0FBbUNlSCxtRkFBZiIsImZpbGUiOiIuL3NyYy9JbWFnZVRvZ2dsZXJPblNjcm9sbC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVJlZiwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbmNvbnN0IEltYWdlVG9nZ2xlck9uU2Nyb2xsID0gKHtwcmltYXJ5SW1nLCBzZWNvbmRhcnlJbWd9KSA9PiB7XG4gICAgXG4gICAgY29uc3QgaW1hZ2VSZWYgPSB1c2VSZWYobnVsbCk7XG4gICAgY29uc3QgaXNJblZpZXcgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IHJlY3QgPSBpbWFnZVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICByZXR1cm4gcmVjdC50b3AgPj0gMCAmJiByZWN0LmJvdHRvbSA8PSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICAgIGNvbnN0IFtpblZpZXcsIHNldEluVmlld10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICBzZXRJblZpZXcoaXNJblZpZXcoKSk7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNjcm9sbEhhbmRsZXIpO1xuICAgICAgICByZXR1cm4oKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBzY3JvbGxIYW5kbGVyKTtcbiAgICB9XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3Qgc2Nyb2xsSGFuZGxlciA9ICgpID0+IHtcbiAgICAgICAgc2V0SW5WaWV3KGlzSW5WaWV3KCkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtcbiAgICAgICAgICAgIGlzTG9hZGluZyA/IFwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoYVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBXCIgOiBpblZpZXcgPyBzZWNvbmRhcnlJbWcgOiBwcmltYXJ5SW1nXG4gICAgICAgIH0gXG4gICAgICAgICAgICBzdHlsZT17eyBcIm1hcmdpblwiOlwiMzBweFwiLCBcImhlaWdodFwiOlwiNTAwcHhcIiwgXCJ3aWR0aFwiOlwiNTAwcHhcIn19XG4gICAgICAgICAgICBhbHQ9XCJcIiByZWY9e2ltYWdlUmVmfVxuICAgICAgICAvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VUb2dnbGVyT25TY3JvbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/ImageTogglerOnScroll.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });