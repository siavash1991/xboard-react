import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import XLoadingSpinner from 'components/atoms/LoadingSpinner';
import { withBasePath } from 'components/shared/basePathHelper'; // Import the helper function

const XMain = lazy(() => import('./components/pages/Main'));
const NotFound = lazy(() => import('./components/pages/404'));

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Suspense fallback={<XLoadingSpinner />}>
						<Routes>
							<Route
								path={withBasePath('/')}
								element={<XMain />}
							/>
							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
