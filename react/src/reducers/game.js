import { START_GAME } from './../actions/startGame';

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
    default:
      return state;
  }
};

export default gameStarter;
