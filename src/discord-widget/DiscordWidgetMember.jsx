// @flow strict

import {useState} from 'preact/hooks';

import styles from './DiscordWidgetMember.module.css';
import type {DiscordWidgetMemberType} from './DiscordWidgetMemberType';

type Props = $ReadOnly<{
	member: DiscordWidgetMemberType,
}>;

export default function DiscordWidgetMember({member}: Props): React$Node {
	const [isError, setIsError] = useState(false);

	if (isError) {
		return null;
	}

	return (
		<li className={styles.member} key={member.id}>
			<div className={styles.avatar} title={member.username}>
				<img
					alt={member.username + '’s avatar'}
					className={styles.image}
					crossOrigin
					height={32}
					loading="lazy"
					onError={() => {
						// default Discord avatars don't return Access-Control-Allow-Origin header
						setIsError(true);
					}}
					src={member.avatar_url}
					width={32}
				/>

				<span
					className={
						member.status === 'online'
							? styles.statusOnline
							: member.status === 'idle'
							? styles.statusIdle
							: member.status === 'dnd'
							? styles.statusDnd
							: ''
					}
				/>
			</div>
		</li>
	);
}
