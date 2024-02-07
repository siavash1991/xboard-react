import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import NotFound from './components/pages/404';
import XMain from 'components/pages/Main';

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Routes>
						<Route path="/" element={<XMain />} />
						<Route path="*" element={<NotFound />} />
					</Routes>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
