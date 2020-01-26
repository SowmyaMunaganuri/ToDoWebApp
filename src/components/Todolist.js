import React, { Fragment,useState } from 'react';
import '../App.css'
import Todo from './Todo'
import {Redirect} from "react-router-dom"
const Todolist=()=>{
    const[isloggedout,setLogoutStatus]=useState(false)
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
        console.log(items)
    }
<<<<<<< HEAD
    function handleLogout(e){
        e.preventDefault()
        localStorage.setItem('isloggedout' ,true)
        setLogoutStatus(localStorage.getItem('isloggedout'))
        localStorage.setItem('isloggedout' ,false)
    }
    function callback(newlist){
        setItem(newlist)
    }
        return(
            <Fragment>
            {isloggedout ? <Redirect to='/' /> : <Redirect to='/todo' /> }
=======
    function handleLogout(){
        // localStorage.setItem('islogout' ,true);
        localStorage.removeItem('isloggedin')
        let auth=localStorage.getItem('islogout')
        setLogoutStatus(auth)
    }
        return(
            <Fragment>
            {localStorage.getItem('isloggedin') ? <Redirect to='/todo' /> : <Redirect to='/' /> }
>>>>>>> c8a7622054f2345edf2f22a80770e4e2b760ec75
            <div className="todoListMain">
                <div className="header">
                    <form>
                    <input placeholder="enter item here" ref={(input)=>{textf=input}}/>
                    <button type="submit"  onClick={handleClick}>ADD</button>
                    <button type="submit" onClick={handleLogout}>Logout</button>
                            <Todo list={items}
                            callback={callback}
                            />
                    </form>
                </div>
            </div>
            </Fragment>
        )
    }

export default Todolist;