// @flow strict

import styles from './DiscordWidget.module.css';
import DiscordWidgetMember from './DiscordWidgetMember';
import type {DiscordWidgetMemberType} from './DiscordWidgetMemberType';
import DiscordWidgetPlaceholder from './DiscordWidgetPlaceholder';

type Props = $ReadOnly<{
	loading: boolean,
	error: boolean,
	members: DiscordWidgetMemberType[],
	presenceCount: number,
}>;

export default function DiscordWidget(props: Props): React.Node {
	if (props.loading) {
		return <DiscordWidgetPlaceholder />;
	}

	if (props.error) {
		// Just show nothing
		return <DiscordWidgetPlaceholder />;
	}

	return (
		<>
			<div>280+ members, {props.presenceCount} online</div>

			<ul className={styles.members}>
				{props.members.map((member) => {
					return <DiscordWidgetMember key={member.id} member={member} />;
				})}
			</ul>
		</>
	);
}
