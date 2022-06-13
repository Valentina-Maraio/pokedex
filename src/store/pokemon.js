import { createSlice } from '@reduxjs/toolkit'
import { apiCallStart } from './api'

const slice = createSlice({
    name: 'pokemons',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        pokemonRequested: (pokemons) => { pokemons.loading = true},
        pokemonReceived: (pokemons, action) => {
            pokemons.list = action.payload
            pokemons.loading = false
        },
        pokemonRequestFailed: (pokemons) => {pokemons.loading = false}
    }
})

export default slice.reducer;

const {
    pokemonReceived,
    pokemonRequestFailed,
    pokemonRequested,
} = slice.actions;

const url = "/pokemon";

export const loadPokemon = () => (dispatch) => {
    return dispatch(
        apiCallStart({
            url,
            onStart: pokemonRequested.type,
            onSuccess: pokemonReceived.type,
            onError: pokemonRequestFailed
    }))
}