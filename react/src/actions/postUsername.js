import { push } from 'react-router-redux';
import codeNamesApi from './../api/codeNamesApi';

export const SELECT_USERNAME = 'SELECT_USERNAME';

const selectUsername = (username) => ({
    type: SELECT_USERNAME,
    username: username
});

const postUsername = (username) => dispatch => {
  return codeNamesApi.postUsername(username)
    .then(response => {
      dispatch(selectUsername(username));
      sessionStorage.username = username;
    })
};

export { postUsername };
