var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => Scripts
});
var import_index_fc1cd570 = require("../../../chunks/index-fc1cd570.js");
const Scripts = (0, import_index_fc1cd570.c)(($$result, $$props, $$bindings, slots) => {
  return `<head><title>Dranoel - Scripts</title></head>
<p>Some useful shell scripts:</p>
<ul class="${"list-disc list-inside"}"><li><a href="${"/scripts/start.sh"}">Minecraft Server Start Script</a></li>
	<li><a href="${"/scripts/fabricmc.sh"}">FabricMC Installer</a></li>
	<li><a href="${"/scripts/papermc.sh"}">PaperMC Installer</a></li></ul>`;
});
module.exports = __toCommonJS(stdin_exports);
