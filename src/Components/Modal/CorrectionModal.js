import { useState, useEffect } from "react";
import { useSelector, useDispatch, connect } from "react-redux";
import { correctContact, fetchContacts } from '../../Redux/contacts/contacts-operations';
import { closeModal } from '../../Redux/contacts/contact-actions';
import { getMutableContactId } from '../contact-selectors';
import s from './CorrectionModal.module.css';
import { Form, Button, Modal } from "react-bootstrap";

function CorrectionModal () {
    const [name, setName] = useState('');
    const [number, setPhoneNumber] = useState('');


    const dispatch = useDispatch();
    const mutableContactId = useSelector(getMutableContactId);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

    const handleKeyDown = (e) => {
        if (e.code === 'Escape') {
            window.removeEventListener('keydown', handleKeyDown)
            dispatch(closeModal());
        };
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            window.removeEventListener('keydown', handleKeyDown)
            dispatch(closeModal());
        };
    };

    const handleInputChange = (e) => {
        const type = e.currentTarget.name;
        const value = e.currentTarget.value;
        switch (type) {
            case 'name':
                setName(value)
                break;
            case 'number':
                setPhoneNumber(value)
                break;
            default: alert('invalid type')
        };
    };

    const onPatchFormSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: mutableContactId,
            name,
            number
        }
        dispatch(correctContact(newContact));
        dispatch(closeModal());
        dispatch(fetchContacts());
    }

    return (
        <div className={s.Overlay} onClick={handleBackdropClick}>
            <Modal.Dialog className={s.Modal}>
                <Modal.Header>
                    <Modal.Title>Изменение контакта</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={onPatchFormSubmit}>
                        <Form.Group className="mb-3" >
                            <Form.Label >Имя контакта</Form.Label>
                            <Form.Control
                                type="text"
                                name="name"
                                value={name}
                                onChange={handleInputChange}
                                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                                title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                                required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label >Номер контакта</Form.Label>
                            <Form.Control
                                type="tel"
                                name="number"
                                value={number}
                                onChange={handleInputChange}
                                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                                title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                                required />
                        </Form.Group>
                        <Button type="submit">Изменить конткакт</Button>
                    </Form>
                </Modal.Body>
            </Modal.Dialog>
        </div>
    );
}

export default connect()(CorrectionModal)