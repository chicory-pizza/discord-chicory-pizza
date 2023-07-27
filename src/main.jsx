// @flow strict

import {render} from 'preact';

import DiscordWidgetContainer from './discord-widget/DiscordWidgetContainer';
import './index.css';

const box = document.getElementById('discord-widget');
if (box) {
	render(<DiscordWidgetContainer />, box);
}
