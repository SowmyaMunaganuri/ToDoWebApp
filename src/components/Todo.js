import React, { Fragment } from 'react';
import Item from './Item'
class Todo extends React.Component{
    
    handleDelete=itemid=>{
        var newitems=this.props.list.filter(item=>item.key!==itemid);
        this.props.callback(newitems)
    }
    render(){
        return(
            <Fragment>
                {
                    this.props.list.map(item=>(
                        <Item 
                        key={item.key}
                        value={item.text}
                        handleDelete={this.handleDelete}
                        id={item.key}
                        />
                    ))
                }
                </Fragment>
        )
    }
}

export default Todo;