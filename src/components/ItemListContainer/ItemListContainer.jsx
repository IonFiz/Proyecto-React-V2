import React, {useState,useEffect} from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Title from '../Title/Title';

const films = [
    {id: 1, image: "http://gluckrental.com/img/product/xone92.jpg", title: "mixer pioneer"},
    {id: 2, image: "http://gluckrental.com/img/product/nexus2000_2.jpg", title: "cdj pioneer"},
    {id: 3, image: "http://gluckrental.com/img/product/sl1200mk3.jpg", title: "technics turntable "},
];

export const ItemListContainer = ({texto}) => {
    const [data, SetData] = useState([]);

    useEffect (() => {
        const getData = new Promise(resolve =>{
            setTimeout(() => {
                resolve(films);
            },3000);
        });
        getData.then(res => SetData(res));
    },[])

    const onAdd = (quantity) =>{
        console.log(`Compraste ${quantity} unidades`);
    }
    
    return (
        <>
        <Title greeting={texto} />
        <ItemCount initial={1} stock={5} onAdd={onAdd} />
        <ItemList data={data} />
        </>
    );
}

export default ItemListContainer;


