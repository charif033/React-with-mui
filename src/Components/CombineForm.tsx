import { Button } from '@mui/material';
import React from 'react';
import { useState } from "react"
import { useForm } from 'react-hook-form';

type order = {
    firstname: string,
    lastname: string,
    email: string,
    phone: number,
    address: string,
    city: string,
    state: string,
    postalcode: string,
    paymentMethod: string,
    paypalEmail: string,
    cardName: string,
    cardNumber: number,
    exDate: string,
    cvv: number
}

const CombineForm = () => {
    const { register, handleSubmit } = useForm<order>();
    const sendOrder = (data: any) => {
        console.log(JSON.stringify(data))
    }
    return (
        <>
            <form onSubmit={handleSubmit(sendOrder)}>
                <DeliveryForm></DeliveryForm>
                <PaymentForm></PaymentForm>
                <Button variant="contained" type="submit">Submit</Button>
            </form>
        </>
    )

    function DeliveryForm() {
        return (
            <>
                <div>
                    <h2>Delivery Address</h2>
                    <hr />
                </div>
                <div className='form'>
                    <div >
                        <label htmlFor="inputFname">First name</label><br />
                        <input type="text" id="inputFname" placeholder="Enter first name"
                            required {...register('firstname')} />
                    </div>
                    <div>
                        <label htmlFor="inputLname">Last name</label><br />
                        <input type="text" id="inputLname" placeholder="Enter last name"
                            required {...register('lastname')} />
                    </div>
                    <div>
                        <label htmlFor="inputEmail">Email</label><br />
                        <input type="email" id="inputEmail" placeholder="Enter E-mail"
                            required {...register('email')} />
                    </div>
                    <div>
                        <label htmlFor="inputPhone">Phone</label><br />
                        <input type="tel" id="inputPhone" placeholder="Enter phone number"
                            required {...register('phone')} />
                    </div>
                    <div>
                        <label htmlFor="inputAddress">Address</label><br />
                        <input type="text" id="inputAddress" placeholder="Enter address"
                            required {...register('address')} />
                    </div>
                    <div>
                        <label htmlFor="inputCity">City</label><br />
                        <input type="text" id="inputCity" placeholder="Enter city"
                            required {...register('city')} />
                    </div>
                    <div>
                        <label htmlFor="inputState">State</label><br />
                        <input type="text" id="inputState" placeholder="Enter state"
                            required {...register('state')} />
                    </div>
                    <div>
                        <label htmlFor="inputPostCode">Postal Code</label><br />
                        <input type="text" id="inputPostCode" placeholder="Enter postal code"
                            required {...register('postalcode')} />
                    </div>
                </div>

            </>
        )
    }

    function PaymentForm() {
        const [payment, setPayment] = useState<string>();
        const paymentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setPayment(event.target.value);
        };
        const PaymentMethod = () => {
            if (payment === 'creditCard') {
                return (
                    <>
                        <div>
                            <label htmlFor="cardNumber">Credit Card Number</label>
                            <input type="text" id="cardNumber"
                                placeholder="Enter credit card number" {...register('cardName')} />
                        </div>
                        <div>
                            <label htmlFor="cardName">Name on Card</label>
                            <input type="text" id="cardName" placeholder="Enter name on card" {...register('cardNumber')} />
                        </div>

                        <div>
                            <label htmlFor="expirationDate">Expiration Date</label>
                            <input type="text" id="expirationDate" placeholder="MM/YY" {...register('exDate')} />
                        </div>
                        <div>
                            <label htmlFor="cvv">CVV</label>
                            <input type="text" id="cvv" placeholder="Enter CVV" {...register('cvv')} />
                        </div>

                    </>
                )
            } else {
                return (
                    <div>
                        <label htmlFor="paypalEmail">PayPal Email</label>
                        <input type="email" id="paypalEmail"
                            placeholder="Enter PayPal email" {...register('paypalEmail')} />
                    </div>
                )
            }
        }

        return (
            <>
                <div>
                    <h2>Payment Method</h2>
                    <hr />
                </div>
                <div className='form'>
                    <div>
                        <label htmlFor="paymentMethod">Payment Method</label>
                        <select id="paymentMethod" {...register('paymentMethod')} required onChange={paymentChange} >
                            <option value="">Select a payment method</option>
                            <option value="creditCard">Credit Card</option>
                            <option value="paypal">PayPal</option>
                        </select>
                    </div>
                    <br />
                    <PaymentMethod></PaymentMethod>
                </div>


            </>
        )
    }
}

export default CombineForm