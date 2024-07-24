import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Flowbite } from 'flowbite-react';
import '@assets/styles/global.css';
import customFlowbite from '@assets/styles/themeConfig';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<Flowbite theme={{ theme: customFlowbite }}>
			<App />
		</Flowbite>
	</React.StrictMode>
);
