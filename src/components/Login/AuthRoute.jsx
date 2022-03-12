import { Route, Switch, Redirect, withRouter, useParams } from "react-router"
import {useHistory} from 'react-router'
import RootNode from "../../RootNode"

import ScreenPlayAnalytics from '../../containers/Analytics/ScreenPlayAnalytics'
//import ScreenPlayAnalytics from './containers/Analytics/ScreenPlayAnalytics'
import Others from '../../containers/Analytics/Others'

function AuthRoute(props) {
    const history = useHistory()
    let enforceLogin = props.element.props.enforceLogin
    console.log("flag ",  enforceLogin)

    if (enforceLogin === true )
    { 
        return (
            <div>
                <h1> Redirect to login placeholder </h1>
                <Redirect to="/login" />
            </div>
        )
    }
    else {
        return (
            <div>
                <h1> Redirect to root placeholder </h1>
                <Route {...props}  />
            </div>
        )
    }

}

export default withRouter(AuthRoute);