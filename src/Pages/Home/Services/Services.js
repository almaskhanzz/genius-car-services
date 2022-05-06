import React, { useEffect, useState } from 'react';
// import useServices from '../../../hooks/UseServices';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    //hooks
    // const [services] = useServices();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className='services-container'>
            <h1>Our Services</h1>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;