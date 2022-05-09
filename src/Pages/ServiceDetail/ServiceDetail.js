import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/service/${serviceId}`;
    fetch(url)
      .then(res => res.json())
      .then(data => setService(data));
  }, [serviceId]);
  return (
    <div className="mt-5 d-flex justify-content-center">
      <div className="card text-center" style={{ width: '18rem' }}>
        <div className="overflow">
          <img src={service.img} className="card-img-top" alt="..." />
        </div>
        <div className="card-body">
          <h3 className="card-title">{service.name}</h3>
          <h5>Available Quantity: {service.quantity}</h5>
          <h5>Price: {service.price}BDT</h5>
          <h6>Supplier Name: {service.supplier}</h6>
          <p className="card-text">{service.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
