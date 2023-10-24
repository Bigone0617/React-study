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