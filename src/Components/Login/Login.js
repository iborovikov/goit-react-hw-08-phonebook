// import {Form, Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'
import {logedIn} from '../../Redux/User/user-operations'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getError} from '../../Redux/User/user-selectors'

const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const error = useSelector(getError)

    const handleInputChange = (e) => {
        const type = e.currentTarget.name;
        const value = e.currentTarget.value;
        switch (type) {
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default: alert('invalid type')
        };
    };
    const onLogin = (e) => {
        e.preventDefault();
        dispatch(logedIn({ email, password }));
        setEmail('');
        setPassword('');
    }

    return (
        <>
            <form onSubmit={onLogin}>
                <label> Адрес электронной почты
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleInputChange}
                    />
                </label>
                <label>Пароль
                    <input
                        type="text"
                        name="password"
                        value={password}
                        onChange={handleInputChange}
                    />
                </label>
                <button type='submit'>Войти</button>
            </form>
            {<p>{error}</p>}
    
        </>
        
    );
}

export default Login;

   // return (
    //     <Form>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //             <Form.Label>Адрес электронной почты</Form.Label>
    //             <Form.Control type="email" placeholder="Ввелите e-mail" />
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //             <Form.Label>Пароль</Form.Label>
    //             <Form.Control type="password" placeholder="Введите пароль" />
    //         </Form.Group>
            
    //         <Button variant="primary" type="submit">
    //             Войти
    //         </Button>
    //     </Form>
    // )