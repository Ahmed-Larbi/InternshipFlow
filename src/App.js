import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import MainPage from './components/pages/mainpage/mainPage';
import NewInternships from './components/pages/newInterships/NewInternship';
import './App.css';
  
export default class App extends Component {
  render() {
    return (
       <Router>
           <div className="App">
           <Routes>
                 <Route exact path='/' element={< MainPage />}></Route>
                 <Route exact path='/add-new' element={< NewInternships />}></Route>
          </Routes>
          </div>
       </Router>
   );
  }
}
