import React, { Component } from 'react'
import axios from 'axios'
import { Card } from '../../Card/Card';


export class MainContainer extends Component {

state ={
    name:"",
    pokemons:[]
}

findPokemon(){
    const name = this.state.name;
    axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
        .then(pokemon=> console.log(pokemon))
        .catch(err=> console.log(err))
}

handleChange(event){
    console.log(event.target.value);
    this.setState({name:event.target.value});
}

componentDidMount(){
   this.findPokemon("pikachu");
}

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange.bind(this)}/>
                <button type="button" onClick={this.findPokemon} className="btn btn-primary">Buscar</button>

                <div className="container">
                    <Card/>
                </div>
            </div>
        )
    }
}

export default MainContainer
