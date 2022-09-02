import React from 'react';
import 'bulma/css/bulma.css';
import { Button, Card, Content, Heading  } from 'react-bulma-components';

const Item = ({ product }) => {
    const { title, regularPrice, picture1Url } = product

    return (
        <Card style={{ width: 300, margin: '25px' }}>
            <Card.Image
                size="4by3"
                src="http://bulma.io/images/placeholders/1280x960.png"
                href="#"
            />
            <Card.Content>
                <Heading size={4}>{title}</Heading>
                <Content>
                    $ {regularPrice}.00
                    <Button color="info">Agregar al Carrito</Button>
                </Content>
            </Card.Content>
        </Card>
    );
}

export default Item