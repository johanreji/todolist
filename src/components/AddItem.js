import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../actions';


 class AddItem extends React.Component{
     constructor(props){
         super(props);
         this.inputRef=React.createRef();
         this.show=this.show.bind(this);
     }
     show(e){
        e.preventDefault();
        this.props.addItem(this.inputRef.current.value);

        this.inputRef.current.value='';
        
     }
     render(){
return(
    <div>
        <form onSubmit={this.show}>
            <div className="ui inverted input small">
            <input ref={this.inputRef}  placeholder="Add item" />
            </div>
        
        <button className="ui primary button right floated inverted mini" >Submit</button>
        </form>
    </div>
);
     }


}


export default connect(null,{addItem:addItem})(AddItem);
