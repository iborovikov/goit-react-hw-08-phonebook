import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../Redux/contacts/contacts-operations';
import { getCurrentUserData } from '../../Redux/User/user-operations';
import { getVisibleContacts } from '../contact-selectors';
import { openModal } from '../../Redux/contacts/contact-actions';
import { ListGroup, Button } from 'react-bootstrap';
import s from './contacts.module.css';

function Contact() {
    const visibleContacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUserData());
        dispatch(fetchContacts());
    }, [dispatch]);

    const onDeleteBtnClick = (e) => {
        dispatch(deleteContact(e.currentTarget.id));
    };
    const onPatchbtnClick = (e) => {
        dispatch(openModal(e.currentTarget.id));
    };

    return (
        visibleContacts.map(({ name, number, id }) =>
            <ListGroup.Item className={s.contactItem} key={id}>{name}: {number}
                <Button type='button' id={id} onClick={onPatchbtnClick}>Изменить</Button>
                <Button type='button' id={id} onClick={onDeleteBtnClick}>Удалить</Button>
            </ListGroup.Item>
        )
    )
};


export default connect()(Contact)
