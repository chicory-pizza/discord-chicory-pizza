// @flow strict

import {h} from 'preact';
import styles from './DiscordWidgetPlaceholder.module.css';

import type {DiscordWidgetMemberType} from './DiscordWidgetMemberType';

export default function DiscordWidgetPlaceholder(): React$Node {
	const placeholders = [];
	for (let i = 0; i < 40; i += 1) {
		placeholders.push(<div className={styles.member}></div>);
	}

	return (
		<div aria-hidden className={styles.container}>
			<div>&nbsp;</div>

			<div className={styles.members}>{placeholders}</div>
		</div>
	);
}
