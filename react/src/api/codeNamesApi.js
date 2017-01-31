import postUsername from './postUsername';
import postTeamRole from './postTeamRole';
import postStartGame from './postStartGame';

class codeNamesApi {
  static postUsername(username) {
    return postUsername(username);
  }

  static postTeamRole(userData) {
    return postTeamRole(userData);
  }

  static postStartGame() {
    return postStartGame();
  }
}

export default codeNamesApi;
