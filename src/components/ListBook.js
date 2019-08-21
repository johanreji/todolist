import React from 'react';
import {connect} from 'react-redux';
import ListItem from './ListItem';
import AddItem from './AddItem';
class ListBook extends  React.Component{
renderItems(){
    return this.props.items.map((item)=>{
    
    return  <ListItem item={item} />;
    }
        
    );
}


render(){

return(
    <div className="eight column wide">
        <div className="ui inverted segment">
        <h3 className="ui center aligned header">To Do List</h3>
        <div className="ui inverted divided relaxed list">
            {this.renderItems()}
            
        </div>
        <div>
            <AddItem />
        </div>
        </div>


    </div>
);
}
}

const mapStateToProps=(state)=>{
return {items:state.items};
}

export default connect(mapStateToProps)(ListBook);