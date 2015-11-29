var app =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _interopRequireDefault = __webpack_require__(1)["default"];

	var _ratingController = __webpack_require__(11);

	var _ratingController2 = _interopRequireDefault(_ratingController);

		_ratingController2["default"].listenUpdates();

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (obj) {
	  return obj && obj.__esModule ? obj : {
	    "default": obj
	  };
	};

	exports.__esModule = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = __webpack_require__(3)["default"];

	var _classCallCheck = __webpack_require__(7)["default"];

	var _interopRequireDefault = __webpack_require__(1)["default"];

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _config = __webpack_require__(8);

	var _config2 = _interopRequireDefault(_config);

	var ParticipantCollection = (function () {
	  function ParticipantCollection() {
	    _classCallCheck(this, ParticipantCollection);

	    this.participants = [];
	    this._version = undefined;
	    this._updates = [];
	  }

	  _createClass(ParticipantCollection, [{
	    key: "getParticipants",
	    value: function getParticipants() {
	      var _this = this;

	      return fetch(_config2["default"].urls.list).then(function (response) {
	        return response.json();
	      }).then(function (participants) {
	        _this.participants = participants.records;
	        return _this._updates ? _this.applyAccumulatedUpdates(_this._updates) : _this.sort(_this.participants);
	      });
	    }
	  }, {
	    key: "sort",
	    value: function sort(participants) {
	      return participants.sort(function (a, b) {
	        return b.points - a.points;
	      });
	    }
	  }, {
	    key: "accumulateUpdates",
	    value: function accumulateUpdates(updates) {
	      this._updates = this._updates.concat(updates);
	    }
	  }, {
	    key: "applyAccumulatedUpdates",
	    value: function applyAccumulatedUpdates(setsUpdates) {
	      var _this2 = this;

	      setsUpdates.forEach(function (data) {
	        if (data.fromVersion < _this2._version) return;

	        _this2.applyUpdates(data);
	      });

	      return this.sort(this.participants);
	    }

	    //TODO solve sorting after applyAccumulatedUpdates
	  }, {
	    key: "applyUpdates",
	    value: function applyUpdates(data) {
	      var _this3 = this;

	      data.updates.forEach(function (update) {
	        return _this3.participants.find(function (element, index, array) {
	          return element.id == update.id;
	        }).points = update.points;
	      });

	      return this.sort(this.participants);
	    }
	  }]);

	  return ParticipantCollection;
	})();

	exports["default"] = new ParticipantCollection();
	module.exports = exports["default"];

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _defineProperty = __webpack_require__(4);

	var _defineProperty2 = _interopRequireDefault(_defineProperty);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { "default": obj };
	}

	exports["default"] = (function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      (0, _defineProperty2["default"])(target, descriptor.key, descriptor);
	    }
	  }

	  return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) defineProperties(Constructor, staticProps);
	    return Constructor;
	  };
	})();

	exports.__esModule = true;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

		module.exports = { "default": __webpack_require__(5), __esModule: true };

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var $ = __webpack_require__(6);
	module.exports = function defineProperty(it, key, desc) {
	  return $.setDesc(it, key, desc);
	};

/***/ },
/* 6 */
/***/ function(module, exports) {

	"use strict";

	var $Object = Object;
	module.exports = {
	  create: $Object.create,
	  getProto: $Object.getPrototypeOf,
	  isEnum: ({}).propertyIsEnumerable,
	  getDesc: $Object.getOwnPropertyDescriptor,
	  setDesc: $Object.defineProperty,
	  setDescs: $Object.defineProperties,
	  getKeys: $Object.keys,
	  getNames: $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each: [].forEach
	};

/***/ },
/* 7 */
/***/ function(module, exports) {

	"use strict";

	exports["default"] = function (instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	};

	exports.__esModule = true;

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
		value: true
	});
	exports['default'] = {
		urls: {
			list: 'http://rating.smartjs.academy/rating?hardMode',
			updates: 'ws://rating.smartjs.academy/rating'
		},
		ws: {
			events: {
				connect: 'CONNECTED'
			}
		}
	};
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(3)['default'];

	var _classCallCheck = __webpack_require__(7)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var RatingView = (function () {
	  function RatingView(args) {
	    _classCallCheck(this, RatingView);

	    this.ratingView = document.getElementById('rating');
	  }

	  _createClass(RatingView, [{
	    key: 'renderList',
	    value: function renderList(participants) {
	      this.ratingView.innerHTML = participants.map(function (participant) {
	        return '<li>' + participant.name + ' ' + participant.points + '</li>';
	      }).join('');
	    }
	  }]);

	  return RatingView;
	})();

	exports['default'] = new RatingView();
	module.exports = exports['default'];

/***/ },
/* 10 */,
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _createClass = __webpack_require__(3)['default'];

	var _classCallCheck = __webpack_require__(7)['default'];

	var _interopRequireDefault = __webpack_require__(1)['default'];

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _config = __webpack_require__(8);

	var _config2 = _interopRequireDefault(_config);

	var _participantCollection = __webpack_require__(2);

	var _participantCollection2 = _interopRequireDefault(_participantCollection);

	var _ratingView = __webpack_require__(9);

	var _ratingView2 = _interopRequireDefault(_ratingView);

	var loaded = false;

	var RatingController = (function () {
	  function RatingController(args) {
	    _classCallCheck(this, RatingController);
	  }

	  _createClass(RatingController, [{
	    key: 'listenUpdates',

	    // code
	    value: function listenUpdates() {
	      var socket = new WebSocket(_config2['default'].urls.updates);

	      socket.onmessage = function (event) {
	        return _handleSocketData(JSON.parse(event.data));
	      };
	    }
	  }]);

	  return RatingController;
	})();

	function _handleSocketData(data) {
	  if (data && data.status === _config2['default'].ws.events.connect) {
	    return _participantCollection2['default'].getParticipants().then(function (participants) {
	      loaded = true;
	      _ratingView2['default'].renderList(participants);
	    });
	  } else if (data && !loaded) {
	    return _participantCollection2['default'].accumulateUpdates(data);
	  }

	  return _ratingView2['default'].renderList(_participantCollection2['default'].applyUpdates(data));
	}

	exports['default'] = new RatingController();
	module.exports = exports['default'];

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL2hvbWUvcGF1bC9wcm9qZWN0cy9hcmNoaXRlY3R1cmVfc3R1ZHkvcmF0aW5nLWVzNi9idWlsZC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA4MjlhM2ZlNjU1N2VlYjg3ZDk4OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL3NyYy9wYXJ0aWNpcGFudENvbGxlY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY3JlYXRlLWNsYXNzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcnVudGltZS9jb3JlLWpzL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L2ZuL29iamVjdC9kZWZpbmUtcHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1ydW50aW1lL34vY29yZS1qcy9saWJyYXJ5L21vZHVsZXMvJC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzcy1jYWxsLWNoZWNrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb25maWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhdGluZ1ZpZXcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JhdGluZ0NvbnRyb2xsZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA4MjlhM2ZlNjU1N2VlYjg3ZDk4OVxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHJhdGluZ0NvbnRyb2xsZXIgZnJvbSBcIi4vcmF0aW5nQ29udHJvbGxlclwiO1xuXG5yYXRpbmdDb250cm9sbGVyLmxpc3RlblVwZGF0ZXMoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9hcHAuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5kZWZhdWx0ID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIGRlZmF1bHQ6IG9ialxuICB9O1xufTtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vYmFiZWwtcnVudGltZS9oZWxwZXJzL2ludGVyb3AtcmVxdWlyZS1kZWZhdWx0LmpzXG4gKiovIiwiaW1wb3J0IGNvbmZpZyBmcm9tIFwiLi9jb25maWdcIjtcblxuY2xhc3MgUGFydGljaXBhbnRDb2xsZWN0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wYXJ0aWNpcGFudHMgPSBbXTtcbiAgICB0aGlzLl92ZXJzaW9uID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3VwZGF0ZXMgPSBbXTtcbiAgfVxuXG4gIGdldFBhcnRpY2lwYW50cygpIHtcbiAgICByZXR1cm4gZmV0Y2goY29uZmlnLnVybHMubGlzdClcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+ICByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihwYXJ0aWNpcGFudHMgPT4ge1xuICAgICAgICB0aGlzLnBhcnRpY2lwYW50cyA9IHBhcnRpY2lwYW50cy5yZWNvcmRzO1xuICAgICAgICByZXR1cm4gdGhpcy5fdXBkYXRlcyA/IHRoaXMuYXBwbHlBY2N1bXVsYXRlZFVwZGF0ZXModGhpcy5fdXBkYXRlcykgOiB0aGlzLnNvcnQodGhpcy5wYXJ0aWNpcGFudHMpO1xuICAgICAgfSlcbiAgfVxuXG4gIHNvcnQocGFydGljaXBhbnRzKSB7XG4gICAgcmV0dXJuIHBhcnRpY2lwYW50cy5zb3J0KChhLGIpID0+IGIucG9pbnRzIC0gYS5wb2ludHMgKTtcbiAgfVxuXG4gIGFjY3VtdWxhdGVVcGRhdGVzKHVwZGF0ZXMpIHtcbiAgICB0aGlzLl91cGRhdGVzICA9IHRoaXMuX3VwZGF0ZXMuY29uY2F0KHVwZGF0ZXMpO1xuICB9XG5cbiAgYXBwbHlBY2N1bXVsYXRlZFVwZGF0ZXMoc2V0c1VwZGF0ZXMpIHtcbiAgICBzZXRzVXBkYXRlcy5mb3JFYWNoKChkYXRhKSA9PiB7XG4gICAgICBpZihkYXRhLmZyb21WZXJzaW9uIDwgdGhpcy5fdmVyc2lvbikgcmV0dXJuO1xuXG4gICAgICB0aGlzLmFwcGx5VXBkYXRlcyhkYXRhKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnNvcnQodGhpcy5wYXJ0aWNpcGFudHMpO1xuICB9XG5cbiAgLy9UT0RPIHNvbHZlIHNvcnRpbmcgYWZ0ZXIgYXBwbHlBY2N1bXVsYXRlZFVwZGF0ZXNcbiAgYXBwbHlVcGRhdGVzKGRhdGEpIHtcbiAgICBkYXRhLnVwZGF0ZXMuZm9yRWFjaCgodXBkYXRlKSA9PiBcbiAgICAgIHRoaXMucGFydGljaXBhbnRzLmZpbmQoKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4gXG4gICAgICAgIGVsZW1lbnQuaWQgPT0gdXBkYXRlLmlkKS5wb2ludHMgPSB1cGRhdGUucG9pbnRzKTtcblxuICAgIHJldHVybiB0aGlzLnNvcnQodGhpcy5wYXJ0aWNpcGFudHMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBQYXJ0aWNpcGFudENvbGxlY3Rpb24oKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9wYXJ0aWNpcGFudENvbGxlY3Rpb24uanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eSA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKTtcblxudmFyIF9kZWZpbmVQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZWZpbmVQcm9wZXJ0eSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmV4cG9ydHMuZGVmYXVsdCA9IChmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgKDAsIF9kZWZpbmVQcm9wZXJ0eTIuZGVmYXVsdCkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvaGVscGVycy9jcmVhdGUtY2xhc3MuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHsgXCJkZWZhdWx0XCI6IHJlcXVpcmUoXCJjb3JlLWpzL2xpYnJhcnkvZm4vb2JqZWN0L2RlZmluZS1wcm9wZXJ0eVwiKSwgX19lc01vZHVsZTogdHJ1ZSB9O1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2NvcmUtanMvb2JqZWN0L2RlZmluZS1wcm9wZXJ0eS5qc1xuICoqLyIsInZhciAkID0gcmVxdWlyZSgnLi4vLi4vbW9kdWxlcy8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIGRlc2Mpe1xuICByZXR1cm4gJC5zZXREZXNjKGl0LCBrZXksIGRlc2MpO1xufTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL34vYmFiZWwtcnVudGltZS9+L2NvcmUtanMvbGlicmFyeS9mbi9vYmplY3QvZGVmaW5lLXByb3BlcnR5LmpzXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9+L2JhYmVsLXJ1bnRpbWUvfi9jb3JlLWpzL2xpYnJhcnkvbW9kdWxlcy8kLmpzXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vfi9iYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3MtY2FsbC1jaGVjay5qc1xuICoqLyIsImV4cG9ydCBkZWZhdWx0IHtcblx0dXJsczoge1xuXHRcdGxpc3Q6ICdodHRwOi8vcmF0aW5nLnNtYXJ0anMuYWNhZGVteS9yYXRpbmc/aGFyZE1vZGUnLFxuXHRcdHVwZGF0ZXM6ICd3czovL3JhdGluZy5zbWFydGpzLmFjYWRlbXkvcmF0aW5nJ1xuXHR9LFxuXHR3czoge1xuXHRcdGV2ZW50czoge1xuXHRcdFx0Y29ubmVjdDogJ0NPTk5FQ1RFRCdcblx0XHR9XG5cdH1cbn1cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9jb25maWcuanNcbiAqKi8iLCJcbmNsYXNzIFJhdGluZ1ZpZXcge1xuICBjb25zdHJ1Y3RvcihhcmdzKSB7XG4gICAgdGhpcy5yYXRpbmdWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhdGluZycpO1xuICB9XG5cbiAgcmVuZGVyTGlzdChwYXJ0aWNpcGFudHMpIHtcbiAgXHR0aGlzLnJhdGluZ1ZpZXcuaW5uZXJIVE1MID0gcGFydGljaXBhbnRzLm1hcChcbiAgXHRcdHBhcnRpY2lwYW50ID0+IGA8bGk+JHtwYXJ0aWNpcGFudC5uYW1lfSAke3BhcnRpY2lwYW50LnBvaW50c308L2xpPmBcbiAgXHQpLmpvaW4oJycpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSYXRpbmdWaWV3KCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmF0aW5nVmlldy5qc1xuICoqLyIsImltcG9ydCBjb25maWcgZnJvbSBcIi4vY29uZmlnXCI7XG5pbXBvcnQgcGFydGljaXBhbnRDb2xsZWN0aW9uIGZyb20gJy4vcGFydGljaXBhbnRDb2xsZWN0aW9uJztcbmltcG9ydCByYXRpbmdWaWV3IGZyb20gJy4vcmF0aW5nVmlldyc7XG5cbmxldCBsb2FkZWQgPSBmYWxzZTtcblxuY2xhc3MgUmF0aW5nQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKGFyZ3MpIHtcbiAgICAvLyBjb2RlXG4gIH1cblxuICBsaXN0ZW5VcGRhdGVzKCkge1xuICAgIGNvbnN0IHNvY2tldCA9IG5ldyBXZWJTb2NrZXQoY29uZmlnLnVybHMudXBkYXRlcyk7XG5cbiAgICBzb2NrZXQub25tZXNzYWdlID0gKGV2ZW50KSA9PiBfaGFuZGxlU29ja2V0RGF0YShKU09OLnBhcnNlKGV2ZW50LmRhdGEpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfaGFuZGxlU29ja2V0RGF0YShkYXRhKSB7XG4gIGlmIChkYXRhICYmIGRhdGEuc3RhdHVzID09PSBjb25maWcud3MuZXZlbnRzLmNvbm5lY3QpIHtcbiAgICByZXR1cm4gcGFydGljaXBhbnRDb2xsZWN0aW9uLmdldFBhcnRpY2lwYW50cygpLnRoZW4ocGFydGljaXBhbnRzID0+IHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICByYXRpbmdWaWV3LnJlbmRlckxpc3QocGFydGljaXBhbnRzKTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIGlmIChkYXRhICYmICFsb2FkZWQpIHtcbiAgICByZXR1cm4gcGFydGljaXBhbnRDb2xsZWN0aW9uLmFjY3VtdWxhdGVVcGRhdGVzKGRhdGEpO1xuICB9XG4gICAgXG4gIHJldHVybiByYXRpbmdWaWV3LnJlbmRlckxpc3QocGFydGljaXBhbnRDb2xsZWN0aW9uLmFwcGx5VXBkYXRlcyhkYXRhKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSYXRpbmdDb250cm9sbGVyKCk7XG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmF0aW5nQ29udHJvbGxlci5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN0Q0E7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQ0E7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTs7O0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7O0FBT0E7OztBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBekNBOzs7QUE0Q0E7Ozs7Ozs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ3pCQTs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7O0FBVEE7OztBQVlBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBSkE7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBVEE7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Iiwic291cmNlUm9vdCI6IiJ9