import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{name: string;}, {age: number}> {
  public state: {age: number} = {
    age: 30
  };

  render(){
    return ( 
      <div className='App'>{this.props.name} {this.state.age}</div>
    )
  }
}

export default App;
