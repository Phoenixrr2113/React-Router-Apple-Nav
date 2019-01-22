import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Mac from './Mac';
import iPad from './iPad';
import iPhone from './iPhone';
import Watch from './Watch';
import TV from './TV';
import Music from './Music';
import Support from './Support';
import Home from './Home';

const Routes = () => (
	<Switch>
		<Route path="/Mac" component={Mac} />
		<Route path="/iPad" component={iPad} />
		<Route path="/iPhone" component={iPhone} />
		<Route path="Watch" component={Watch} />
		<Route path="/TV" component={TV} />
		<Route path="/Music" component={Music} />
		<Route path="/Support" component={Support} />
		<Route path="/" component={Home} />
	</Switch>
);

export default Routes;
