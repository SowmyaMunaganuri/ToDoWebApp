import React,{ Fragment } from 'react'
import Item from './Item'
const Todo =(props)=>{
   function handleDelete(itemid){
        var newitems=props.list.filter(item=>item.key!==itemid);
        props.callback(newitems)
    }
   function handleUpdate(itemid,newvalue){
    var newitems=props.list.filter(item=>item.key!==itemid);
        var newItem={
            text:newvalue,
            key:itemid
        }
        var items=newitems.concat(newItem);
        props.callback(items)        
    }

    /*function handleUpdate(itemid,newvalue)
    {
        props.list.map(i=>
            { i.key===itemid ?
                i.text=newvalue
                :
                i.text=i.text
            }
        )
        var newitems=props.list;
            props.updatecall(newitems)
        }*/
      
        return(
            <Fragment>
                {
                    props.list.map(item=>(
                        <Item 
                        key={item.key}
                        value={item.text}
                        handleDelete={handleDelete}
                        handleUpdate={handleUpdate}
                        id={item.key}
                        />
                    ))
                }
                </Fragment>
        )
     }

export default Todo;