import React from 'react';
import './Box.css';
import { connect } from 'react-redux';




function Box (props) {
    function handlePlayerClick(event) {
        let currentLetter;
        let tempValue;
        
        //console.log(props);
        
        if (props.value) {
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
        
        if (props.letter.filled === false) {
            dispatch(action);
        }
    }


    return (
        <div>

            <div onClick={handlePlayerClick} className="singleBox">
                <div id={props.boxId}>{props.letter.letter}</div>
            </div>
        </div>
    )
}

export default connect()(Box);