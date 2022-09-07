import ItemDetail from '../ItemDetail/ItemDetail';
import React, { useState, useEffect } from 'react';

const films = {id: 1, image: "http://gluckrental.com/img/product/xone92.jpg", title: "mixer pioneer"};


export const ItemDetailContainer = () => {
    const [data, SetData] = useState({});
    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            }, 3000);
        });
        getData.then(res => SetData(res));
    },[])

  return (
    <ItemDetail data={data} />
  );
}
 export default ItemDetailContainer;