import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import { useForm } from 'react-hook-form';


const OrderDetails = () => {

    const [detail, setDetail] = useState([]);

    useEffect(() => {
        fetch('https://glacial-anchorage-30312.herokuapp.com/orderDetails')
            .then(res => res.json())
            .then(data => setDetail(data))

    }, [])


    const { id } = useParams();
    const fruit = detail.find(pd => pd._id === id)
    console.log(fruit);

    const { handleSubmit } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        // const savedCart = getDatabaseCart();
        const orderDetails = { ...loggedInUser, product: fruit, shipment: data, orderTime: new Date() };
        console.log(setLoggedInUser);

        fetch('https://glacial-anchorage-30312.herokuapp.com/addOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(orderDetails)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    // processOrder();
                    alert('Your Order Submitted Successfully.')
                }
            })

    };

    return (
        <div>
            <Header></Header>
           <div className="container">
           {
                detail.length === 0 &&
                <div style={{margin:'0 auto'}} class="spinner-border text-primary d-flex justify-content-center" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            }

            <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Fruit Name:</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>{fruit?.name}</td>
                            <td> 3 </td>
                            <td> {fruit?.price} </td>
                        </tr>
                    </tbody>
                    <tbody>
                        <tr>
                            <th scope="row"></th>
                            <td></td>
                            <td></td>
                            <td> <input className="btn btn-primary text-white" type="submit" /> </td>
                        </tr>
                    </tbody>
                </table>

            </form>
           </div>

        </div>
    );
};

export default OrderDetails;