import { SELECT_USERNAME } from './../actions/postUsername';
import { SELECT_TEAM_ROLE } from './../actions/postTeamRole';
import { UPDATE_USER_INFO } from './../actions/loadUserData';

let initialState = {
  username: null,
  team: null,
  role: null,
  ready: null
};

const userNameSelection = (state = initialState, { type, username = state.username, team = state.team, role = state.role, ready = state.ready}) => {
  switch(type) {
    case SELECT_USERNAME:
      return Object.assign({}, state, {
        username: username
      })
    case SELECT_TEAM_ROLE:
      return Object.assign({}, state, {
        team: team,
        role: role,
        ready: ready
      })
    case UPDATE_USER_INFO:
      return Object.assign({}, state, {
        username: username,
        team: team,
        role: role,
        ready: ready
      })
    default:
      return state;
  }
};

export default userNameSelection;
