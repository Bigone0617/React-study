import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{name: string;}> {
  render(){
    return ( 
      <div className='App'>{this.props.name}</div>
    )
  }
}

export default App;
