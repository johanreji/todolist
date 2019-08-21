import React from 'react';
import {connect} from 'react-redux';
import {deleteItem} from '../actions';


class ListItem extends React.Component{
    render(){
    return (
    <div className="item">
        <div className="content">
        {this.props.item} 
        <button className="ui primary button right floated inverted mini" onClick={()=>this.props.deleteItem(this.props.item)}>
            Done
        </button>
        </div>
       
        
    </div>);
    }
}

export default connect(null,{deleteItem:deleteItem})(ListItem);