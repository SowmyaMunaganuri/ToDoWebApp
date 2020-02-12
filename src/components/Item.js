import React, { Fragment,useState } from 'react';

const Item =(props)=>{
    const[isenabled,setEnable]=useState(false)
    const[newvalue,setNewvalue]=useState('')
    const onChange= e =>setNewvalue(e.target.value);
    function handleClick(e){
        localStorage.setItem('isenabled',true)
        setEnable(localStorage.getItem('isenabled'))
        e.preventDefault();
    }   
    function onDelete(e){
        e.preventDefault();
        props.handleDelete(props.id)
    }
    function onUpdate(e){
        e.preventDefault();
        props.handleUpdate(props.id,newvalue)
        setEnable(false)
    }
    console.log(isenabled)
    console.log(newvalue)
        return(
            <Fragment>
                <div>
                    {isenabled?
                    <input
                    type="text" 
                    value={newvalue}
                    onChange={(e)=>onChange(e)}/> :
                    <input 
                    readOnly
                    type="text"
                    value={props.value}/>
                 }
                    
                <input
                type="submit"
                onClick={(e)=>onDelete(e)}
                value='Delete' />
                {
                    isenabled? 
                    <input 
                type="submit"
                onClick={(e)=>onUpdate(e)}
                value='Save'/> 
                    :
                    <input 
                type="submit"
                value='Update'
                onClick={(e)=>handleClick(e)}/> 
                }
                
                </div>
                </Fragment>
        )
}

export default Item;