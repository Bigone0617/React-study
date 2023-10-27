import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams, useLocation, useNavigate, useMatch, useMatches, useSearchParams, Outlet, Navigate } from 'react-router-dom';

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
    // useNavigate 훅을 이용하여 경로 이동
    // replace 옵션을 통해 history에 이력을 남길지 여부 
    const navigate = useNavigate();
    return (
        <div>
            {/* 중첩된 라우터의 하위 라우터를 outlet으로 호출 */}
            <Outlet/>
            <h3>list</h3>
            <button onClick={() => navigate('/posts/3')}>go to 3</button>
            <button onClick={() => navigate('/posts/4', {replace: true})}>go to 4 히스토리 안남김</button>
            <button onClick={() => navigate(-1)}>전페이지로</button>
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
                    {/* Navigate를 이용하여 리다이렉션 */}
                    <Route path="re" element={<Navigate to="/"></Navigate>}/>
                </Routes>
                <nav>
                    <ul>
                        <li><Link to="/">h</Link></li>
                        <li><Link to="/intro">i</Link></li>
                        <li><Link to="/re">리다이렉트</Link></li>
                    </ul>
                </nav>
            </Router>  
        )
    }
}

export default RouterHome;