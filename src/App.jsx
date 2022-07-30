 
import "./App.css";
import Header from "../src/components/Header"
import Home from "./components/Home"
import Movies from "./components/Movies";
import Details from "./components/Details"

import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
  } from "react-router-dom";

function App() {
	return <div className="App">
	<Router>
		<Header></Header>

		<Routes>
			<Route path="/details" element={<Details/>}/>
				
			
			<Route path="/" element={<Home/>}/>
				
			

		</Routes>
	</Router>
	
	</div>;
}

export default App;
