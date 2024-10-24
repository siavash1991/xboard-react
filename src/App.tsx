import React, { lazy, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@redux/store';
import XLoadingSpinner from '@atoms/LoadingSpinner';
import RedirectWithTrailingSlash from '@utils/RedirectWithTrailingSlash';

const XApexCharts = lazy(() => import('@pages/Charts/ApexCharts'));
const XChartJS = lazy(() => import('@pages/Charts/ChartJS'));
const XForms = lazy(() => import('@pages/Forms'));
const XTables = lazy(() => import('@pages/Tables'));

const XMain = lazy(() => import('@pages/Main'));
const XUpdateUser = lazy(() => import('@pages/UpdateProfile'));
const XUsers = lazy(() => import('@pages/Users'));
const XDefaultCards = lazy(() => import('@pages/Cards/Default'));
const XAdvanceCards = lazy(() => import('@pages/Cards/Advance'));

const XSignIn = lazy(() => import('@pages/SignIn'));
const XSignUp = lazy(() => import('@pages/SignUp'));
const NotFound = lazy(() => import('@pages/404'));

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router>
					<RedirectWithTrailingSlash />
					<Suspense fallback={<XLoadingSpinner />}>
						<Routes>
							<Route path="/" element={<XMain />} />
							<Route
								path="/user-profile"
								element={<XUpdateUser />}
							/>
							<Route path="/users" element={<XUsers />} />

							<Route
								path="/charts-apex"
								element={<XApexCharts />}
							/>
							<Route
								path="/charts-chartjs"
								element={<XChartJS />}
							/>
							<Route
								path="/cards-advance"
								element={<XAdvanceCards />}
							/>
							<Route
								path="/cards-default"
								element={<XDefaultCards />}
							/>
							<Route path="/tables" element={<XTables />} />
							<Route path="/forms" element={<XForms />} />
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
