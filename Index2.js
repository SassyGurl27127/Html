import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class MyStyling extends React.Component {
    render() {
        return(
            <div>
                <h1 style={myheaderstyle}>Hi</h1>
                <h1 style={mystyle}>How are you</h1>
            </div>
        );
    }
}
ReactDOM.render(<MyStyling />, document.getElementById('root'));