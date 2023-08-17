import React from 'react';
import { Link, type LinkProps } from 'react-router-dom';

export type AppLinkProps = {
	className?: string;
} & LinkProps;

export function AppLink(props: AppLinkProps) {
	const { to, className, children, ...otherProps } = props;
	return (
		<Link className={className} to={to} {...otherProps}>
			{children}
		</Link>
	);
}
