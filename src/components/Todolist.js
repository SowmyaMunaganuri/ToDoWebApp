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
    }
    function handleLogout(e){
        e.preventDefault()
        localStorage.setItem('isloggedout' ,true)
        setLogoutStatus(localStorage.getItem('isloggedout'))
        localStorage.setItem('isloggedout' ,false)
    }
    function callback(newlist){
        setItem(newlist)
        console.log(items)
    }
    console.log(items)
        return(
            <Fragment>
            {isloggedout ? <Redirect to='/' /> : <Redirect to='/todo' /> }
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