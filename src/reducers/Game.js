import * as types from '../constants/ActionTypes';

const initialState = {
  history: [
    {
      squares: Array(400).fill(null),
      position: -1
    }
  ],
  xIsNext: true,
  stepNumber: 0,
  isIncrease: true
};

const Game = (state = initialState, action) => {
  switch (action.type) {
    case types.RESET_GAME:
      return {
        ...state,
        xIsNext: true,
        history: [
          {
            squares: Array(400).fill(null),
            position: -1
          }
        ],
        stepNumber: 0
      };
    case types.ADD_STEP:
      return {
        ...state,
        history: action.history,
        stepNumber: action.stepNumber,
        xIsNext: action.xIsNext
      };
    case types.SORT:
      return {
        ...state,
        isIncrease: !state.isIncrease
      };
    case types.JUMP_TO_STEP:
      return {
        ...state,
        stepNumber: action.stepNumber,
        xIsNext: action.stepNumber % 2 === 0
      }
    default:
      return state;
  }
};

export default Game;
