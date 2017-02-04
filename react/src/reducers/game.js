import { START_GAME, CLEAR_GAME } from './../actions/game';

let initialState = {
  gameStarted: false,
  cards: []
};

const gameStarter = (state = initialState, { type }) => {
  switch(type) {
    case START_GAME:
      return Object.assign({}, state, {
        gameStarted: true
      })
    case CLEAR_GAME:
      return Object.assign({}, state, {
        gameStarted: false
      })
    default:
      return state;
  }
};

export default gameStarter;
