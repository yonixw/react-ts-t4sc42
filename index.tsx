import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Second from './Second'
import './style.css';

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editinsssssg to see some madddgic happen :)
        </p>
        <Second />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
