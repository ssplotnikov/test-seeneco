import React from 'react';
import { AboutPage } from 'pages/about-page';
import { MainPage } from 'pages/main-page';
import { type RouteProps } from 'react-router-dom';
import { ProtectedRoute } from 'widgets/protected-route';
import { LoginPage } from 'pages/login-page';
import { ProfilePage } from 'pages/profile-page';
import { NewsPage } from 'pages/news-page';

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	NEWS = 'news',
	PROFILE = 'profile',
	LOGIN = 'login',
}
export enum AppLinks {
	MAIN = '/',
	ABOUT = '/about',
	NEWS = '/news',
	PROFILE = '/profile',
	LOGIN = '/login',
}

export const RoutePath: Record<AppRoutes, string> = {
	[AppRoutes.MAIN]: AppLinks.MAIN,
	[AppRoutes.ABOUT]: AppLinks.ABOUT,
	[AppRoutes.NEWS]: AppLinks.NEWS,
	[AppRoutes.PROFILE]: AppLinks.PROFILE,
	[AppRoutes.LOGIN]: AppLinks.LOGIN,
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
	[AppRoutes.MAIN]: {
		path: RoutePath.main,
		element: <MainPage />,
	},
	[AppRoutes.ABOUT]: {
		path: RoutePath.about,
		element: <AboutPage />,
	},
	[AppRoutes.NEWS]: {
		path: RoutePath.news,
		element: <NewsPage />,
	},
	[AppRoutes.PROFILE]: {
		path: RoutePath.profile,
		element: (
			<ProtectedRoute>
				<ProfilePage />
			</ProtectedRoute>
		),
	},
	[AppRoutes.LOGIN]: {
		path: RoutePath.login,
		element: <LoginPage />,
	},
};
