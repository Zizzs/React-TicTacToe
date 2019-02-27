export default (state = {}, action) => {
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
    // case 'SWAP_LETTER':
    //   const { letter } = action;
    //   let newState = Object.assign({}, state, {
    //     currentLetter: {
    //       letter: letter
    //     }
    //   });
    default:
      return state;
    }
  };