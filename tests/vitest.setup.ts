// eslint-disable-next-line testing-library/no-manual-cleanup
import {cleanup as cleanupPreact} from '@testing-library/preact';
import {afterAll, afterEach, beforeAll} from 'vitest';

import {server} from './mocks/node';

beforeAll(() => {
	server.listen();
});

afterEach(() => {
	server.resetHandlers();
	cleanupPreact();
});

afterAll(() => {
	server.close();
});
