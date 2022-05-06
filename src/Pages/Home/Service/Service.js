import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { _id, name, price, description, img } = service;
    const navigate = useNavigate();
    const handleServiceDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service-container'>
            <div className='service'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h5>{price}</h5>
                <p>{description}</p>
            </div>
            <div className='btn'>
                <button onClick={() => handleServiceDetails(_id)}>Book {name}</button>
            </div>
        </div>
    );
};

export default Service;