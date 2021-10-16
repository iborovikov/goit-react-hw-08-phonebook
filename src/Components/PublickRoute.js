import { connect, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLogedIn } from '../Redux/User/user-selectors';

const PublickRoute = ({ children, restrickted = false, ...routeProps }) => {

    const isLogedIn = useSelector(getIsLogedIn);
    const shouldRedirect = isLogedIn && restrickted

    return (<Route {...routeProps} >{shouldRedirect ? <Redirect to={'/contacts'}></Redirect> : children}</Route>)
};

export default connect()(PublickRoute)