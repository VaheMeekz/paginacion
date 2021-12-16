import {Switch, Route , Redirect} from "react-router-dom";
import {isAuthRoutes} from "../Routes/routes";
import {HOME_PAGE, LOGIN_PAGE} from "../URL/url";

const Routes = () => {
    let token = localStorage.getItem("token");

    return (
        <Switch>
            {
                isAuthRoutes.map(({id, path, Component}) => {
                    return (
                        <Route key={id} path={path} component={Component} exact/>
                    )
                })
            }
            <Redirect to={ token ? HOME_PAGE : LOGIN_PAGE } />
        </Switch>
    )
}
export default Routes