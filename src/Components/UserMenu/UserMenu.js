import { useSelector } from 'react-redux'
import LogedInData from './LogedInData'
import LogedOutNav from './LogedOutNav'
import {getIsLogedIn} from '../../Redux/User/user-selectors'



const UserMenu = () => {
    
    const isLogedIn = useSelector(getIsLogedIn);

    return (<>{isLogedIn ? <LogedInData /> : <LogedOutNav />}</>)
};

export default UserMenu;