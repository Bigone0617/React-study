import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from './LifeCycle';
import UpdateUnderComponent from './updateComponent/UpdateUnderComponent';
import UpdateUpperComponent from './updateComponent/UpdateUpperComponent';
import ListComponent from './todoLIst/ListComponent';

export interface AppProp {
  name: string,
  children?: React.ReactNode; // children을 optional로 변경
  company?: string;
}

interface Appstate {
  age: number
} 

class App extends React.Component<AppProp, Appstate> {
  // optional props에 기본값 지정하기.
  static defaultProps = {
    company: 'Apple'
  }
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
        {/* <>
          <div className='App'>{this.props.name} {this.props.company} {this.state.age}</div>
          <StateLessComponent name="anna">
            <h2>hihi</h2>
          </StateLessComponent>
          <StateLessComponent2 name='ho'>
            <div>123</div>
          </StateLessComponent2>
        </>
        <>
          <LifeCycle job="developer"/>
        </>
        <UpdateUnderComponent/>
        <UpdateUpperComponent/> */}
        <ListComponent/>
      </>
    )
  }
}


// stateless component
const StateLessComponent: React.FC<AppProp> = (props) => {
  return (
    <>
      <h2>{props.name} {props.company}</h2>
      {props.children}
    </>
  )
}

StateLessComponent.defaultProps = {
  company: 'Home'
}



const StateLessComponent2: React.FC<AppProp> = ({name, children, company = "Home2"}) => {
  return (
    <>
      <h2>{name} {company}</h2>
      {children}
    </>
  )
}
export default App;
