import {Route, Switch} from "react-router-dom";
import HomePage from "../lode/pages/HomePage";
import PATH from './path';

const HomeRoutes = ({handleAddProduct}) => {
	return (
		<Switch>
			<Route exact path={PATH.HOME}>
				<HomePage handleAddProduct={handleAddProduct}/>
			</Route>
		</Switch>
	);
};

export default HomeRoutes;