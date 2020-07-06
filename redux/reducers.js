const { spookyTypes } = require('./types');

const initialState = {
  steps: 0,
  spookySounds: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case spookyTypes.SET_STEP:
      return {
        ...state,
        steps: action.steps + 1,
      };
    case spookyTypes.SET_SOUND:
      return {
        ...state,
        spookySounds: spookySounds.push(action.sound),
      };
    default:
      return state;
  }
};

module.exports = rootReducer;
