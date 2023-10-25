import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes, useParams } from 'react-router-dom';


const Post = () => {
    // Route의 element로 넘어오는 props를 가져오는 방식
    const params = useParams();
    
    return (
        <h2>Post {params.postId}</h2>
    )
}

class RouterHome extends React.Component<{}, {}> {
    render(){
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<h3>home</h3>}/>
                    <Route path="/intro" element={<h3>intro</h3>}/>
                    <Route 
                        path="/posts/:postId" 
                        // loader={({ params }) => {
                        //     console.log(params);
                        // }}
                        element={<Post />}
                    />
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