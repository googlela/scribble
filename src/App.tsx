import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import { LoadingFallback } from './components/LoadingFallback';

/** LazyLoad-Pages */
const Header = lazy(() => import('./components/Header'));
const Home = lazy(() => import('./page'));

export const App = () => {
	return (
		<Suspense fallback={<LoadingFallback />}>
			<Router>
				<Switch>
					<Header>
						<Redirect to="/home" from="/" />
						<Route exact path="/home" component={Home} />
					</Header>
				</Switch>
			</Router>
		</Suspense>
	);
};
