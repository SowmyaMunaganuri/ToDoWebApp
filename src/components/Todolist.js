import React, { Fragment,useState } from 'react';
import '../App.css'
import Todo from './Todo'
import {Redirect} from "react-router-dom"
const Todolist=()=>{
    const[islogout,setLogoutStatus]=useState(false)
    const[items,setItem]=useState([])
    let textf="";
    function handleClick(e){
        if(textf.value !=="")
        {
            var newItem ={
                text:textf.value,
                key:Date.now()
            };
              setItem(items.concat(newItem))
        textf.value = "";
        }
        e.preventDefault();
    }
    function handleLogout(){
        // localStorage.setItem('islogout' ,true);
        localStorage.removeItem('isloggedin')
        let auth=localStorage.getItem('islogout')
        setLogoutStatus(auth)
    }
        return(
            <Fragment>
            {localStorage.getItem('isloggedin') ? <Redirect to='/todo' /> : <Redirect to='/' /> }
            <div className="todoListMain">
                <div className="header">
                    <form>
                    <input placeholder="enter item here" ref={(input)=>{textf=input}}/>
                    <button type="submit"  onClick={handleClick}>ADD</button>
                    <button type="danger" onClick={handleLogout}>Logout</button>
                    <Todo list={items}/>
                    
                    </form>
                </div>
            </div>
            </Fragment>
        )
    }

export default Todolist;