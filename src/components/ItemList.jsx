import React from 'react';
import Item from './Item';
import 'bulma/css/bulma.css';
import { Container } from 'react-bulma-components';


const ItemList = ({ productos }) => {
    return (
        <>
            <Container>
                {productos.map(product => <Item key={product.id} product={product} />)}
            </Container>
        </ >
    )
}

export default ItemList
