import { useSelector, connect } from "react-redux";
import { NavLink } from "react-router-dom";
import s from './Navigation.module.css';
import { getIsLogedIn, getIsRefreshing } from '../../Redux/User/user-selectors';
import UserMenu from '../UserMenu/UserMenu';

const Navigation = () => {
    const isLogedIn = useSelector(getIsLogedIn);
    const isRefreshing = useSelector(getIsRefreshing);

    return (
        <>
            <nav className={s.navigation}>
                <div>
                    <NavLink to="/" exact className={s.navLink} activeClassName={s.activeNavLink}>Главная</NavLink>
                    {isLogedIn && <NavLink to="/contacts" className={s.navLink} activeClassName={s.activeNavLink}>Контакты</NavLink>}
                </div>
                {!isRefreshing && <UserMenu />}
            </nav>
            <hr />
        </>
    );
};

export default connect()(Navigation);