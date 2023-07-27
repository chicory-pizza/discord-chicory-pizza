// @flow strict

import styles from './DiscordWidgetPlaceholder.module.css';

export default function DiscordWidgetPlaceholder(): React$Node {
	const placeholders = [];
	for (let i = 0; i < 80; i += 1) {
		placeholders.push(<div className={styles.member}></div>);
	}

	return (
		<div aria-hidden className={styles.container}>
			<div>&nbsp;</div>

			<div className={styles.members}>{placeholders}</div>
		</div>
	);
}
