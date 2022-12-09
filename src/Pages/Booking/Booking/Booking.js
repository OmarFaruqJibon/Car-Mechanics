import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    const { serviceId } = useParams();


    const [service, setService] = useState([]);
    const url = `http://localhost:5000/services/${serviceId}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));
    }, []);

    return (
        <div>
            <h2>this is booking: {serviceId}</h2>
            <div className="service pb-3">
            <img className="w-50" src={service.img} alt="" />
            <h3>Name: {service.name}</h3>
            <h5>Price: {service.price}</h5>
            <p className="px-3">{service.description}</p>
        </div>
        </div>
    );
};

export default Booking;