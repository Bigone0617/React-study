import React from "react";
import { ChangeTodoListProps, TodoProps } from "./ListComponent";

class TodoComponent extends React.Component<ChangeTodoListProps, TodoProps> {
    constructor(props: ChangeTodoListProps){
        super(props);
        this.state = props.todo;
    }

    onChangeHandler = (e) => {
       if(e.target.id === 'title'){
            this.setState({
                title: e.target.value
            })
       }else{
            this.setState({
                description: e.target.value
            })
       }
    }

    updateTodoHandler = () => {
        this.props.updateTodoList(this.state);
    }
    
    render() {
        return (
            <div>
                <input id= "title" value={this.state.title} onChange={(e) => this.onChangeHandler(e)}></input>
                <input id="description" value={this.state.description} onChange={(e) => this.onChangeHandler(e)}></input>
                <button onClick={() => this.updateTodoHandler()}>수정</button>
                <button onClick={() => this.props.removeTodoList(this.state.id)}>삭제</button>
            </div>
        )
    }
}

export default TodoComponent;