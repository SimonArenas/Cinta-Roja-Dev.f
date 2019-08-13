import React, { Component } from 'react'
import Pelicula from './Pelicula'
import axios from 'axios'
import Swal from 'sweetalert2'



export class ListaPeliculas extends Component {

    state = {
        peliculas: [
        //   {movieId: "111", 
        //   title: "Matrix", 
        //   year: "2012",
        //   description: "Experto en Informatica Descubre Matrix", 
        //   image: "http://images.coveralia.com/audio/b/BSO_The_Matrix--Frontal.jpg", theme: "accion", 
        //   director: "Wachowsky"},
        //   {movieId: "222", title: "Matrix 2", year: "2013", description: "Experto en Informatica Descubre Matrix", image: "https://i.ytimg.com/vi/OM0tSTEQCQA/maxresdefault.jpg",
        //   theme: "accion", director: "Hermanas Wachowsk"},
        //   {movieId: "333", title: "Matrix3", year: "2012", description: "Experto en Informatica Descubre Matrix", image: "https://vignette.wikia.nocookie.net/matrix/images/d/df/Thematrixincode99.jpg", theme: "accion", director: "Hermanas Wachowsk"},
        ]
    }

componentDidMount(){
    console.log('DidMount');
}

componentDidUpdate(){
    console.log('DidUpdate');
}
    componentWillMount(){
    axios.get("https://cinta-roja-32-2.herokuapp.com/api/v1/pelicula")
    .then(peliculas=>{
        Swal("Correcto");
        console.log("Petición");
        console.log(peliculas);
        this.setState({
            peliculas: peliculas.data
        });
    })
    .catch(err=>console.log(err))
}

    
    render() {
        console.log("Render")
        return (
            <div>
                <h1>Lista de Películas</h1>
              

                {this.state.peliculas.map(pelicula=>(
                    <Pelicula
                    key={pelicula.movieId}
                    pelicula={pelicula}/>

                ))}

                
                
            </div>
        )
    }
}

export default ListaPeliculas;
