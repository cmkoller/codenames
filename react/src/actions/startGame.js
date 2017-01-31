import { push } from 'react-router-redux';
import codeNamesApi from './../api/codeNamesApi';

export const START_GAME = 'START_GAME';

const markGameAsStarted = (cards) => ({
    type: START_GAME,
    cards: cards
});

const startGame = () => dispatch => {
  return codeNamesApi.postStartGame()
    .then(response => {
      dispatch(markGameAsStarted())
      sessionStorage.gameStarted = true
    });
};

const loadStartedGame = () => dispatch => {
  dispatch(markGameAsStarted())
};

export { startGame, loadStartedGame };
