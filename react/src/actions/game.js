import { push } from 'react-router-redux';
import codeNamesApi from './../api/codeNamesApi';

export const START_GAME = 'START_GAME';
export const CLEAR_GAME = 'CLEAR_GAME';

const markGameAsStarted = () => ({
    type: START_GAME
});

const markGameAsCleared = () => ({
    type: CLEAR_GAME
});

const startGame = () => dispatch => {
  return codeNamesApi.postStartGame()
    .then(response => {
      dispatch(markGameAsStarted())
      sessionStorage.gameStarted = true
    });
};

const checkStartedGame = () => dispatch => {
  return codeNamesApi.checkStartedGame()
    .then(response => {
      response.json().then(function(json) {
        if(json.playing) {
          dispatch(markGameAsStarted())
          sessionStorage.gameStarted = true
        }
      });
    });
};

const loadStartedGame = () => dispatch => {
  dispatch(markGameAsStarted())
};

const clearGame = () => dispatch => {
  return codeNamesApi.postClearGame()
    .then(response => {
      dispatch(markGameAsCleared())
    });
}

const clearGameSession = () => dispatch => {
  dispatch(markGameAsCleared())
};

export { startGame, loadStartedGame, checkStartedGame, clearGame, clearGameSession };
