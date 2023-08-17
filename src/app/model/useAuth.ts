import { AuthContext } from 'app/providers/auth';
import { useContext, useEffect, useMemo } from 'react';

export const useAuth = () => {
	const { isAuth, setIsAuth } = useContext(AuthContext);
	useEffect(() => {
		const isAuth = localStorage.getItem('isAuth');
		if (isAuth) {
			setIsAuth(Boolean(isAuth));
			localStorage.setItem('isAuth', JSON.parse(isAuth));
		}
	}, []);

	const login = (isAuth: boolean) => {
		setIsAuth(true);
		localStorage.setItem('isAuth', JSON.parse(isAuth.toString()));
	};

	const logout = () => {
		setIsAuth(false);
		localStorage.removeItem('isAuth');
	};

	const memoValue = useMemo(
		() => ({
			logout,
			login,
			isAuth,
		}),
		[isAuth],
	);

	return memoValue;
};
