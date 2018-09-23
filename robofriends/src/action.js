import { CHANGE_SEARCH_FIELD } from './const.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});