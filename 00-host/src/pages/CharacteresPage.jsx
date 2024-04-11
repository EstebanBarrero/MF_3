import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useFetchPhotos } from '../hooks/UseFetchPhotos';
import '../pages/styles/CardStyled.css';

const CharacteresPage = () => {
    const { photos } = useFetchPhotos();
    console.log(!photos);

    // Verificar si hay fotos disponibles y si la lista de fotos es un array no vacío
    if (!photos || !Array.isArray(photos.colors) || photos.colors.length === 0) {
        return <div>No hay colores disponibles.</div>;
    }

    return (
        <div className="card-container">
            {photos.colors.map((color, index) => (
                <CardItem key={index} color={color} />
            ))}
        </div>
    );
};

const CardItem = ({ color }) => {
    // Extraer la información del color
    const { hex, name, rgb } = color;

    // Convertir el valor RGB en una cadena de estilo válida para CSS
    const rgbString = `rgb(${rgb})`;

    return (
        <Card style={{ width: '18rem', margin: '10px', backgroundColor: rgbString }}>
            <Card.Body style={{ color: 'white' }}>
                <Card.Title>{name}</Card.Title>
                <Button variant="primary">Ver más</Button>
            </Card.Body>
        </Card>
    );
}

export default CharacteresPage;