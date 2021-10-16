import { useDispatch, useSelector, connect } from "react-redux";
import { getUserName } from '../../Redux/User/user-selectors';
import { logOut } from '../../Redux/User/user-operations';
import { Button } from 'react-bootstrap';
import s from './userMenu.module.css';

const LogedInData = () => {
    const name = useSelector(getUserName);
    const dispatch = useDispatch();

    return (
        <div className={s.userMenuContainer}>
            <p>Привет: {name}</p>
            <Button className={s.userMenuBtn} type='button' onClick={() => dispatch(logOut())}>Выйти</Button>
        </div>
    )
}

export default connect()(LogedInData);