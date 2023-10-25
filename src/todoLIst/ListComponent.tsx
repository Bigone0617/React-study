import React from "react";
import {v4 as uuidv4} from 'uuid';
import TodoComponent from "./TodoComponent";

export interface TodoProps {
    id: string;
    title: string;
    description: string;
}

export interface ChangeTodoListProps {
    removeTodoList(id: string): void;
    updateTodoList(todo: TodoProps):void;
    todo: TodoProps;
}

interface ListComponentProps {

}

interface ListComponentState {
    todoList: TodoProps[];
}

class ListComponent extends React.Component<ListComponentProps, ListComponentState> {
    constructor(props: ListComponentProps){
        super(props)
        this.state = {
            todoList : [
                {
                    id: uuidv4(),
                    title: '공부하기',
                    description: 'react component'
                },
                {
                    id: uuidv4(),
                    title: '운동하기',
                    description: '푸시업 100개'
                },
            ]
        }
        this.addTodoList = this.addTodoList.bind(this);
        this.removeTodoList = this.removeTodoList.bind(this);
        this.updateTodoList = this.updateTodoList.bind(this);
    }

    render () {
        return (
            <>
                {
                    this.state.todoList.map((todo) => {
                        return (
                            <TodoComponent 
                                key={todo.id}
                                removeTodoList={this.removeTodoList}
                                updateTodoList={this.updateTodoList}
                                todo = {todo}
                            />
                        )
                    })
                }
                <button onClick={this.addTodoList}>Todo 추가하기</button>
            </>
        )
    }

    private addTodoList(): void {
        const newTodos = this.state.todoList;
        const newTodo: TodoProps = {
            id: uuidv4(),
            title: '',
            description: ''
        }
        newTodos.push(newTodo);

        this.setState({
            todoList: newTodos
        })
    }

    private removeTodoList(id: string): void {
        const newTodoList = this.state.todoList.filter((todo) => todo.id !== id)

        this.setState({
            todoList: newTodoList
        })
    }

    private updateTodoList(updateTodo: TodoProps): void {
        const newTodoList = this.state.todoList.map((todo) => {
            if(todo.id === updateTodo.id){
                todo = updateTodo
            }
            return todo
        })

        this.setState({
            todoList: newTodoList
        })
    }
}

export default ListComponent;