import { push } from 'react-router-redux';
import codeNamesApi from './../api/codeNamesApi';

export const SELECT_TEAM_ROLE = 'SELECT_TEAM_ROLE';

const selectTeamRole = (userData) => ({
    type: SELECT_TEAM_ROLE,
    username: userData.username,
    team: userData.team,
    role: userData.role,
    ready: userData.ready
});

const postTeamRole = (userData) => dispatch => {
  return codeNamesApi.postTeamRole(userData)
    .then(response => {
      dispatch(selectTeamRole(userData));
      sessionStorage.team = userData.team;
      sessionStorage.role = userData.role;
      sessionStorage.ready = userData.ready;
    });
};

export { postTeamRole };
