import React, { Component } from 'react';

class PokemonCard extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: ''

    }

    componentDidMount(){
        const {name, url} = this.props;
        // alternative way of typing
        // const name = this.props.name;
        // const url = this.props.url;
        const pokemonIndex= url.split("/")[url.split('/').length -2];
        const imageurl = `https://github.com/PokeAPI/sprits/blob/master/sprites.pokemon/${pokemonIndex}.png?raw=true` 
        
        this.setState({
            name, 
            imageurl, 
            pokemonIndex, 
        });
            
    }
    render () {
   

        return (
            <div className="col-med-3 col-sm-6 mb-5">
                <div className="card"> 
                    <h5 className="card-header" > #{this.state.pokemonIndex}</h5>
                    <h3 className="card-body mx-auto">{this.state.name.toLowerCase().split(" ").map(letter => letter.charAt(0).toUpperCase = letter.substring(1).join('')) }</h3>
                               
                </div>
                
            </div>
        )
    }
}

export default PokemonCard