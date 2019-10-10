import React from 'react';
import './App.css';
import CounterContext from './context/counter/CounterContext';

class CounterDisplay extends React.Component {
    render() {
        return (
            <div className="display" >
                <CounterContext.Consumer>
                    {
                        ({ CounterContext }) => {
                            return (
                                <>
                                    <h1>Counter - {CounterContext.counter} </h1>
                                    <button className="btn-increment"
                                        onClick={CounterContext.incrementCount}
                                    >Increment</button>
                                    <button className="btn-decrement"
                                        onClick={CounterContext.decrementCount}
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
