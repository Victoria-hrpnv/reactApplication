import {configureStore} from "@reduxjs/toolkit";
import {reducer as favoritesReducer} from "./favorites/favorites.slice.js";


export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
    },

})

