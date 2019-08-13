import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Pelicula = ({ pelicula }) => {
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={pelicula.image} />
                <Card.Body>
                    <Card.Title> <h3>Título: {pelicula.title}</h3> </Card.Title>
                    <Card.Text>
                        <p>Año: {pelicula.year}</p>
                        <p>Genero:</p>
                        <p>Director: {pelicula.director}</p>
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Pelicula


