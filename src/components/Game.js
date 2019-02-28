import React, { Component} from 'react';
import Box from './Box';
import './Game.css';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      state: state
    };
};

function componentDidMount(state) {
    console.log(state);
    if(state.one.letter === "X" && state.two.letter === "X" && state.three.letter === "X") {
        alert("X has Won");
    } else if (state.four.letter === "X" && state.five.letter === "X" && state.six.letter === "X") {
        alert("X has won");
    } else if (state.seven.letter === "X" && state.eight.letter === "X" && state.nine.letter === "X") {
        alert("X has won");
    } else if (state.one.letter === "X" && state.four.letter === "X" && state.seven.letter === "X") {
        alert("X has won");
    } else if (state.two.letter === "X" && state.five.letter === "X" && state.eight.letter === "X") {
        alert("X has won");
    } else if (state.three.letter === "X" && state.six.letter === "X" && state.nine.letter === "X") {
        alert("X has won");
    } else if (state.one.letter === "X" && state.five.letter === "X" && state.nine.letter === "X") {
        alert("X has won");
    } else if (state.three.letter === "X" && state.five.letter === "X" && state.seven.letter === "X") {
        alert("X has won");
    } else if(state.one.letter === "O" && state.two.letter === "O" && state.three.letter === "O") {
        alert("O has Won");
    } else if (state.four.letter === "O" && state.five.letter === "O" && state.six.letter === "O") {
        alert("O has won");
    } else if (state.seven.letter === "O" && state.eight.letter === "O" && state.nine.letter === "O") {
        alert("O has won");
    } else if (state.one.letter === "O" && state.four.letter === "O" && state.seven.letter === "O") {
        alert("O has won");
    } else if (state.two.letter === "O" && state.five.letter === "O" && state.eight.letter === "O") {
        alert("O has won");
    } else if (state.three.letter === "O" && state.six.letter === "O" && state.nine.letter === "O") {
        alert("O has won");
    } else if (state.one.letter === "O" && state.five.letter === "O" && state.nine.letter === "O") {
        alert("O has won");
    } else if (state.three.letter === "O" && state.five.letter === "O" && state.seven.letter === "O") {
        alert("O has won");
    } else if (state.one.filled === true && state.two.filled === true && state.three.filled === true && state.four.filled === true && state.five.filled === true && state.six.filled === true && state.seven.filled === true && state.eight.filled === true && state.nine.filled === true){
        alert("It's a draw!");
    }
}

function Game(props) {
    componentDidMount(props.state);


    return (
        <div>
            <h5>Game board</h5>
            <div id="mainGrid">
                <div>
                    <Box letter={props.state.one} value={props.state.value} boxId={'one'}/>
                </div>
                <div>
                    <Box letter={props.state.two}  value={props.state.value} boxId={'two'}/>
                </div>
                <div>
                    <Box letter={props.state.three}  value={props.state.value} boxId={'three'}/>
                </div>
                <div>
                   <Box letter={props.state.four}  value={props.state.value} boxId={'four'}/>
                </div>
                <div>
                    <Box letter={props.state.five}  value={props.state.value} boxId={'five'}/>
                </div>
                <div>
                    <Box letter={props.state.six}  value={props.state.value} boxId={'six'}/>
                </div>
                <div>
                    <Box letter={props.state.seven}  value={props.state.value} boxId={'seven'}/>
                </div>
                <div>
                    <Box letter={props.state.eight}  value={props.state.value} boxId={'eight'}/>
                </div>
                <div>
                    <Box letter={props.state.nine}  value={props.state.value} boxId={'nine'}/> 
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(Game);