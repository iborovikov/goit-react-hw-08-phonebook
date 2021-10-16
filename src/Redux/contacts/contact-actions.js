import { createAction } from '@reduxjs/toolkit';

const setFilter = createAction('contacts/setFilter');
const openModal = createAction('contacts/openModal');
const closeModal = createAction('contacts/closeModal');

export {
    setFilter,
    openModal,
    closeModal
};