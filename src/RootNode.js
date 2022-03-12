import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {useHistory} from 'react-router'
import ScreenPlayAnalytics from './containers/Analytics/ScreenPlayAnalytics'
import Others from './containers/Analytics/Others'
import PageNotFound from "./components/PageNotFound/PageNotFound";

function ScreenPlay() {
    const history = useHistory()
    history.push("/screenplay-analytics")
}

function RootNode() {

    return(
        <div>
            <h3>Root placeholder </h3>

            <Router>
                <Switch>
                    <Route path="/screenplay-analytics" component={ScreenPlayAnalytics} />
                    <Route path="/others" component={Others} />
                    <Route component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    )

}




export default RootNode