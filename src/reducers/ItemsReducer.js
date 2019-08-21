
export default (items=[],action) =>{
  

    switch(action.type){
        case "ADD_ITEM" : return [...items,action.payload];

        case "DELETE_ITEM" : return items.filter((item)=>item===action.payload?null:item);

        default : return items;
    }
   
}

