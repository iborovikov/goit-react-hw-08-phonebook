import { connect, useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/contacts/contact-actions';
import { getFilter } from '../contact-selectors';
import {InputGroup,FormControl} from 'react-bootstrap'

function Filter() {
    const dispatch = useDispatch();
    const filter = useSelector(getFilter);
    return (
        <InputGroup className="mb-3" style={{marginTop: 15}}>
            <InputGroup.Text id="basic-addon1">Фильтр</InputGroup.Text>
            <FormControl
                type="text"
                name="filter"
                value={filter}
                onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
                />
        </InputGroup>
    );
};

export default connect()(Filter);
