const mockFormData = {
	username: 'Admin',
	password: '12345',
};

export const checkPassword = (payload: string) => {
	return mockFormData.password === payload;
};
export const checkUsername = (payload: string) => {
	return mockFormData.username === payload;
};
