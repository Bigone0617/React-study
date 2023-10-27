import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams, useLocation, useNavigate, useMatch, useMatches, useSearchParams, Outlet } from 'react-router-dom';

interface PostProps {
    name : string;
}

// ...props를 이용하면 컴퍼넌트로 넘어오는 모든 props가 표현됨
// v6 이전에는 props의 type이 RouteComponentProps 였음.
const Post:React.FC<PostProps> = ({...props}) => {

    // url 네비게이션
    // v6전에는 props.history.push를 사용해야 됨.
    const navitage = useNavigate();
    const goNextPost = () => {
        navitage('/posts/'+(Number(params.postId)+1))
    }

    // query string을 얻기 위해서는 이 함수를 사용.
    // ex) ...?age=20;
    const [searchParams] = useSearchParams();
    const age = searchParams.get('age'); // 20

    // Route의 element로 넘어오는 url params를 가져오는 방식
    // v6 전에는 props를 이용해서 받아옴.
    // ex) .../posts/:postId -> .../posts/30
    const params = useParams(); // 30

    return (
        <div>
            <h2>Post {params.postId} {props?.name}</h2>
            <h2>queryString : {age}</h2>
            <button onClick={goNextPost}>다음 포스트</button>            
        </div>
    )
}

const PostList:React.FC<any> = ({...props}) => {
    return (
        <div>
            {/* 중첩된 라우터의 하위 라우터를 outlet으로 호출 */}
            <Outlet/>
            <h3>list</h3>
        </div>
    )
}

class RouterHome extends React.Component<{}, {}> {
    render(){
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<h3>home</h3>}/>
                    <Route path="/intro" element={<h3>intro</h3>}/>
                    {/* <Route 
                        path="/posts/:postId" 
                        element={<Post name="kim"/>}
                    /> */}
                    {/* 중첩된 라우트를 사용할 때 */}
                    <Route path="/posts" element={<PostList/>}>
                        <Route path=':postId' element={<Post name="dd"/>}/>
                    </Route>
                </Routes>
                <nav>
                    <ul>
                        <li><Link to="/">h</Link></li>
                        <li><Link to="/intro">i</Link></li>
                    </ul>
                </nav>
            </Router>  
        )
    }
}

export default RouterHome;