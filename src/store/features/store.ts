import { configureStore } from '@reduxjs/toolkit'
import { PersonSlice } from './personSlice';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';  // This is the hook that allows us to dispatch actions

export const store = configureStore({
    reducer: {
        person: PersonSlice.reducer,
    }
})

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: 
     TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;