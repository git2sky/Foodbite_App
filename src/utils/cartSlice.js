import { createSlice, current } from "@reduxjs/toolkit";

//making cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
  // add item is dispatch method mapped to the arrow reducer function 
    addItem: (state, action) => {
      // Redux Toolkit uses immer library to return immutable BTS
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

// cartSlice = {
//   actions : [addItem , removeItem ,clearCart],
//   reducer : [()=>{} , ......]
// }

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;




