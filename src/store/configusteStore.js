import { configureStore } from '@reduxjs/toolkit'
import reducer from './pokemon'
import pokeapi from './middleware/pokeapi'

export default function store() {
    return configureStore({
        reducer,
        middleware: (getDefaultMiddlewareHook) => [...getDefaultMiddlewareHook(), pokeapi]
    })
}