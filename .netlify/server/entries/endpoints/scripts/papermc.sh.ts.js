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
  const project = await fetch("https://papermc.io/api/v2/projects/paper");
  const projectJson = await project.json();
  const projectVersions = projectJson.versions;
  const projectVersion = url.searchParams.get("version") || projectVersions[projectVersions.length - 1];
  const version = await fetch(`https://papermc.io/api/v2/projects/paper/versions/${projectVersion}`);
  if (version.ok) {
    const versionJson = await version.json();
    const versionBuilds = versionJson.builds;
    const versionBuild = versionBuilds[versionBuilds.length - 1];
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

wget -O server.jar https://papermc.io/api/v2/projects/paper/versions/${projectVersion}/builds/${versionBuild}/downloads/paper-${projectVersion}-${versionBuild}.jar

wget -O start.sh ${startScript}`;
    return {
      status: 200,
      body: script
    };
  } else {
    return {
      status: 404,
      body: "Version not found!"
    };
  }
}
module.exports = __toCommonJS(stdin_exports);
