import { connect, useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { getIsLogedIn } from '../Redux/User/user-selectors';


const PrivateRoute = ({ children, ...routProps }) => {
    const isLogedIn = useSelector(getIsLogedIn)

    return (<Route {...routProps}>{isLogedIn ? children : <Redirect to={'/login'}></Redirect>}</Route>)

};

export default connect()(PrivateRoute)