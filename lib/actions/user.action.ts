'use server';

import { revalidatePath } from 'next/cache';
import User from '../database/models/user.model';
import { connectToDatabase } from '../database/mongoose';

// CREATE
export const createUser = async (user: CreateUserParams) => {
	try {
		// connect to the database
		await connectToDatabase();

		const newUser = await User.create(user);

		return JSON.parse(JSON.stringify(newUser));
	} catch (error) {
		console.error('Error: ', error);
		throw new Error(`Error: ${(error as Error).message}`);
	}
};

// READ
export const getUserById = async (userId: string) => {
	try {
		await connectToDatabase();

		const user = await User.findOne({ clerkId: userId });

		if (!user) throw new Error('User not found');

		return JSON.parse(JSON.stringify(user));
	} catch (error) {
		console.error('Error: ', error);
		throw new Error(`Error: ${(error as Error).message}`);
	}
};

// UPDATE
export const updateUser = async (clerkId: string, user: UpdateUserParams) => {
	try {
		await connectToDatabase();

		const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
			new: true,
		});

		if (!updatedUser) throw new Error('User update failed');

		return JSON.parse(JSON.stringify(updatedUser));
	} catch (error) {
		console.error('Error: ', error);
		throw new Error(`Error: ${(error as Error).message}`);
	}
};

// DELETE
export const deleteUser = async (clerkId: string) => {
	try {
		await connectToDatabase();

		// Find user to delete
		const userToDelete = await User.findOne({ clerkId });

		if (!userToDelete) {
			throw new Error('User not found');
		}

		// Delete user
		const deletedUser = await User.findByIdAndDelete(userToDelete._id);
		revalidatePath('/');

		return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
	} catch (error) {
		console.error('Error: ', error);
		throw new Error(`Error: ${(error as Error).message}`);
	}
};
