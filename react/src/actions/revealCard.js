import { push } from 'react-router-redux';
import codeNamesApi from './../api/codeNamesApi';

const revealCard = (id) => dispatch => {
  return codeNamesApi.revealCard(id);
};

export { revealCard };
