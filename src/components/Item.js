import React from 'react';

class Item extends React.Component{
    render(){
        return(
            <div>
                {this.props.value}
                <button
                type="submit"
                onClick={()=>this.props.handleDelete(this.props.id)}>
                    Delete
                </button>
                <button 
                type="submit">
                    Update
                </button>
            </div>
        )
    }
}

export default Item;