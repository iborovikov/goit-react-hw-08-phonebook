import { useSelector, connect } from "react-redux";
import { getIsModalOpen } from '../contact-selectors';
import CorrectionModal from '../Modal/CorrectionModal';
import Contact from "./Contact";
import { ListGroup } from 'react-bootstrap';

function ContactList() {
    const isModalOpen = useSelector(getIsModalOpen)

    return (
        <ListGroup>
            <h2>Список контактов</h2>
            <Contact />
            {isModalOpen && <CorrectionModal />}
        </ListGroup>
    );
};

export default connect()(ContactList) ;
