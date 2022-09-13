import React, {useState,useEffect} from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import Title from '../Title/Title';
import { useParams } from 'react-router-dom';

const films = [
    {id: 1, image: "http://gluckrental.com/img/product/xone92.jpg", category:"Mixers", title: "Xone 92"},
    {id: 2, image: "http://gluckrental.com/img/product/nexus2000_2.jpg", category:"CDJ", title: "Nexus 2000"},
    {id: 3, image: "http://gluckrental.com/img/product/sl1200mk3.jpg", category:"CDJ", title: "skt 1200"},
    {id: 4, image: "http://gluckrental.com/img/product/ev15ekx.jpg", category:"Parlantes", title: "Electrovoice EKX 15 "},
    {id: 5, image: "http://gluckrental.com/img/product/vantecpack.jpg", category:"Parlantes", title: "Das Vantec Combo "},
    {id: 6, image: "http://gluckrental.com/img/product/funktionone_revo2.jpg", category:"Parlantes", title: "Funktion-one Resolution 2"},
];

export const ItemListContainer = ({texto}) => {
    const [data, SetData] = useState([]);

    const { categoriaId } = useParams();

    useEffect (() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(films);
            },1000);
        });
        if(categoriaId){
            getData.then(res => SetData(res.filter(film => film.category === categoriaId)));
        } else {
            getData.then(res => SetData(res));
        }
        
    },[categoriaId])

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


