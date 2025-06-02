import {render, screen} from '@testing-library/preact';
import {http, HttpResponse} from 'msw';
import {afterEach, expect, vi, test} from 'vitest';

import {MEMBER_COUNT_ESTIMATE} from '../src/discord-widget/DiscordWidget';
import DiscordWidgetContainer, {
	WIDGET_API_URL,
} from '../src/discord-widget/DiscordWidgetContainer';

import {server} from './mocks/node';

afterEach(() => {
	vi.restoreAllMocks();
});

test('renders members', async () => {
	render(<DiscordWidgetContainer />);

	expect(
		await screen.findByText(
			`${MEMBER_COUNT_ESTIMATE.toString()}+ members, 73 online`,
		),
	).not.toBeNull();

	const membersDiv = await screen.findByTestId('members');
	expect(membersDiv.childNodes).toHaveLength(1);
});

test('API failure', async () => {
	const consoleMock = vi.spyOn(console, 'error').mockImplementation(() => {});

	server.use(
		http.get(WIDGET_API_URL, () => {
			return new HttpResponse(null, {status: 500});
		}),
	);

	render(<DiscordWidgetContainer />);

	await vi.waitUntil(() => {
		return consoleMock.mock.lastCall;
	});

	expect(consoleMock).toHaveBeenLastCalledWith(
		'Failed to load Discord members',
		new SyntaxError('Unexpected end of JSON input'),
	);
	expect(
		screen.queryByText(`${MEMBER_COUNT_ESTIMATE.toString()}+ members`),
	).toBeNull();
});

test('network failure', async () => {
	const consoleMock = vi.spyOn(console, 'error').mockImplementation(() => {});

	server.use(
		http.get(WIDGET_API_URL, () => {
			return HttpResponse.error();
		}),
	);

	render(<DiscordWidgetContainer />);

	await vi.waitUntil(() => {
		return consoleMock.mock.lastCall;
	});

	expect(consoleMock).toHaveBeenLastCalledWith(
		'Failed to load Discord members',
	);
	expect(
		screen.queryByText(`${MEMBER_COUNT_ESTIMATE.toString()}+ members`),
	).toBeNull();
});
