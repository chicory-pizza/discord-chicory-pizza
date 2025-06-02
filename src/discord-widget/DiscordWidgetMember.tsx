import {useState} from 'preact/hooks';
import type {z} from 'zod/v4-mini';

import styles from './DiscordWidgetMember.module.css';
import type {DiscordWidgetMemberSchema} from './DiscordWidgetMemberType';

type Props = Readonly<{
	member: z.infer<typeof DiscordWidgetMemberSchema>;
}>;

export default function DiscordWidgetMember({member}: Props) {
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
					crossOrigin="anonymous"
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
								: // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
									member.status === 'dnd'
									? styles.statusDnd
									: ''
					}
				/>
			</div>
		</li>
	);
}
