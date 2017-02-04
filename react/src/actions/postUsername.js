import { push } from 'react-router-redux';
import codeNamesApi from './../api/codeNamesApi';

export const SELECT_USERNAME = 'SELECT_USERNAME';
export const DELETE_USERNAME = 'DELETE_USERNAME';

const selectUsername = (username) => ({
    type: SELECT_USERNAME,
    username: username
});

const deleteUsername = (username) => ({
    type: DELETE_USERNAME,
    username: username
});

const postUsername = (username) => dispatch => {
  return codeNamesApi.postUsername(username)
    .then(response => {
      dispatch(selectUsername(username));
      sessionStorage.username = username;
    })
};

const deleteUser = (username) => dispatch => {
  return codeNamesApi.deleteUser(username)
    .then(response => {
      dispatch(selectUsername(username));
      sessionStorage.clear();
      location.reload();
    })
};

export { postUsername, deleteUser };
