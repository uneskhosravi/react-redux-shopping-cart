const addItem=product=>{
    return{
        type:"ADD_ITEM",
        payload:product
    }

}
const removeItem=product=>{
    return{
        type:"REMOVE_ITEM",
        payload:product
    }

}
const increase=product=>{
    return{
        type:"INCREASE",
        payload:product
    }

}
const decrease=product=>{
    return{
        type:"DECREASE",
        payload:product
    }

}
const checkOut=()=>{
    return{
        type:"CHECKOUT",
        
    }

}
const clear=product=>{
    return{
        type:"CLEAR",
        
    }

}
export {addItem,removeItem,decrease,increase,checkOut,clear}