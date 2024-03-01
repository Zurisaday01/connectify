import { Model, Schema, Types, model, models } from 'mongoose';

// Document interface
interface Group {
	name: string;
	description?: string;
	photo?: string;
	participants: Types.ObjectId[];
	admins: Types.ObjectId[];
	createdAt: Date;
}

// Schema
const GroupSchema = new Schema<Group, Model<Group>, Group>({
	name: {
		type: String,
		required: true,
		unique: true,
	},
	description: String,
	photo: String,
	participants: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	admins: [
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Group = models?.Group || model<Group>('Group', GroupSchema);

export default Group;
