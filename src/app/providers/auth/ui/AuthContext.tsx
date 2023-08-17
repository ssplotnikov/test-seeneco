import React, { useMemo, useState } from 'react';
import { ReactNode, createContext } from 'react';

interface AuthContextProps {
	isAuth?: boolean;
	setIsAuth?: (isAuth: boolean) => void;
}

export const AuthContext = createContext<AuthContextProps>({});

const initAuth = Boolean(localStorage.getItem('isAuth')) || false;

export const AuthProvider = ({ children }: { children: ReactNode }) => {
	const [isAuth, setIsAuth] = useState(initAuth);
	const defaultValues = useMemo(
		() => ({
			isAuth,
			setIsAuth,
		}),
		[isAuth],
	);
	return (
		<AuthContext.Provider value={defaultValues}>
			{children}
		</AuthContext.Provider>
	);
};
