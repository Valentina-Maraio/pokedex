import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import loadPokemon from '../store/pokemon'
import { useEffect } from 'react'

const Pokemon = () => {
    const dispatch = useDispatch()
    const pokemons = useSelector((state) => state.list);

    useEffect(() => {
        dispatch(loadPokemon());
    }, [dispatch]);

    return (
        <div>
            <h2>Pokeomn List</h2>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.results}>
                        {pokemon.results.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Pokemon;