import { createSlice } from "@reduxjs/toolkit";
import { current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        products:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addProduct:(state, action) => {
            state.quantity += 1;
            state.products.push(action.payload.product);
            state.total = state.products.reduce((total, item) => total + item.total,0);
        },
        modifyProduct:(state,action) => {
            
            const number = state.products[action.payload.name];
            
            if(number){
                number.quantity =action.payload.value
                number.total = number.quantity * number.price
                state.total = state.products.reduce((total, item) => total + item.total,0);
                
            }
        

            
        }
    },
});

export const {addProduct,modifyProduct} =cartSlice.actions;
export default cartSlice.reducer;