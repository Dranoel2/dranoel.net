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
  default: () => _layout
});
var import_index_fc1cd570 = require("../../chunks/index-fc1cd570.js");
const Footer = (0, import_index_fc1cd570.c)(($$result, $$props, $$bindings, slots) => {
  return `<a class="${"text-zinc-400 hover:text-zinc-500 fixed bottom-3 left-3"}" href="${"https://github.com/Dranoel2/dranoel.net/LICENSE"}">\xA9 2022 Dranoel</a>
<a class="${"fixed bottom-3 right-3 text-zinc-400 hover:text-zinc-500"}" href="${"https://github.com/Dranoel2/dranoel.net"}"><svg xmlns="${"http://www.w3.org/2000/svg"}" width="${"16"}" height="${"16"}" fill="${"currentColor"}" viewBox="${"0 0 16 16"}"><path d="${"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"}"></path></svg></a>`;
});
const getStores = () => {
  const stores = (0, import_index_fc1cd570.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const NavLink = (0, import_index_fc1cd570.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_fc1cd570.a)(page, (value) => $page = value);
  let { href } = $$props;
  let base_path;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  base_path = "/" + $page.url.pathname.substring(1).split("/")[0];
  $$unsubscribe_page();
  return `<a class="${"w-full text-center " + (0, import_index_fc1cd570.e)(href == base_path ? "text-nav-active" : "text-nav-inactive") + " hover:text-nav-active align-middle leading-[3.5rem] duration-500"}"${(0, import_index_fc1cd570.b)("href", href, 0)}>${slots.default ? slots.default({}) : ``}</a>`;
});
const Navbar = (0, import_index_fc1cd570.c)(($$result, $$props, $$bindings, slots) => {
  return `

<div class="${"bg-nav-bg sticky top-3 h-14 w-full flex justify-center content-center text-xl hover:opacity-100 duration-100 " + (0, import_index_fc1cd570.e)("opacity-75 shadow-sm")}">${(0, import_index_fc1cd570.v)(NavLink, "NavLink").$$render($$result, { href: "/" }, {}, {
    default: () => {
      return `Home`;
    }
  })}
	${(0, import_index_fc1cd570.v)(NavLink, "NavLink").$$render($$result, { href: "/social" }, {}, {
    default: () => {
      return `Social`;
    }
  })}
	${(0, import_index_fc1cd570.v)(NavLink, "NavLink").$$render($$result, { href: "/scripts" }, {}, {
    default: () => {
      return `Scripts`;
    }
  })}</div>`;
});
var app = "";
const _layout = (0, import_index_fc1cd570.c)(($$result, $$props, $$bindings, slots) => {
  return `<div class="${"p-3 h-full"}"><div class="${"w-full"}">${(0, import_index_fc1cd570.v)(Navbar, "Navbar").$$render($$result, {}, {}, {})}

		<main id="${"main"}">${slots.default ? slots.default({}) : ``}</main></div>

	${(0, import_index_fc1cd570.v)(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});
module.exports = __toCommonJS(stdin_exports);
