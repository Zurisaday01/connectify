import { Model, Schema, Types, model, models } from 'mongoose';

// Document interface
interface User {
	clerkId: string;
	email: string;
	username: string;
	photo: string;
	firstName?: string;
	lastName?: string;
	chats: Types.ObjectId[];
	messages: Types.ObjectId[];
	seenMessageIds: Types.ObjectId[];
	createdAt: Date;
}

// Schema
const UserSchema = new Schema<User, Model<User>, User>({
	clerkId: {
		type: String,
		required: true,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
	},
	username: {
		type: String,
		required: true,
		unique: true,
	},
	photo: {
		type: String,
		required: true,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	chats: [
		// conversations the user is participating in
		{
			type: Schema.Types.ObjectId,
			ref: 'Chat',
		},
	],
	messages: [
		// Messages sent by the user
		{
			type: Schema.Types.ObjectId,
			ref: 'Message',
		},
	],
	seenMessageIds: [
		// Messages seen by the user
		{
			type: Schema.Types.ObjectId,
			ref: 'Message',
		},
	],
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const User = models?.User || model<User>('User', UserSchema);

export default User;
