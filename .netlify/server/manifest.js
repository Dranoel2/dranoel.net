var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  manifest: () => manifest
});
const manifest = {
  appDir: "_app",
  assets: /* @__PURE__ */ new Set(["favicon.png", "github.svg"]),
  _: {
    mime: { ".png": "image/png", ".svg": "image/svg+xml" },
    entry: { "file": "start-3b3edfb6.js", "js": ["start-3b3edfb6.js", "chunks/vendor-562a8a68.js"], "css": [] },
    nodes: [
      () => Promise.resolve().then(() => __toESM(require("./nodes/0.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/1.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/2.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/3.js"))),
      () => Promise.resolve().then(() => __toESM(require("./nodes/4.js")))
    ],
    routes: [
      {
        type: "page",
        key: "",
        pattern: /^\/$/,
        params: null,
        path: "/",
        shadow: null,
        a: [0, 2],
        b: [1]
      },
      {
        type: "page",
        key: "scripts",
        pattern: /^\/scripts\/?$/,
        params: null,
        path: "/scripts",
        shadow: null,
        a: [0, 3],
        b: [1]
      },
      {
        type: "endpoint",
        pattern: /^\/scripts\/fabricmc\.sh$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/scripts/fabricmc.sh.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/scripts\/papermc\.sh$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/scripts/papermc.sh.ts.js")))
      },
      {
        type: "endpoint",
        pattern: /^\/scripts\/start\.sh$/,
        params: null,
        load: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/scripts/start.sh.ts.js")))
      },
      {
        type: "page",
        key: "social",
        pattern: /^\/social\/?$/,
        params: null,
        path: "/social",
        shadow: () => Promise.resolve().then(() => __toESM(require("./entries/endpoints/social/index.ts.js"))),
        a: [0, 4],
        b: [1]
      }
    ]
  }
};
module.exports = __toCommonJS(stdin_exports);
