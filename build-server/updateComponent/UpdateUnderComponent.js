"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class UpdateUnderComponent extends react_1.default.Component {
    constructor(props) {
        super(props);
        this.state = {
            toGrandChild: '아직 안바뀜'
        };
        this._clickToGrandChild = this._clickToGrandChild.bind(this);
    }
    render() {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(Parent, Object.assign({}, this.state)),
            react_1.default.createElement("button", { onClick: this._clickToGrandChild }, "GrandChild \uC758 \uAC12\uC744 \uBC14\uAFB8\uAE30")));
    }
    _clickToGrandChild() {
        this.setState({
            toGrandChild: '그랜드 차일드의 값을 변경'
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
        react_1.default.createElement("h3", null, props.toGrandChild)));
};
exports.default = UpdateUnderComponent;
//# sourceMappingURL=UpdateUnderComponent.js.map