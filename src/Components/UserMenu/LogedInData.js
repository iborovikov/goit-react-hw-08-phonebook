import { useDispatch, useSelector } from "react-redux"
import { getUserName } from '../../Redux/User/user-selectors'
import {logOut} from '../../Redux/User/user-operations'

const LogedInData = () => {
    const name = useSelector(getUserName)
    const dispatch = useDispatch()

    return (
        <>
            <p>Привет:{ name }</p>
            <button type='button' onClick={() => dispatch(logOut())}>Выйти</button>
        </>
    )
}

export default LogedInData