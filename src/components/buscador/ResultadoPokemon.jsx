import React from 'react';
import { useSelector } from 'react-redux';
import s from './ResultadoPokemon.module.css';

const ResultadoPokemon = () => {

    const buscador = useSelector((state) => state.buscador);
    let pokemonLength = buscador.pokemon.length
    let nombrePokemon = buscador?.pokemon[0]?.name
    
    function mayus(str) {
        if (nombrePokemon === undefined) {
            return (
                <span className='text-danger'></span>
            );
        }
        if (nombrePokemon.length !== 0) {
            console.log(nombrePokemon)
            return str[0]?.toUpperCase() + str.slice(1)
        } else {
            return nombrePokemon;
        }
    }
    let link = buscador?.pokemon[0]?.sprites.other['official-artwork'].front_default;
    console.log(link)
    console.log('buscador ', buscador)
    return (
        <div>
            <h3 className="text-white">Resultado: </h3>
            {buscador.loading && <div className="text-warning">Buscando...</div>}
            {
                pokemonLength = 1 &&
                <div className='text-success'>
                    <img className={s.pokeImg} style={{minWidth: '200px'}} src={link} alt={buscador?.pokemon[0]?.name} />
                    <span style={{fontSize: '30px'}}>{mayus(nombrePokemon)}</span>
                </div>
            }
            {buscador.error !== '' && <span className='text-danger'>Tu pokemon no fue encontrado</span>}
        </div>
    );
}

export default ResultadoPokemon;

