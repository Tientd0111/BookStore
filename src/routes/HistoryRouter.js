import {Route, Switch} from "react-router-dom";
import PATH from './path';
import History from "../lode/pages/History";

const HistoryRouter = () => {
	return (
		<Switch>
			<Route exact path={PATH.HISTORY}>
				<History/>
			</Route>
		</Switch>
	);
};

export default HistoryRouter;