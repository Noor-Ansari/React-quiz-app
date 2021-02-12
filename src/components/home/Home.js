import React, {useState} from "react";
import {Link} from "react-router-dom";
import "./Home.css"

function Home(){
	const [topics, setTopics] = useState(["Science", "Computer Science", "Technology", "Geography", "Programming"])

	return(
		<div>
			<h1> Go ahead and test your intelligence</h1>
			<div className="wrapper">
				{topics.map(topic => (
					<Link className="link" to={topic} ><div className="card"><p>{topic}</p></div></Link>
					)
				)}
			</div>
		</div>
	)
}

export default Home;