import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [products, setProducts] = useState();

    useEffect(() => {
        const promesa = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id: 'mouse_7B', title: 'Gaming Mouse', description: '7 button gaming mouse', regularPrice: '220', picture1Url: ''},
                    {id: 'mousepad_RGB', title: 'Gaming MousePad RGB', description: 'RGB large mousepad', regularPrice: '700', picture1Url: ''},
                    {id: 'desk_47.2i', title: 'Gaming Desk 47.2 inches', description: 'Black table', regularPrice: '5000', picture1Url: ''},
                ]);
            }, 2000);
        });

        promesa
            .then((result) => {
                setProducts(result);
            });
    },[])

    console.log(products)

    return (
        <>
            <ItemList productos={products} />
        </ >
    );
}

export default ItemListContainer