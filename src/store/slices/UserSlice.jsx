import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name : "user",
    initialState : [],
    reducers : {
       addUser(state, action) {
          state.push(action.payload)  // The Array.push method mutates(modifies ) the original array. It adds elements to the end of the array and returns the new length of the array.
          console.log(action.payload)
         },
       removeUser(state,action) {
          console.log("hii", action.payload)
         //  let userIndexNum = state.indexOf(action.payload)
         //  state.splice(userIndexNum, 1)
         state.splice(action.payload, 1)
       },
       clearAllUsers(state, action) {
          return 
            []
       }
    }
})

export default UserSlice.reducer
export  const {addUser, removeUser, clearAllUsers} =UserSlice.actions;