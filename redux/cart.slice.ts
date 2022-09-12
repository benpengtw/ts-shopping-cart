import { createSlice } from '@reduxjs/toolkit';
type Maybe<T> = T | undefined 
type item = {
  id: number,
  image:string,
  product:string,
  category:string,
  price:number
  quantity:number
}
const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    //Argument of type 'any' is not assignable to parameter of type 'never'. 
    // 外層 state 少 type
    addToCart: (state:any[], action) => {
      const itemExists:Maybe<item>  = state.find((item:item) => item.id === action.payload.id);
      // itemExists has value but TypeScript doesn't know
      if (itemExists) {
        //https://bobbyhadz.com/blog/typescript-property-does-not-exist-on-type-never
        itemExists['quantity']++;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    // item! 是用來斷言 item 一定不是 null 或 undefined
    incrementQuantity: (state, action) => {
      const item:Maybe<item>  = state.find((item:item) => item.id === action.payload);
      item!.quantity++;
    },
    decrementQuantity: (state, action) => {
      const item:Maybe<item> = state.find((item:item) => item.id === action.payload);
      if (item!.quantity === 1) {
        const index = state.findIndex((item:item) => item.id === action.payload);
        state.splice(index, 1);
      } else {
        item!.quantity--;
      }
    },
    removeFromCart: (state, action) => {
      const index = state.findIndex((item:item) => item.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const cartReducer = cartSlice.reducer;

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} = cartSlice.actions;
