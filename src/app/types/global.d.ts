// declare module '*.scss' {
//     type IClassNames = Record<string, string>;
//     const classNames: IClassNames;
//     export = classNames;
// }
declare module '*.module.scss' {
	const classes: Record<string, string>;
	export default classes;
}

declare module '*.module.sass' {
	const classes: Record<string, string>;
	export default classes;
}

declare module '*.module.css' {
	const classes: Record<string, string>;
	export default classes;
}

declare module '*.scss' {
	const classNames: Record<string, string>;
	export default classNames;
}

declare module '*.png' {}
declare module '*.jpg' {}
declare module '*.jpeg' {}
declare module '*.svg' {
	import type React from 'react';

	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>;
	export default SVG;
}

declare const __IS_DEV__: boolean;
