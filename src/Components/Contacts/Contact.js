// import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from '../../Redux/contacts/contacts-operations';
import {getCurrentUserData} from '../../Redux/User/user-operations'
import { getVisibleContacts } from '../contact-selectors';

function Contact() {
    const visibleContacts = useSelector(getVisibleContacts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCurrentUserData())
        dispatch(fetchContacts())
    }, [dispatch]);

    const onDeleteBtnClick = (e) => {
        dispatch(deleteContact(e.currentTarget.id))
        // dispatch(fetchContacts())
    };

    return (
        visibleContacts.map(({ name, number, id }) =>
            <li key={id}>{name}: {number} <button type='button' id={id} onClick={onDeleteBtnClick}>Удалить</button></li>)
    );
};


export default connect()(Contact)

// Contact.propTypes = {
//     visibleContacts: PropTypes.arrayOf(PropTypes.shape({
//         name: PropTypes.string.isRequired,
//         number: PropTypes.string.isRequired,
//         id: PropTypes.number.isRequired
//     })),
// };