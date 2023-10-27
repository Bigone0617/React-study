"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class TodoComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.onChangeHandler = (e) => {
            if (e.target.id === 'title') {
                this.setState({
                    title: e.target.value
                });
            }
            else {
                this.setState({
                    description: e.target.value
                });
            }
        };
        this.updateTodoHandler = () => {
            this.props.updateTodoList(this.state);
        };
        this.state = props.todo;
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement("input", { id: "title", value: this.state.title, onChange: (e) => this.onChangeHandler(e) }),
            react_1.default.createElement("input", { id: "description", value: this.state.description, onChange: (e) => this.onChangeHandler(e) }),
            react_1.default.createElement("button", { onClick: () => this.updateTodoHandler() }, "\uC218\uC815"),
            react_1.default.createElement("button", { onClick: () => this.props.removeTodoList(this.state.id) }, "\uC0AD\uC81C")));
    }
}
exports.default = TodoComponent;
//# sourceMappingURL=TodoComponent.js.map