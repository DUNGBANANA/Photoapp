import React from 'react';
import { Route, Switch, useRouteMatch} from "react-router-dom";
import AddEditPage from "./pages/AddEdit"
import Notfound from "../../components/Notfound"
import MainPage from "./pages/Main"


Photo.propTypes = {};
function Photo(props) {
    const match = useRouteMatch()
    return (
        <div>
        <Switch>
            <Route exact path={match.url} component={MainPage} />
            <Route path={`${match.url}/add`} component={AddEditPage} />
            <Route path={`${match.url}/:photoId`} component={AddEditPage} />
            <Route component={Notfound}/>
        </Switch>
        </div>
    );
}
export default Photo;