import React from 'react'
import "./box.css"
import { MdOutlineStart } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Box = ({item}) => {
    const navigate = useNavigate();

// console.log(item.images[0]);

    
  return (
    <div className='box'>
        <div className="img">
            <img src={item.images[0]} alt="" />
        </div>
        <div className="box-body">
            <h3>{item.title}</h3>
            <p>Price <span>{item.price}$</span></p>
            <button onClick={() => navigate(`/detail/${item.id}`) }>Etrafli melumat ucun klikleyin <MdOutlineStart/></button>
        </div>
    </div>
  )
}

export default Box
