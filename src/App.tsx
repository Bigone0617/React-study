import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component<{name: string;}, {age: number}> {
  constructor(prop: {name: string}) {
    super(prop)
    this.state = {
      age: 30
    }

    setInterval(() => {
      this.setState({
        age : this.state.age + 1
      })
    }, 1000)
  }

  render(){
    return ( 
      <div className='App'>{this.props.name} {this.state.age}</div>
    )
  }
}

export default App;
