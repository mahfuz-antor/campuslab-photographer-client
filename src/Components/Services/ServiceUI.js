import React from 'react';

const ServiceUI = ({service}) => {
    console.log(service)
    return (
        <div style={{border : '2px solid red', width : '31%',height: '78%', marginTop : '50px', borderRadius : '10px'}} className="col-md-4 pt-3 container">
            <img className="rounded mx-auto" style={{width: '100%', height: '60%'}} src={service.img} alt="" />
            <h5 className="text-center"> {service.tittle} </h5>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum accusantium autem sed? Quisquam, praesentium possimus? Magni sunt saepe iste tempora.</p>
            <div class="d-flex justify-content-between">
                <button className="btn btn-primary">View More</button>
                <button className="btn btn-primary">Buy Now</button>
            </div>
            
        </div>
    );
};

export default ServiceUI;