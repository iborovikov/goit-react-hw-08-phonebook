// import {Form, Button} from 'react-bootstrap/'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registration } from '../../Redux/User/user-operations'

const Registration = () => {

    const dispatch = useDispatch()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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

        <form onSubmit={onRegisterFormSubmit}>
            <label> Адрес электронной почты
                <input
                type="text"
                    name="email"
                    value={email}
                    onChange={handleInputChange}
                />
            </label>
            <label>Имя пользователя
                <input
                type="text"
                    name="name"
                    value={name}
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
            <button type='submit'>Зарегистрировать</button>
        </form>
        // <Form>
        //     <Form.Group className="mb-3" controlId="formBasicEmail">
        //         <Form.Label>Адрес электронной почты</Form.Label>
        //         <Form.Control type="email" placeholder="Ввелите e-mail" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicName">
        //         <Form.Label>Имя пользователя</Form.Label>
        //         <Form.Control type="Name" placeholder="Имя пользователя" />
        //     </Form.Group>

        //     <Form.Group className="mb-3" controlId="formBasicPassword">
        //         <Form.Label>Пароль</Form.Label>
        //         <Form.Control type="password" placeholder="Введите пароль" />
        //     </Form.Group>

        //     <Button variant="primary" type="submit">
        //         Зарегистрировать
        //     </Button>
        // </Form>
    )
}

export default Registration;