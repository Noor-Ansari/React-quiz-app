import React from "react";
import Home from "./components/home/Home"
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {data} from "./assets/computerScience";
import QuestionCard from "./components/Questions/Questions";

function App() {
  const history = createBrowserHistory();
  return(
		<Router history={history}>	
			<Switch>
				<Route exact path="/"> <Home/></Route>
				<Route exact path="/Science"> <QuestionCard data={data}/></Route>
			</Switch>
		</Router>
  )

}

export default App;
