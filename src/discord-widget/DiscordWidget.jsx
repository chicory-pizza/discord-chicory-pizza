// @flow strict

import {h} from 'preact';
import styles from './DiscordWidget.module.css';
import DiscordWidgetPlaceholder from './DiscordWidgetPlaceholder';

import type {DiscordWidgetMemberType} from './DiscordWidgetMemberType';
import DiscordWidgetMember from './DiscordWidgetMember';

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
			<div>200+ members, {props.presenceCount} online</div>

			<ul className={styles.members}>
				{props.members.map((member) => {
					return <DiscordWidgetMember member={member} />;
				})}
			</ul>
		</>
	);
}
