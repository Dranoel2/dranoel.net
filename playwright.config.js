import { config as load_env } from 'dotenv';
load_env();
/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	webServer: {
		command: `npm run build && GOOGLE_API_KEY=${process.env.GOOGLE_API_KEY} npm run preview`,
		port: 3000
	}
};

export default config;
