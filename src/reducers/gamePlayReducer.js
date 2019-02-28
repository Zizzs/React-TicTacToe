export default (state = initialState, action) => {
    switch (action.type) {
    case 'PLAYER_CLICK':
      const { boxId, filled, letter, value } = action;
      let newState = Object.assign({}, state, {
        value: value,
        [boxId]: {
          filled: filled,
          letter: letter,
        }
      });
      return newState;

    default:
      return state;
    }
  };

  let initialState = {
    value: true,
    one: {
      filled: false,
      letter: null
    },
    two: {
      filled: false,
      letter: null
    },
    three: {
      filled: false,
      letter: null
    },
    four: {
      filled: false,
      letter: null
    },
    five: {
      filled: false,
      letter: null
    },
    six: {
      filled: false,
      letter: null
    },
    seven: {
      filled: false,
      letter: null
    },
    eight: {
      filled: false,
      letter: null
    },
    nine: {
      filled: false,
      letter: null
    }
  }