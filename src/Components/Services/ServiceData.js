import React from 'react';
import wedding from '../../images/wedding-2.jpg';
import holud from '../../images/holud-2.jpg';
import event from '../../images/event-2.jpg';
import ServiceUI from './ServiceUI';

const ServiceData = () => {

    const serviceData = [
        {
            img:  wedding ,
            tittle: 'Wedding PhotoGraphy',
            price: '$500',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas laudantium ad sequi provident ea suscipit at dolorum animi placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas laudantium ad sequi provident ea suscipit at dolorum animi placeat?'
        },
        {
            img:  holud ,
            tittle: 'HoludSondha PhotoGraphy',
            price: '$500',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas laudantium ad sequi provident ea suscipit at dolorum animi placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas laudantium ad sequi provident ea suscipit at dolorum animi placeat?'
        },
        {
            img:  event ,
            tittle: 'Event PhotoGraphy',
            price: '$500',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas laudantium ad sequi provident ea suscipit at dolorum animi placeat?Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus voluptas laudantium ad sequi provident ea suscipit at dolorum animi placeat?'
        }
    ]

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <div className="w-100 row p-3">
                    {
                        serviceData.map(service => <ServiceUI service={service}></ServiceUI>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceData;