const { init } = require('../handler.js');

exports.handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","github.svg"]),
	_: {
		mime: {".png":"image/png",".svg":"image/svg+xml"},
		entry: {"file":"start-3b3edfb6.js","js":["start-3b3edfb6.js","chunks/vendor-562a8a68.js"],"css":[]},
		nodes: [
			() => Promise.resolve().then(() => require('../server/nodes/0.js')),
			() => Promise.resolve().then(() => require('../server/nodes/1.js')),
			() => Promise.resolve().then(() => require('../server/nodes/2.js')),
			() => Promise.resolve().then(() => require('../server/nodes/3.js')),
			() => Promise.resolve().then(() => require('../server/nodes/4.js'))
		],
		routes: [
			{
				type: 'page',
				key: "",
				pattern: /^\/$/,
				params: null,
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				key: "scripts",
				pattern: /^\/scripts\/?$/,
				params: null,
				path: "/scripts",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'endpoint',
				pattern: /^\/scripts\/fabricmc\.sh$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/scripts/fabricmc.sh.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/scripts\/papermc\.sh$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/scripts/papermc.sh.ts.js'))
			},
			{
				type: 'endpoint',
				pattern: /^\/scripts\/start\.sh$/,
				params: null,
				load: () => Promise.resolve().then(() => require('../server/entries/endpoints/scripts/start.sh.ts.js'))
			},
			{
				type: 'page',
				key: "social",
				pattern: /^\/social\/?$/,
				params: null,
				path: "/social",
				shadow: () => Promise.resolve().then(() => require('../server/entries/endpoints/social/index.ts.js')),
				a: [0,4],
				b: [1]
			}
		]
	}
});
