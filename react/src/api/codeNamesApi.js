import postUsername from './postUsername';
import postTeamRole from './postTeamRole';
import postStartGame from './postStartGame';
import revealCard from './revealCard';
import checkStartedGame from './checkStartedGame';
import postClearGame from './postClearGame';

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

  static checkStartedGame() {
    return checkStartedGame();
  }

  static revealCard(id) {
    return revealCard(id);
  }

  static postClearGame() {
    return postClearGame();
  }
}

export default codeNamesApi;
