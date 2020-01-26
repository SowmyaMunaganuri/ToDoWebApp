import React,{Fragment} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Todolist from './components/Todolist';

const App=()=>
{

  return (
      <Fragment>
        <Router>
        <Route 
        path="/todo"
        component={Todolist}/>
        <Route 
        exact path="/" 
        component={Login} />
        
        </Router>
      </Fragment>
  )
  }

export default App;
