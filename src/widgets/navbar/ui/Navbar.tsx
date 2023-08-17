import { SignInOut } from 'features/sign-in-out';
import React from 'react';
import { AppLinks } from 'shared/config/routeConfig/routeConfig';
import { AppLink, AppLinkProps } from 'shared/ui/app-link/AppLink';

type LinkMapType = {
	name: string;
	to: string;
	props?: Omit<AppLinkProps, 'to'>;
};

const linkMap: LinkMapType[] = [
	{ name: 'Main', to: AppLinks.MAIN, props: {} },
	{ name: 'News', to: AppLinks.NEWS, props: {} },
	{ name: 'Profile', to: AppLinks.PROFILE, props: {} },
	{ name: 'Login', to: AppLinks.LOGIN, props: {} },
];

export function Navbar() {
	return (
		<div>
			{linkMap.map((link) => (
				<AppLink key={link.to} {...link.props} to={link.to}>
					{link.name}
				</AppLink>
			))}
			<SignInOut />
		</div>
	);
}
