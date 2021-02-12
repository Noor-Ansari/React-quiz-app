import React from "react";
import "./App.css"
import Home from "./components/home/Home"
import {Router, Route, Switch} from "react-router-dom";
import {createBrowserHistory} from "history";
import {geographyData, techData, csData, scienceData, programmingData} from "./assets/data";
import QuestionCard from "./components/Questions/Questions";

function App() {
	const history = createBrowserHistory();
	return(
	<div className="app">
		<Router history={history}>	
			<Switch>
				<Route exact path="/"> <Home/></Route>
				<Route exact path="/Science"> <QuestionCard data={scienceData}/></Route>
				<Route exact path="/Geography"> <QuestionCard data={geographyData}/></Route>
				<Route exact path="/Programming"> <QuestionCard data={programmingData}/></Route>
				<Route exact path="/Technology"> <QuestionCard data={techData}/></Route>
				<Route exact path="/Computer Science"> <QuestionCard data={csData}/></Route>
			</Switch>
		</Router>
	</div>
	  )
	}

export default App;
