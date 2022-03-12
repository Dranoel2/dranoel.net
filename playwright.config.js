import { config as load_env } from 'dotenv';
load_env();
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: `pnpm build && GOOGLE_API_KEY=${process.env.GOOGLE_API_KEY} pnpm preview`,
		port: 3000
	}
};

export default config;
