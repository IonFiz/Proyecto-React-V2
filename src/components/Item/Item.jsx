import './style.css';

import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import { CartContext } from '../../App';

const Item = ({info}) => {

  const nombre = useContext(CartContext);
    return (
      <Link to={`/detalle/${info.id}`} className="film">
          <img src={info.image} alt="" />
          <p>{info.title}</p>
      </Link>
    );
  }


export default Item;
