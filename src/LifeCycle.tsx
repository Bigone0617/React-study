import React from "react"

interface LifeCycleProps {
    job : string;
}

interface LifeCycleState {
    amount: number;
}

class LifeCycle extends React.Component<LifeCycleProps,LifeCycleState>{
    constructor(props: LifeCycleProps){
        console.log('constructor')
        super(props);
        this.state = {
            amount: 100000000
        }
    }
    /**
     * props, state 변경하지 않고 렌더할 때, 기본적으로 불리는 함수들
     */

    // 컴퍼넌트 마운트(렌더) 전 -> 이제는 사용 안함
    componentWillMount(): void {
        console.log('componentWillMount');
    }

    // 컴퍼넌트 마운트 후
    componentDidMount(): void {
        console.log('componentDidMount');
    }

    // 컴퍼넌트 마운트 제거 전
    componentWillUnmount(): void {
        console.log('componentWillUnmount');
    }

    /**
     * props, state 변경할 때 불리는 함수들
     */

    // props를 지정했을 때 호출, state가 변경되어도 호출 안됨.
    // componentWillReceiveProps안에서 호출된 setState는 계속해서 shouldComponentUpdate 호출하는 것이 아닌 
    // 한번에 모든 것을 변경시킴. : 사용하면 안됨
    componentWillReceiveProps(nextProps: Readonly<LifeCycleProps>, nextContext: any): void {
        console.log('componentWillReceiveProps : ' + JSON.stringify(nextProps));
    }
    
    // 컴퍼넌트가 재 렌더링 되기 전에 호출 : 사용하면 안됨
    componentWillUpdate(nextProps: Readonly<LifeCycleProps>, nextState: Readonly<LifeCycleState>, nextContext: any): void {
        console.log('componentWillUpdate : ' + JSON.stringify(nextProps));
    }

    // 컴퍼넌트가 재 렌더링 후에 호출
    componentDidUpdate(prevProps: Readonly<LifeCycleProps>, prevState: Readonly<LifeCycleState>, snapshot?: any): void {
        console.log('componentDidUpdate : ' + JSON.stringify(prevProps) + JSON.stringify(prevState));
    }

    // false면 state, props가 변경되어도 render하지 않음.
    shouldComponentUpdate(nextProps: Readonly<LifeCycleProps>, nextState: Readonly<LifeCycleState>, nextContext: any): boolean {
        console.log('shouldComponentUpdate : ' + JSON.stringify(nextProps) + JSON.stringify(nextState))
        return false;
    }

    render() {
        console.log('render')
        return(
            <div>
                {this.props.job} {this.state.amount.toLocaleString()}원
            </div>
        )
    }
}


export default LifeCycle