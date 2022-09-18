// @flow strict

import {h} from 'preact';
import styles from './DiscordWidget.module.css';
import DiscordWidgetPlaceholder from './DiscordWidgetPlaceholder';

import type {DiscordWidgetMemberType} from './DiscordWidgetMemberType';

type Props = $ReadOnly<{
	loading: boolean,
	error: boolean,
	members: DiscordWidgetMemberType[],
	presenceCount: number,
}>;

export default function DiscordWidget(props: Props): React$Node {
	if (props.loading) {
		return <DiscordWidgetPlaceholder />;
	}

	if (props.error) {
		// Just show nothing
		return <DiscordWidgetPlaceholder />;
	}

	return (
		<>
			<div>100+ members, {props.presenceCount} online</div>

			<ul className={styles.members}>
				{props.members.map((member) => {
					return (
						<li className={styles.member} key={member.id}>
							<div className={styles.avatar} title={member.username}>
								<img
									alt={member.username + '’s avatar'}
									className={styles.image}
									height={32}
									loading="lazy"
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
				})}
			</ul>
		</>
	);
}
