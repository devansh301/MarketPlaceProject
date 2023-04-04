import React from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css';
import Layout from './components/Layout'

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './container/Home'
import Signin from './container/Signin';
import Signup from './container/Signup';


function App() {
<<<<<<< HEAD
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
=======
  return (
    <div className="App">
      <Layout>
        <h1>Hello World</h1>
      </Layout>
    </div>
  );
>>>>>>> adff7bed8222a481dd268f859feb43ade255dc1c
}

export default App;