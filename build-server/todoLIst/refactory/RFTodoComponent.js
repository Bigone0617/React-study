"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const TodoComponent = ({ removeTodoList, updateTodoList, todo }) => {
    const [localTodo, setLocalTodo] = (0, react_1.useState)(todo);
    const [isEditing, setIsEditing] = (0, react_1.useState)(false);
    (0, react_1.useEffect)(() => {
        setLocalTodo(todo);
    }, [todo]);
    const onChangeHandler = (e) => {
        const { id, value } = e.target;
        setLocalTodo(Object.assign(Object.assign({}, localTodo), { [id]: value }));
    };
    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };
    const updateTodoHandler = () => {
        updateTodoList(localTodo);
        toggleEdit();
    };
    return (react_1.default.createElement("div", null,
        isEditing ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("input", { id: "title", value: localTodo.title, onChange: onChangeHandler }),
            react_1.default.createElement("input", { id: "description", value: localTodo.description, onChange: onChangeHandler }),
            react_1.default.createElement("button", { onClick: updateTodoHandler }, "\uC218\uC815"))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("span", null, localTodo.title),
            react_1.default.createElement("span", null, localTodo.description),
            react_1.default.createElement("button", { onClick: toggleEdit }, "\uC218\uC815"))),
        react_1.default.createElement("button", { onClick: () => removeTodoList(localTodo.id) }, "\uC0AD\uC81C")));
};
exports.default = TodoComponent;
//# sourceMappingURL=RFTodoComponent.js.map