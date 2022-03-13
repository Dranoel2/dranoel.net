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
async function get({ url }) {
  const fabricVersions = await fetch("https://meta.fabricmc.net/v2/versions/installer");
  const fabricJson = await fabricVersions.json();
  const fabricStable = fabricJson.filter((version) => {
    return version.stable;
  });
  const fabricLatest = fabricStable[0].url;
  const minecraftVersions = await fetch("https://meta.fabricmc.net/v2/versions/game");
  const minecraftJson = await minecraftVersions.json();
  const minecraftStable = minecraftJson.filter((version) => {
    return version.stable;
  });
  let minecraftLatest;
  const paramVersion = url.searchParams.get("version");
  if (paramVersion != void 0) {
    const versionStrings = minecraftJson.map((version) => {
      return version.version;
    });
    if (versionStrings.includes(paramVersion)) {
      minecraftLatest = paramVersion;
    } else {
      return {
        body: "Version not found!",
        status: 404
      };
    }
  } else {
    minecraftLatest = minecraftStable[0].version;
  }
  const memory = url.searchParams.get("memory");
  if (memory !== void 0 && isNaN(+memory)) {
    return {
      status: 422,
      body: "Not a number!"
    };
  }
  const startScript = `${url.origin}/scripts/start.sh?memory=${memory || "2"}G`;
  const script = `#!/usr/bin/env bash
cd $(dirname $0)

wget -O fabric-installer.jar ${fabricLatest}
java -jar fabric-installer.jar server -mcversion ${minecraftLatest} -downloadMinecraft
rm fabric-installer.jar
mv server.jar vanilla.jar
mv fabric-server-launch.jar server.jar
echo "serverJar=vanilla.jar" > fabric-server-launcher.properties

wget -O start.sh ${startScript}
chmod +x start.sh`;
  return {
    status: 200,
    body: script
  };
}
module.exports = __toCommonJS(stdin_exports);
