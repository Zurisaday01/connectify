export {};

declare global {
	interface CreateUserParams {
		clerkId: string;
		email: string;
		username: string;
		photo: string;
		firstName: string;
		lastName: string;
	}

	interface UpdateUserParams {
		username: string;
		photo: string;
		firstName: string;
		lastName: string;
	}
}
