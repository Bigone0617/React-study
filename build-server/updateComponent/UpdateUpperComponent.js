"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class UpdateUpperComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            fromGrandChild: '아직 안바뀜'
        };
        this._clickFromGrandChild = this._clickFromGrandChild.bind(this);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Parent, { clickFromGrandChild: this._clickFromGrandChild }),
            react_1.default.createElement("p", null, this.state.fromGrandChild)));
    }
    _clickFromGrandChild() {
        this.setState({
            fromGrandChild: '그랜드 차일드로 부터 값이 변경되었음.'
        });
    }
}
const Parent = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "\uC5EC\uAE34 Parent"),
        react_1.default.createElement(Me, Object.assign({}, props))));
};
const Me = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "\uC5EC\uAE34 Me"),
        react_1.default.createElement(Child, Object.assign({}, props))));
};
const Child = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "\uC5EC\uAE34 Child"),
        react_1.default.createElement(GrandChild, Object.assign({}, props))));
};
const GrandChild = (props) => {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("p", null, "\uC5EC\uAE34 GrandChild"),
        react_1.default.createElement("button", { onClick: props.clickFromGrandChild }, "GrandChild \uBC84\uD2BC")));
};
exports.default = UpdateUpperComponent;
//# sourceMappingURL=UpdateUpperComponent.js.map