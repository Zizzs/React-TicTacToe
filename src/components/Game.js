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