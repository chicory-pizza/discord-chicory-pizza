import preactVite from '@preact/preset-vite';
import {defineConfig} from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [preactVite()],
	server: {
		// Keep this in sync with /public/_headers
		headers: {
			'X-Powered-By': 'Picnic',
			'X-Content-Type-Options': 'nosniff',
			'X-XSS-Protection': '0',
			'X-Frame-Options': 'DENY',
			// 'Strict-Transport-Security': 'max-age=31536000', // irrelevant during dev
			'Cross-Origin-Embedder-Policy': 'require-corp',
			'Cross-Origin-Opener-Policy': 'same-origin',
			'Cross-Origin-Resource-Policy': 'same-origin',
			'Permissions-Policy':
				'accelerometer=(),bluetooth=(),camera=(),display-capture=(),geolocation=(),gyroscope=(),hid=(),magnetometer=(),microphone=(),midi=(),otp-credentials=(),payment=(),publickey-credentials-create=(),publickey-credentials-get=(),serial=(),usb=(),xr-spatial-tracking=()',

			'Content-Security-Policy': [
				"default-src 'self'",

				// unsafe-inline: For Vite dev server
				"script-src 'self' 'unsafe-inline'",

				// unsafe-inline: For Vite dev server
				"style-src 'self' 'unsafe-inline'",

				"img-src 'self' https://cdn.discordapp.com/widget-avatars/",

				"connect-src 'self' https://discord.com/api/guilds/947898290735833128/widget.json",
				"frame-src 'none'",

				"frame-ancestors 'none'",
				"base-uri 'none'",
				"manifest-src 'none'",
				"media-src 'none'",
				"object-src 'none'",
				"worker-src 'none'",
			].join(';'),
		},
	},
});
