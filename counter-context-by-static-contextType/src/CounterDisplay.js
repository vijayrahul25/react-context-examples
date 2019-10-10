import React from 'react';
import './App.css';
import CounterContext from './context/counter/CounterContext';

class CounterDisplay extends React.Component {
    static contextType = CounterContext;

    render() {
        return (
            <div className="display" >
                <h1>Counter - {this.context.CounterState.counter} </h1>
                <button className="btn-increment"
                    onClick={this.context.CounterState.incrementCount}
                >Increment</button>
                <button className="btn-decrement"
                    onClick={this.context.CounterState.decrementCount}
                >Decrement</button>
            </div>
        );
    }
}

export default CounterDisplay;
