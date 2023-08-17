import './styles/index.scss';
import React, { Suspense } from 'react';
import { Navbar } from 'widgets/navbar';
import { AppRouter } from './providers/router';

const App = () => {
	return (
		<div className='app light'>
			<Suspense fallback=''>
				<Navbar />
				<div className='contentPage'>
					<AppRouter />
				</div>
			</Suspense>
		</div>
	);
};

export default App;
