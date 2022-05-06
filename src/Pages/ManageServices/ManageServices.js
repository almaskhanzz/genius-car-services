import React from 'react';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/UseServices';

const ManageServices = () => {
    const [services, setServices] = useServices();
    const handleDelete = id => {
        //to confirm whether user wants to delete or not..
        const proceed = window.confirm('Are you sure! You want to delete?');
        if (proceed) {
            // console.log('deleted the user with id:', id);
            //need to give dynamic id in url to recognize the element in backend
            const url = `http://localhost:5000/service/${id}`;
            fetch(url, {
                method: 'Delete'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted successfully');
                        const remainingServices = services.filter(service => service._id !== id);
                        setServices(remainingServices);
                    }
                })
        }
    }
    return (
        <div className='w-50 mx-auto'>
            <h1>Manage Your Services..</h1>
            {
                services.map(service => <div key={service._id}>
                    <h5>{service.name} <Link to={`/manage/update/${service._id}`}><button>update</button></Link> <button onClick={() => handleDelete(service._id)}>X</button></h5>
                </div>)
            }
        </div>
    );
};

export default ManageServices;