// eslint-disable-next-line testing-library/no-manual-cleanup
import {cleanup as cleanupTestingLibrary} from '@testing-library/preact';
import {afterAll, afterEach, beforeAll} from 'vitest';

import {server} from './mocks/node';

beforeAll(() => {
	server.listen();
});

afterEach(() => {
	server.resetHandlers();
	cleanupTestingLibrary();
});

afterAll(() => {
	server.close();
});
