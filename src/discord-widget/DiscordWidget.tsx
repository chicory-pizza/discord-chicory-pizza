import styles from './DiscordWidget.module.css';
import DiscordWidgetMember from './DiscordWidgetMember';
import type {DiscordWidgetMemberType} from './DiscordWidgetMemberType';
import DiscordWidgetPlaceholder from './DiscordWidgetPlaceholder';

export const MEMBER_COUNT_ESTIMATE = 280;

type Props = Readonly<{
	loading: boolean;
	error: boolean;
	members: ReadonlyArray<DiscordWidgetMemberType>;
	presenceCount: number;
}>;

export default function DiscordWidget(props: Props) {
	if (props.loading) {
		return <DiscordWidgetPlaceholder />;
	}

	if (props.error) {
		// Just show nothing
		return <DiscordWidgetPlaceholder />;
	}

	return (
		<>
			<div>
				{MEMBER_COUNT_ESTIMATE}+ members, {props.presenceCount} online
			</div>

			<ul className={styles.members} data-testid="members">
				{props.members.map((member) => {
					return <DiscordWidgetMember key={member.id} member={member} />;
				})}
			</ul>
		</>
	);
}
