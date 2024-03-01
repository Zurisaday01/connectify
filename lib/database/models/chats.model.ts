import { Model, Schema, Types, model, models } from 'mongoose';

// Document interface
interface Chat {
	lastMessageAt: Date;
	isGroup: boolean;
	messages: Types.ObjectId[];
	users: Types.ObjectId[];
	isArchived: boolean;
	isPinned: boolean;
	createdAt: Date;
}

// Schema
const ChatSchema = new Schema<Chat, Model<Chat>, Chat>({
	lastMessageAt: {
		type: Date,
		default: Date.now,
	},
	isGroup: {
		type: Boolean,
		default: false,
	},
	messages: [
		// messages from this conversation
		{
			type: Schema.Types.ObjectId,
			ref: 'Message',
		},
	],
	users: [
		// users participating in this conversation
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	isArchived: {
		type: Boolean,
		default: false,
	},
	isPinned: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Chat = models?.Chat || model<Chat>('Chat', ChatSchema);

export default Chat;
