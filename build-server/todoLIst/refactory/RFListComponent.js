"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const uuid_1 = require("uuid");
const RFTodoComponent_1 = require("./RFTodoComponent");
const RFListComponent = () => {
    const [todoList, setTodoList] = (0, react_1.useState)([
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
    ]);
    const addTodoList = () => {
        const newTodo = {
            id: (0, uuid_1.v4)(),
            title: '',
            description: ''
        };
        setTodoList([...todoList, newTodo]);
    };
    const removeTodoList = (id) => {
        const newTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(newTodoList);
    };
    const updateTodoList = (updatedTodo) => {
        const updatedList = todoList.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo));
        setTodoList(updatedList);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        todoList.map((todo) => (react_1.default.createElement(RFTodoComponent_1.default, { key: todo.id, removeTodoList: removeTodoList, updateTodoList: updateTodoList, todo: todo }))),
        react_1.default.createElement("button", { onClick: addTodoList }, "Todo \uCD94\uAC00\uD558\uAE30")));
};
exports.default = RFListComponent;
//# sourceMappingURL=RFListComponent.js.map