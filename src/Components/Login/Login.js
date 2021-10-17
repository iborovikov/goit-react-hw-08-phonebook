import { useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import { logedIn } from '../../Redux/User/user-operations';
import {getIsPasswordCorrect} from '../../Redux/User/user-selectors'
import { Form, Button, Alert } from 'react-bootstrap/';



const Login = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const isPasswordCorrect = useSelector(getIsPasswordCorrect);

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
        <Form onSubmit={onLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Адрес электронной почты</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Example@email.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Пароль</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleInputChange}
                    placeholder="Введите пароль" />
            </Form.Group>
            
            <Button variant="primary" type="submit">
                Войти
            </Button>
            {!isPasswordCorrect && <Alert variant={'danger'} style={{marginTop: 15}}>Вы ввели не верный пароль или адрес электронной почты</Alert>}
        </Form>

    );
};

export default  connect()(Login);

   