import React from 'react';
import logo from './logo.svg';
import './App.css';
import UpdateUnderComponent from './updateComponent/UpdateUnderComponent';
import UpdateUpperComponent from './updateComponent/UpdateUpperComponent';

export interface AppProp {
  name: string,
  children?: React.ReactNode; // children을 optional로 변경
}

interface Appstate {
  age: number
} 

class App extends React.Component<AppProp, Appstate> {
  constructor(prop: AppProp) {
    super(prop)
    this.state = {
      age: 30
    }

    // setInterval(() => {
    //   this.setState({
    //     age : this.state.age + 1
    //   })
    // }, 1000)
  }

  render(){
    return ( 
      <>
        <div className='App'>{this.props.name} {this.state.age}</div>
        <StateLessComponent name="anna">
          <h2>hihi</h2>
        </StateLessComponent>
        <UpdateUnderComponent/>
        <UpdateUpperComponent/>
      </>
    )
  }
}


// stateless component
const StateLessComponent: React.FC<AppProp> = (props) => {
  return (
    <>
      <h2>{props.name}</h2>
      {props.children}
    </>
  )
}

export default App;
