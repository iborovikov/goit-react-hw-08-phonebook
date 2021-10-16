import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import s from '../Navigation/Navigation.module.css';


const LogedOutNav = () => {

    return (
        <div className={s.navContainer}>
            <NavLink to="/login" className={s.navLink} activeClassName={s.activeNavLink}>Логин</NavLink>
            <NavLink to="/register" className={s.navLink} activeClassName={s.activeNavLink}>Регистрация</NavLink>
        </div>
    );
}

export default connect()(LogedOutNav);