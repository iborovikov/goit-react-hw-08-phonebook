import { useState } from 'react';
import { useDispatch, connect } from 'react-redux';
import { registration } from '../../Redux/User/user-operations';
import { Form, Button } from 'react-bootstrap/';

const Registration = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        const type = e.currentTarget.name;
        const value = e.currentTarget.value;
        switch (type) {
            case 'name':
                setName(value)
                break;
            case 'email':
                setEmail(value)
                break;
            case 'password':
                setPassword(value)
                break;
            default: alert('invalid type')
        };
    };

    const onRegisterFormSubmit = (e) => {
        e.preventDefault();
        dispatch(registration({ name, email, password }));
        setName('');
        setEmail('');
        setPassword('');
    }

    return (

        <Form onSubmit={onRegisterFormSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Адрес электронной почты</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                    placeholder="Example@email.com" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Имя пользователя</Form.Label>
                <Form.Control type="Name"
                    name="name"
                    value={name}
                    onChange={handleInputChange} placeholder="Имя пользователя" />
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
                Зарегистрировать
            </Button>
        </Form>
    )
}

export default connect()(Registration);