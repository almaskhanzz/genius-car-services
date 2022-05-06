import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])
    const navigate = useNavigate();
    const navigateCheckout = serviceId => {
        navigate(`/checkout/${serviceId}`);
    }
    return (
        <div className='text-center my-4'>
            <h1>Details of service:</h1>
            <h2>Name: {service.name}</h2>
            <h3>Price: {service.price}</h3>
            <p>Description: {service.description}</p>
            <Button onClick={() => navigateCheckout(serviceId)}>Proceed</Button>
        </div>
    );
};

export default ServiceDetails;