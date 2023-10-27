"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const uuid_1 = require("uuid");
const TodoComponent_1 = require("./TodoComponent");
class ListComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [
                {
                    id: (0, uuid_1.v4)(),
                    title: '공부하기',
                    description: 'react component'
                },
                {
                    id: (0, uuid_1.v4)(),
                    title: '운동하기',
                    description: '푸시업 100개'
                },
            ]
        };
        this.addTodoList = this.addTodoList.bind(this);
        this.removeTodoList = this.removeTodoList.bind(this);
        this.updateTodoList = this.updateTodoList.bind(this);
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            this.state.todoList.map((todo) => {
                return (react_1.default.createElement(TodoComponent_1.default, { key: todo.id, removeTodoList: this.removeTodoList, updateTodoList: this.updateTodoList, todo: todo }));
            }),
            react_1.default.createElement("button", { onClick: this.addTodoList }, "Todo \uCD94\uAC00\uD558\uAE30")));
    }
    addTodoList() {
        const newTodos = this.state.todoList;
        const newTodo = {
            id: (0, uuid_1.v4)(),
            title: '',
            description: ''
        };
        newTodos.push(newTodo);
        this.setState({
            todoList: newTodos
        });
    }
    removeTodoList(id) {
        const newTodoList = this.state.todoList.filter((todo) => todo.id !== id);
        this.setState({
            todoList: newTodoList
        });
    }
    updateTodoList(updateTodo) {
        const newTodoList = this.state.todoList.map((todo) => {
            if (todo.id === updateTodo.id) {
                todo = updateTodo;
            }
            return todo;
        });
        this.setState({
            todoList: newTodoList
        });
    }
}
exports.default = ListComponent;
//# sourceMappingURL=ListComponent.js.map