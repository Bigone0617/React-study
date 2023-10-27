"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
// ...props를 이용하면 컴퍼넌트로 넘어오는 모든 props가 표현됨
// v6 이전에는 props의 type이 RouteComponentProps 였음.
const Post = (_a) => {
    var props = __rest(_a, []);
    // url 네비게이션
    // v6전에는 props.history.push를 사용해야 됨.
    const navitage = (0, react_router_dom_1.useNavigate)();
    const goNextPost = () => {
        navitage('/posts/' + (Number(params.postId) + 1));
    };
    // query string을 얻기 위해서는 이 함수를 사용.
    // ex) ...?age=20;
    const [searchParams] = (0, react_router_dom_1.useSearchParams)();
    const age = searchParams.get('age'); // 20
    // Route의 element로 넘어오는 url params를 가져오는 방식
    // v6 전에는 props를 이용해서 받아옴.
    // ex) .../posts/:postId -> .../posts/30
    const params = (0, react_router_dom_1.useParams)(); // 30
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h2", null,
            "Post ",
            params.postId,
            " ", props === null || props === void 0 ? void 0 :
            props.name),
        react_1.default.createElement("h2", null,
            "queryString : ",
            age),
        react_1.default.createElement("button", { onClick: goNextPost }, "\uB2E4\uC74C \uD3EC\uC2A4\uD2B8")));
};
const PostList = (_a) => {
    var props = __rest(_a, []);
    // useNavigate 훅을 이용하여 경로 이동
    // replace 옵션을 통해 history에 이력을 남길지 여부 
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(react_router_dom_1.Outlet, null),
        react_1.default.createElement("h3", null, "list"),
        react_1.default.createElement("button", { onClick: () => navigate('/posts/3') }, "go to 3"),
        react_1.default.createElement("button", { onClick: () => navigate('/posts/4', { replace: true }) }, "go to 4 \uD788\uC2A4\uD1A0\uB9AC \uC548\uB0A8\uAE40"),
        react_1.default.createElement("button", { onClick: () => navigate(-1) }, "\uC804\uD398\uC774\uC9C0\uB85C")));
};
class RouterHome extends react_1.default.Component {
    render() {
        return (react_1.default.createElement(react_router_dom_1.BrowserRouter, null,
            react_1.default.createElement(react_router_dom_1.Routes, null,
                react_1.default.createElement(react_router_dom_1.Route, { path: "/", element: react_1.default.createElement("h3", null, "home") }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/intro", element: react_1.default.createElement("h3", null, "intro") }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/posts", element: react_1.default.createElement(PostList, null) },
                    react_1.default.createElement(react_router_dom_1.Route, { path: ':postId', element: react_1.default.createElement(Post, { name: "dd" }) })),
                react_1.default.createElement(react_router_dom_1.Route, { path: "re", element: react_1.default.createElement(react_router_dom_1.Navigate, { to: "/" }) })),
            react_1.default.createElement("nav", null,
                react_1.default.createElement("ul", null,
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/" }, "h")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/intro" }, "i")),
                    react_1.default.createElement("li", null,
                        react_1.default.createElement(react_router_dom_1.Link, { to: "/re" }, "\uB9AC\uB2E4\uC774\uB809\uD2B8"))))));
    }
}
exports.default = RouterHome;
//# sourceMappingURL=RouterHome.js.map