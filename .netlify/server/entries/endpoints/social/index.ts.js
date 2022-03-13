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
  get: () => get
});
const apiKey = process.env.GOOGLE_API_KEY;
const playlistId = "UUBm396dLk0qyLmkcUFkso3w";
async function getVideos() {
  const response = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=contentDetails,snippet&playlistId=${playlistId}&key=${apiKey}`, {
    method: "get",
    headers: {
      "content-type": "application/json"
    }
  });
  if (response.ok) {
    const json = await response.json();
    const videos = json.items.map((item) => {
      return {
        title: item.snippet.title,
        thumbnail: item.snippet.thumbnails.medium.url,
        id: item.contentDetails.videoId,
        description: item.snippet.description.split("\n")[0]
      };
    });
    return videos;
  } else {
    return [];
  }
}
const get = async () => {
  return {
    body: {
      videos: await getVideos()
    }
  };
};
module.exports = __toCommonJS(stdin_exports);
