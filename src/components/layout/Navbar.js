import React, { Component } from 'react'


class Navbar extends Component {
    render () {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid"></div>
                    <a class="navbar-brand" href="#">Cassie's Pokedex</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" 
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

            </nav>
                
            
        )
    }
}

export default Navbar

