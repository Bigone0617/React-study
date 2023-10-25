import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

class RouterHome extends React.Component<{}, {}> {
    render(){
        return (
            <Router>
                <Routes>
                    <Route path="/" element={<h3>home</h3>}/>
                    <Route path="/intro" element={<h3>intro</h3>}/>
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