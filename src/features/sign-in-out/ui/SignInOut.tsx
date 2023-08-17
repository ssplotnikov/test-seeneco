import { useAuth } from 'app/model/useAuth';
import React from 'react';
import { Link } from 'react-router-dom';
import { AppLinks } from 'shared/config/routeConfig/routeConfig';
import { Button } from 'shared/ui/button';

export const SignInOut = () => {
	const { isAuth, logout } = useAuth();
	return (
		<div>
			{!isAuth ? (
				<Link to={AppLinks.LOGIN}>Sign In</Link>
			) : (
				<Button onClick={logout}>Sign Out</Button>
			)}
		</div>
	);
};
