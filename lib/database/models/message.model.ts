import { Model, Schema, Types, model, models } from 'mongoose';

// Document interface
interface Message {
	body: string;
	image: string;
	seenIds: Types.ObjectId[];
	conversationId: Types.ObjectId;
	senderId: Types.ObjectId;
	isSaved: boolean;
	createdAt: Date;
}

// Schema
const MessageSchema = new Schema<Message, Model<Message>, Message>({
	body: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	seenIds: [
		// user IDs who have seen the message
		{
			type: Schema.Types.ObjectId,
			ref: 'User',
		},
	],
	conversationId: {
		type: Schema.Types.ObjectId,
		ref: 'Chat',
	},
	senderId: {
		// senderId is the current user
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
	isSaved: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const Message = models?.Message || model<Message>('Message', MessageSchema);

export default Message;
