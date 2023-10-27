"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
require("./App.css");
const RouterHome_1 = require("./ReactRouter/RouterHome");
class App extends react_1.default.Component {
    constructor(prop) {
        super(prop);
        this.state = {
            age: 30
        };
        // setInterval(() => {
        //   this.setState({
        //     age : this.state.age + 1
        //   })
        // }, 1000)
    }
    render() {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(RouterHome_1.default, null)));
    }
}
// optional props에 기본값 지정하기.
App.defaultProps = {
    company: 'Apple'
};
// stateless component
const StateLessComponent = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null,
            props.name,
            " ",
            props.company),
        props.children));
};
StateLessComponent.defaultProps = {
    company: 'Home'
};
const StateLessComponent2 = ({ name, children, company = "Home2" }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h2", null,
            name,
            " ",
            company),
        children));
};
exports.default = App;
//# sourceMappingURL=App.js.map