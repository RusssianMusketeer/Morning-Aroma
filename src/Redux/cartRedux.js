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
                number.quantity =action.payload.value;
                number.total = number.quantity * number.price;
                state.total = state.products.reduce((total, item) => total + item.total,0);
                
            }
            
        },
        removeProduct:(state,action)=>{
            
            const number = state.products[action.payload];

            if(number){
                state.products.splice(number, 1);
                state.total = state.products.reduce((total, item) => total + item.total,0);
                state.quantity -= 1;
            }
        }
    },
});

export const {addProduct,modifyProduct,removeProduct} =cartSlice.actions;
export default cartSlice.reducer;