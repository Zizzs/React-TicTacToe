import React from 'react';
import './Box.css';
import { connect } from 'react-redux';

let output; 
function componentDidMount(props) {
    if (props.letter.letter === "X" || props.letter.letter === "O")
    output = props.letter.letter; 
}

function Box (props) {
    componentDidMount(props);
    function handlePlayerClick(event) {
        let currentLetter;
        let tempValue;
        
        if (props.value === true) {
            currentLetter = "X";
            tempValue = false;
        } else {
            currentLetter = "O"
            tempValue = true;
        }

        const { dispatch } = props;
        event.preventDefault();

        const action = {
            type: 'PLAYER_CLICK',
            boxId: props.boxId,
            filled: true,
            letter: currentLetter,
            value: tempValue
        };
       
        dispatch(action);
    }


    return (
        <div onClick={handlePlayerClick} className="singleBox">
            <div id={props.boxId}>{output}</div>
        </div>
    )
}

export default connect()(Box);