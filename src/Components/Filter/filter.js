// import PropTypes from 'prop-types';
import s from '../Filter/filter.module.css'
import { connect, useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../Redux/contacts/contact-actions';
import { getFilter } from '../contact-selectors';

function Filter() {
    const dispatch = useDispatch()
    const filter = useSelector(getFilter)
    return (
        <>
            <h3>Фильтр</h3>
            <label>
            <input
                className={s.input}
                type="text"
                name="filter"
                value={filter}
                onChange={(e) => dispatch(setFilter(e.currentTarget.value))}
            />
        </label>
        </>
    );
};

export default connect()(Filter);

// Filter.propTypes = {
//     onFilterInputChange: PropTypes.func.isRequired,
//     filter: PropTypes.string.isRequired
// }