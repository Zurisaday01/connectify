import { Model, Schema, Types, model, models } from 'mongoose';

// Document interface
interface GroupMembership {
	user: Types.ObjectId;
	group: Types.ObjectId;
	role: 'admin' | 'participant';
}

// Schema
const GroupMembershipSchema = new Schema<
	GroupMembership,
	Model<GroupMembership>,
	GroupMembership
>({
	user: {
		type: Schema.Types.ObjectId,
		ref: 'User',
		required: true,
	},
	group: {
		type: Schema.Types.ObjectId,
		ref: 'Group',
		required: true,
	},
	role: {
		type: String,
		enum: ['admin', 'participant'],
		default: 'participant',
	},
});

const GroupMembership =
	models?.GroupMembership ||
	model<GroupMembership>('GroupMembership', GroupMembershipSchema);

export default GroupMembership;
