import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart ", 
    initialState:{
        items:[],
 
    },
    reducers:{
        addItem: (state, action ) => {
            state.items.push(action.payload);
        },
        recoveItem:(state) => {
             state.items.pop();
        },
        clearCart:(state) =>{
            state.items.length=0;
        },
    },
});
export default  cartSlice.reducer;
export const {addItem, recoveItem, clearCart} = cartSlice.actions;