import React, { ReactNode } from 'react';

interface ButtonProps {
	className?: string;
	onClick?: () => void;
	children?: ReactNode;
}

export const Button = ({
	className,
	onClick,
	children,
	...otherProps
}: ButtonProps) => {
	return (
		<button
			className={className}
			onClick={onClick}
			type='button'
			{...otherProps}
		>
			{children}
		</button>
	);
};
