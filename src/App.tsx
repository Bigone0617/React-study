import React from 'react';
import logo from './logo.svg';
import './App.css';
import LifeCycle from './LifeCycle';
import UpdateUnderComponent from './updateComponent/UpdateUnderComponent';
import UpdateUpperComponent from './updateComponent/UpdateUpperComponent';
import ListComponent from './todoLIst/ListComponent';
import RFListComponent from './todoLIst/refactory/RFListComponent';
import RouterHome from './ReactRouter/RouterHome';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ListHome from './RouterProject/YoutubeList/ListHome';
import { Store, Unsubscribe } from 'redux';
import { addAge } from '.';

export interface AppProp {
  name: string,
  children?: React.ReactNode; // children을 optional로 변경
  company?: string;
  store?: Store<{age: number}>
}

interface Appstate {
  age: number
} 

class App extends React.Component<AppProp, Appstate> {
  private _unsubscribe: Unsubscribe;
  // optional props에 기본값 지정하기.
  static defaultProps = {
    company: 'Apple'
  }
  constructor(prop: AppProp) {
    super(prop)
    this.state = {
      age: this.props.store.getState().age
    }

    // setInterval(() => {
    //   this.setState({
    //     age : this.state.age + 1
    //   })
    // }, 1000)
  }

  componentDidMount(): void {
      const store = this.props.store;
      this._unsubscribe = store.subscribe(() => {
        this.forceUpdate()
      });
  }

  componentWillUnmount(): void {
      this._unsubscribe();
  }

  

  render(){
    const store  = this.props.store;
    const state = store.getState();
    
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
        <UpdateUpperComponent/>
        <ListComponent/>
        <RFListComponent/> */}
       {/* <RouterHome/> */}
       {/* <ListHome/> */}
       {state.age}
       <button onClick={() => store.dispatch(addAge())}>나이 먹이기</button>
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
