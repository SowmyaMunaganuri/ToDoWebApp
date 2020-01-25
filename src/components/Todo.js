import React from 'react';

class Todo extends React.Component{
    selectitem(i){
    return (
        <li key={i.key}>{i.text}</li>
    )
    }
    render(){
        var todoitems=this.props.list;
        var listitems=todoitems.map(this.selectitem);
        return(
            <div>
            <ul className="theList">
                {listitems}
            </ul>

            </div>
        )
    }
}

export default Todo;