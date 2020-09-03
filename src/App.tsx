import Menu from "./components/Menu";
import Page from "./pages/Page";
import Scan from "./pages/Scan";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Votes from "./pages/Votes";
import React from "react";
import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
	return (
		<IonApp>
			<IonReactRouter>
				<IonSplitPane contentId="main">
					<Menu />
					<IonRouterOutlet id="main">
						<Route path="/page/:name" component={Page} exact />
						<Route path="/scan" component={Scan} exact />
						<Route path="/search" component={Search} exact />
						<Route
							path="/politician/:id"
							component={Profile}
							exact
						/>
						<Route
							path="/politician/:id/votes"
							component={Votes}
							exact
						/>
						<Route
							path="/politician/:id/votes/:id"
							component={Votes}
							exact
						/>
						<Redirect from="/" to="/scan" exact />
					</IonRouterOutlet>
				</IonSplitPane>
			</IonReactRouter>
		</IonApp>
	);
};

export default App;
