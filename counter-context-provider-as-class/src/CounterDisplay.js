import React from 'react';
import './App.css';
import CounterContext from './context/counter/CounterContext';

class CounterDisplay extends React.Component {
    render() {
        return (
            <div className="display" >
                <CounterContext.Consumer>
                    {
                        ({ CounterState }) => {
                            return (
                                <>
                                    <h1>Counter - {CounterState.counter} </h1>
                                    <button className="btn-increment"
                                        onClick={CounterState.incrementCount}
                                    >Increment</button>
                                    <button className="btn-decrement"
                                        onClick={CounterState.decrementCount}
                                    >Decrement</button>
                                </>
                            )
                        }
                    }
                </CounterContext.Consumer>


            </div >
        );
    }
}

export default CounterDisplay;
