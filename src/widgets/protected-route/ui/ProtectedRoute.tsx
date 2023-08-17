import React, { ReactNode } from 'react';
import { useAuth } from 'app/model/useAuth';
import { Navigate } from 'react-router-dom';
import { AppLinks } from 'shared/config/routeConfig/routeConfig';

interface ProtectedRouteProps {
	redirectPath?: AppLinks;
	children: ReactNode;
}

export const ProtectedRoute = ({
	redirectPath = AppLinks.LOGIN,
	children,
}: ProtectedRouteProps) => {
	const { isAuth } = useAuth();
	if (!isAuth) {
		return <Navigate to={redirectPath} replace />;
	}
	return children;
};
