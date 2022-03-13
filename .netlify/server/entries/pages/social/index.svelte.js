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
  default: () => Social
});
var import_index_fc1cd570 = require("../../../chunks/index-fc1cd570.js");
const Social = (0, import_index_fc1cd570.c)(($$result, $$props, $$bindings, slots) => {
  let { videos } = $$props;
  if ($$props.videos === void 0 && $$bindings.videos && videos !== void 0)
    $$bindings.videos(videos);
  return `<head><title>Dranoel - Social</title></head>

<h1 class="${"text-xl"}">Youtube:</h1>
<a href="${"https://www.youtube.com/channel/UCBm396dLk0qyLmkcUFkso3w"}">Check out my channel!</a>
${videos.length >= 1 ? `<ul class="${"grid grid-cols-4 gap-1"}">${(0, import_index_fc1cd570.d)(videos, (video) => {
    return `<li class="${"border-solid border-2 border-black p-1 h-full auto-rows-max"}"><a href="${"https://youtu.be/" + (0, import_index_fc1cd570.e)(video.id)}" class="${"text-black hover:text-black"}"><img${(0, import_index_fc1cd570.b)("src", video.thumbnail, 0)} class="${"w-full border-solid border-black border-2"}" alt="${"The video thumbnail"}">
					<h1 class="${"text-xl text-center border-b-black border-solid border-b-2"}">${(0, import_index_fc1cd570.e)(video.title)}</h1>
					<p>${(0, import_index_fc1cd570.e)(video.description)}</p></a>
			</li>`;
  })}</ul>` : `<div class="${"text-center"}"><h1 class="${"text-lg"}">No videos found!</h1>
		<p class="${"text-sm"}">This may be a bug.</p></div>`}`;
});
module.exports = __toCommonJS(stdin_exports);
