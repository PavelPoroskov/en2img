/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: [BABEL] /home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/src/App.js: Using `babel-preset-react-app` requires that you specify `NODE_ENV` or `BABEL_ENV` environment variables. Valid values are \"development\", \"test\", and \"production\". Instead, received: undefined. (While processing: \"/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/babel-preset-react-app/index.js\")\n    at module.exports (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/babel-preset-react-app/create.js:58:11)\n    at module.exports (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/babel-preset-react-app/index.js:19:10)\n    at loadDescriptor (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/@babel/core/lib/config/full.js:165:14)\n    at cachedFunction (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/@babel/core/lib/config/caching.js:33:19)\n    at loadPresetDescriptor (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/@babel/core/lib/config/full.js:235:63)\n    at config.presets.reduce (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/@babel/core/lib/config/full.js:77:21)\n    at Array.reduce (<anonymous>)\n    at recurseDescriptors (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/@babel/core/lib/config/full.js:74:38)\n    at loadFullConfig (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/@babel/core/lib/config/full.js:108:6)\n    at process.nextTick (/home/and/0_dev/0_src/front-end-reactive-architectures/9781484231791/ch5_examples/photo-explorer-mobx/node_modules/@babel/core/lib/transform.js:28:33)\n    at processTicksAndRejections (internal/process/task_queues.js:79:9)");

/***/ })
/******/ ]);