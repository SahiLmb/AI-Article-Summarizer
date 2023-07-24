import { configureStore } from '@reduxjs/toolkit';


import { articleApi } from './article';

// store is a global state that saves the entire information  of our application
export const store = configureStore({
    // reducers are used to get only the required information.
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articleApi.middleware)

});