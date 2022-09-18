import {defineConfig} from 'vite';
import preact from '@preact/preset-vite';
import {flowPlugin, esbuildFlowPlugin} from '@bunchtogether/vite-plugin-flow';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		preact({
			babel: {
				presets: ['@babel/preset-flow'],
			},
		}),
		flowPlugin(),
	],
	optimizeDeps: {
		esbuildOptions: {
			plugins: [esbuildFlowPlugin()],
		},
	},
	server: {
		headers: {
			'X-Powered-By': 'Picnic',
			'X-Content-Type-Options': 'nosniff',
			'X-XSS-Protection': '0',
			'X-Frame-Options': 'DENY',
			// 'Strict-Transport-Security': 'max-age=31536000', // irrelevant during dev
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Resource-Policy': 'same-site',
			'Permissions-Policy': 'interest-cohort=()',

			'Content-Security-Policy': [
				"default-src 'self'",

				// unsafe-inline: For Vite dev server
				"script-src 'self' 'unsafe-inline'",

				"connect-src 'self' https://discord.com/api/guilds/947898290735833128/widget.json",

				// unsafe-inline: For Vite dev server
				"style-src 'self' 'unsafe-inline'",

				"img-src 'self' https://cdn.discordapp.com/widget-avatars/",

				"frame-ancestors 'none'",
				"base-uri 'none'",
				"object-src 'none'",
			].join(';'),

			'Feature-Policy':
				"accelerometer 'none';ambient-light-sensor 'none';battery 'none';camera 'none';display-capture 'none';geolocation 'none';gyroscope 'none';magnetometer 'none';microphone 'none';midi 'none';payment 'none';usb 'none';xr-spatial-tracking 'none';",
		},
	},
});
