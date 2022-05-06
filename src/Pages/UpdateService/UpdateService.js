import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from "react-hook-form";

const UpdateService = () => {
    const { id } = useParams();
    const { register, handleSubmit } = useForm();

    const [service, setService] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/service/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    const onSubmit = data => {
        console.log(data);
        //send data to the server...
        //search mdn fetch post
        //sending data
        const url = `http://localhost:5000/service/${id}`;
        fetch(url, {
            //PUT for updating...
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                alert('Service updated successfully!!!');
                // data.target.reset();
            })
    };
    return (
        <div className='w-50 mx-auto'>
            <h3 className='mt-4'>Update service: {service.name}</h3>
            <form className='d-flex flex-column mb-5' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name", { required: true, maxLength: 80 })} />
                <textarea className='mb-2' placeholder='Description' {...register("description", { required: true, maxLength: 200 })} />
                <input className='mb-2' placeholder='Price' type="number" {...register("price", { required: true, maxLength: 80 })} />
                <input className='mb-2' placeholder='Photo URL' type="text" {...register("img", { required: true, maxLength: 80 })} />
                <input className='w-25 mt-3 bg-primary rounded border-0 p-2 text-white mx-auto' type="submit" value="Update Service" />
            </form>
        </div>
    );
};

export default UpdateService;