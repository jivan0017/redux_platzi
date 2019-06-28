
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Usuarios from './usuarios/Usuarios';
import Menu from './Menu';

const Tareas = () => (
	<div className="j-container container">
		<div className="col-12">
		Tareas works
		</div>
	</div>
);

const App = () => {

  return(
	<BrowserRouter>
		<Menu />
		<Switch>
			<Route exact path='/' component={ Usuarios }></Route>
			<Route exact path='/tareas' component={ Tareas }></Route>
		</Switch>		
	</BrowserRouter>
  );
}

export default App;