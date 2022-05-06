import { createSlice } from '@reduxjs/toolkit'

export const webPage = createSlice({
      name: 'web',
      initialState: {
      sideBar:['Header', 'Footer', 'Sidebar', 'Content',],
      name:'saranya',
      address:"Thiagarajar college Madurai-09."
  },
  reducers: {
    updateName: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log(action.payload);
       state.name = action.payload;
    },
  },
})


// Action creators are generated for each case reducer function
export const { updateName } = webPage.actions
export default webPage.reducer