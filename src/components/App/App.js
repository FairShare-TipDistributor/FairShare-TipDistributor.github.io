import "../../styles/globals.css";
import "./App.css";

import React, { useEffect } from "react";
import {
	HashRouter as Router,
	Redirect,
	Route,
	Switch,
} from "react-router-dom";

// NOTE: Importing Custom Button CSS here in App.jsx so the buttons classes can be used anywhere in the app.
	// They are also being imported in the custom "DesignedButtons".jsx file, 
		// but those custom styled react elements/buttons don't work. I think it's a parent/child props issue?
		// Trying to import this custom designed buttons css at other places in the app has file path issues.
import "../Buttons/DesignedButton.css";

import { useDispatch, useSelector } from "react-redux";

import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import CalcEntryPage from "../Pages/CalcEntryPage/CalcEntryPage";
import LandingPage from "../Pages/LandingPage/LandingPage";
import RegisterPage from "../Pages/LoginAndRegisterPages/RegisterPage/RegisterPage";
import LoginPage from "../Pages/LoginAndRegisterPages/LoginPage/LoginPage";
import Dashboard from "../Pages/Dashboard/Dashboard";

function App() {
	const dispatch = useDispatch();
	const user = useSelector((store) => store.user);

	useEffect(() => {
		dispatch({ type: "FETCH_USER" });
	}, [dispatch]);

	return (
		<Router>
			<div className="App">
				<header className="App-header"></header>
				<Switch>
					<Redirect exact from="/" to="/home" />

					{/* For protected routes, the view could show one of several things on the same route.
                Visiting localhost:3000/dashboard will show the Dashboard if the user is logged in.
                If the user is not logged in, the ProtectedRoute will show the LandingPage (component).
                Even though it seems like they are different pages, the user is always on localhost:3000/user */}
					<ProtectedRoute
						// logged in shows UserPage else shows LandingPage
						exact
						path="/dashboard"
					>
						<Dashboard />
					</ProtectedRoute>

					<Route exact path="/registration">
						{user.id ? (
							// If the user is already logged in,
							// redirect them to the /dashboard page
							<Redirect to="/dashboard" />
						) : (
							// Otherwise, show the registration page
							<RegisterPage />
						)}
					</Route>

					<Route exact path="/login">
						{user.id ? (
							// If the user is already logged in,
							// redirect to the /dashboard page
							<Redirect to="/dashboard" />
						) : (
							// Otherwise, show the login page
							<LoginPage />
						)}
					</Route>

					<Route exact path="/home">
						{user.id ? (
							// If the user is already logged in,
							// redirect them to the /dashboard page
							<Redirect to="/dashboard" />
						) : (
							// Otherwise, show the LandingPage
							<LandingPage />
						)}
					</Route>

					<Route exact path="/calc">
						<CalcEntryPage />
					</Route>

					{/* If none of the other routes matched, we will show a 404. */}
					<Route>
						<h1>404</h1>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
