import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Components
import Form from "./components/Form/Form";
import Homepage from "./components/Homepage/Homepage";

const App = () => {
	return (
		<Router>
			<div>
				<Switch>
					<Route exact path="/">
						<Homepage />
					</Route>
					<Route exact path="/signup">
						<Form />
					</Route>
				</Switch>
			</div>
		</Router>
	);
};

export default App;
