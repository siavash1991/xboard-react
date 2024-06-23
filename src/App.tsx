import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import XLoadingSpinner from 'components/atoms/LoadingSpinner';

const XMain = lazy(() => import('./components/pages/Main'));
const XUpdateUser = lazy(() => import('./components/pages/UpdateProfile'));
const XUsers = lazy(() => import('./components/pages/Users'));
const XDefaultCards = lazy(() => import('./components/pages/Cards/Default'));
const XAdvanceCards = lazy(() => import('./components/pages/Cards/Advance'));

const XSignIn = lazy(() => import('./components/pages/SignIn'));
const XSignUp = lazy(() => import('./components/pages/SignUp'));
const NotFound = lazy(() => import('./components/pages/404'));

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<Suspense fallback={<XLoadingSpinner />}>
						<Routes>
							<Route path="/" element={<XMain />} />
							<Route
								path="#/user-profile"
								element={<XUpdateUser />}
							/>
							<Route path="/users" element={<XUsers />} />

							<Route
								path="/cards-advance"
								element={<XAdvanceCards />}
							/>
							<Route
								path="/cards-default"
								element={<XDefaultCards />}
							/>

							<Route path="/signin" element={<XSignIn />} />
							<Route path="/signup" element={<XSignUp />} />

							<Route path="*" element={<NotFound />} />
						</Routes>
					</Suspense>
				</Router>
			</Provider>
		</div>
	);
}

export default App;
