import { push } from 'react-router-redux';
import codeNamesApi from './../api/codeNamesApi';

export const UPDATE_USER_INFO = 'UPDATE_USER_INFO';

const updateUserInfo = (username, team, role, ready) => ({
  type: UPDATE_USER_INFO,
  username: username,
  team: team,
  role: role,
  ready: ready
});

const loadUserData = ({username: username, team: team, role: role, ready: ready}) => dispatch => {
  dispatch(updateUserInfo(username, team, role, ready));
};

export { loadUserData };
