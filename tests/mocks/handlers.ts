import {http, HttpResponse} from 'msw';

import {WIDGET_API_URL} from '../../src/discord-widget/DiscordWidgetContainer';

export const handlers = [
	http.get(WIDGET_API_URL, () => {
		return HttpResponse.json({
			id: '947898290735833128',
			name: 'gayester baby jail (chicory fan server)',
			instant_invite: null,
			channels: [
				{id: '971364946908704859', name: 'the mountain top', position: 0},
			],
			members: [
				{
					id: '0',
					username: 'a...',
					discriminator: '0000',
					avatar: null,
					status: 'online',
					avatar_url:
						'https://cdn.discordapp.com/widget-avatars/GmycHs_OlvvdnlmdQKoshYjroBjhBNZt__MIyrLEiT0/lKUds423gAohbjssrIPh_W9GvDoHrDaa4jfaoLIJbw-mX_M2zUZwgH562Bk3slkU2Iv3ILzIWhUqTAScdAI3UlsOFCgJvZWNIaets157QOqLSqxFKPeJ7pgKwTpIadAY-o6xOPs-WN_BHek',
				},
			],
			presence_count: 78,
		});
	}),
];
