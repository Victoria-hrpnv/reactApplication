import {createSlice} from "@reduxjs/toolkit";

const initialState = [];
export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState: initialState,
    reducers: {
        toggleFavorites: (state, action) => {
        const home = action.payload
             if (state.some (h => h.id === home.id)){
                const index = state.findIndex(h=> h.id === home.id)
                 state.splice(index, 1)
             } else {
                 state.push(home)
             }
        }
    }
})

export const {actions, reducer} = favoritesSlice