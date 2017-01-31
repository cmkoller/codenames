import postUsername from './postUsername';
import postTeamRole from './postTeamRole';
import postStartGame from './postStartGame';
import revealCard from './revealCard';

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

  static revealCard(id) {
    return revealCard(id);
  }
}

export default codeNamesApi;
