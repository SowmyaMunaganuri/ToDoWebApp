import React,{Fragment} from 'react';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login'
import Todolist from './components/Todolist';

function App()
{
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Login}/>
        <Route path="/todo" component={Todolist} />
      </Fragment>
      </Router>
  )
}

export default App;
