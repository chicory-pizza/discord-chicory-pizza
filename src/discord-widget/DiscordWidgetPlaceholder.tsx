import styles from './DiscordWidgetPlaceholder.module.css';

export default function DiscordWidgetPlaceholder() {
	const count = import.meta.env.TEST ? 2 : 60;

	const placeholders = [];
	for (let i = 0; i < count; i += 1) {
		placeholders.push(<div className={styles.member}></div>);
	}

	return (
		<div aria-hidden className={styles.container}>
			<div>&nbsp;</div>

			<div className={styles.members}>{placeholders}</div>
		</div>
	);
}
