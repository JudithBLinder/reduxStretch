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
        steps: state.steps + 1,
      };
    case spookyTypes.SET_SOUND:
      return {
        ...state,
        spookySounds: [...state.spookySounds, action.sound],
      };
    default:
      return state;
  }
};

module.exports = rootReducer;
