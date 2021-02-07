import React, { Component } from 'react'
import PokemonCard from "./PokemonCard.js"
import axios from 'axios';

class PokemonList extends Component {
    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?limit=900',
        pokemon: null,
    };

    /* async means this runs in the background, this makes it so that 
     the cards will stay loaded*/ 
    async componentDidMount(){
        const res = await  axios.get(this.state.url);
        // this.setState is better because of rendering
        this.setState({pokemon: res.data['results']});
    }
    render () {
        return (
            <React.Fragment>
            {this.state.pokemon ? 
            (<div className="row"> {this.state.pokemon.map(pokemon =>
             (<PokemonCard
               // must give each of these unique key, otherwise error will throw
               key={pokemon.name}
               name={pokemon.name}
               url={pokemon.url}
             />))}
            </div>) : (<h1>Loading Pokemon</h1>) }
            </React.Fragment>
            
        );
    }
}

export default PokemonList