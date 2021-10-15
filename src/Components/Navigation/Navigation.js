import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"
import UserMenu from '../UserMenu/UserMenu';
import s from './Navigation.module.css'
import {getIsLogedIn, getIsRefreshing} from '../../Redux/User/user-selectors'

const Navigation = () => {
    const isLogedIn = useSelector(getIsLogedIn)
    const isRefreshing = useSelector(getIsRefreshing)

    return (
        <nav>
            <NavLink to="/" exact className={s.navLink} activeClassName={s.activeNavLink}>Главная</NavLink>
            {isLogedIn && <NavLink to="/contacts" className={s.navLink} activeClassName={s.activeNavLink}>Контакты</NavLink>}
            {!isRefreshing && <UserMenu />}
            <hr />
        </nav>
    );
};

export default Navigation;