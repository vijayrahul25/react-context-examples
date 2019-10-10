import React from 'react';
import './App.css';
import CounterContext from './CountProvider';
import CounterDisplay from './CounterDisplay';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      error: ''
    };
  }

  incrementCount = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  decrementCount = () => {
    if (this.state.counter > 0) {
      this.setState({ counter: this.state.counter - 1 })
    }
  }

  render() {
    return (
      <div className="App" >
        <CounterContext.Provider value={{
          CounterState: {
            ...this.state,
            incrementCount: this.incrementCount,
            decrementCount: this.decrementCount
          }
        }}>
          <CounterDisplay />
        </CounterContext.Provider>
      </div>
    );
  }
}

export default App;
