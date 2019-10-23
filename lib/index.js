"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inrFilters = require("./filters/inrFilters");

Object.keys(_inrFilters).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _inrFilters[key];
    }
  });
});

var _numberFilter = require("./filters/numberFilter");

Object.keys(_numberFilter).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _numberFilter[key];
    }
  });
});