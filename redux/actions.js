const { spookyTypes } = require('./types');

//code actions here
const incrementStep = () => ({ type: spookyTypes.SET_STEP, steps: 0 });
const createNewSpookySound = (sound) => ({
  type: spookyTypes.SET_SOUND,
  sound,
});

module.exports = {
  incrementStep,
  createNewSpookySound,
};
