import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/Home'
import Signin from './container/Signin';
import Signup from './container/Signup';


function App() {
    return (
        <div className='App'>
            <Router>
                <Routes>
                    <Route path="/" Component={Home}/>
                    <Route path="/signin" Component={Signin}/>
                    <Route path="/signup" Component={Signup}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;