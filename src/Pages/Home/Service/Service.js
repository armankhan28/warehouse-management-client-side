import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css'
const Service = ({service}) => {
    const {_id,name, price, img, quantity, supplier, description} = service;
    const navigate = useNavigate();
    const navigateServiceDetail = id =>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card text-center" style={{ width: '18rem' }}>
          <div className='overflow'><img src={img} className="card-img-top" alt="..." /></div>
          <div className="card-body">
            <h3 className="card-title">{name}</h3>
            <h5>Available Quantity: {quantity}</h5>
            <h5>Price: {price}BDT</h5>
            <h6>Supplier Name: {supplier}</h6>
            <p className="card-text">{description}</p>
            <Link to='/update'>
            </Link>
            <button onClick={() => navigateServiceDetail(_id)} className='btn btn-outline-danger'>Update</button>
            
          </div>
        </div>
        </div>
      );
    };

export default Service;