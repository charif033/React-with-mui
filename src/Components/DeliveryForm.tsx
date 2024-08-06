function DeliveryForm() {
    return (
        <>
            <div>
                <h2>Delivery Address</h2>
                <hr />
            </div>
            <div>
                <form id="deliveryForm" >
                    <div >
                        <label htmlFor="inputFname">First name</label><br />
                        <input type="text" id="inputFname" placeholder="Enter first name"
                            required />
                    </div>
                    <div>
                        <label htmlFor="inputLname">Last name</label><br />
                        <input type="text" id="inputLname" placeholder="Enter last name"
                            required />
                    </div>
                    <div>
                        <label htmlFor="inputEmail">Email</label><br />
                        <input type="email" id="inputEmail" placeholder="Enter E-mail"
                            required />
                    </div>
                    <div>
                        <label htmlFor="inputPhone">Phone</label><br />
                        <input type="tel" id="inputPhone" placeholder="Enter phone number"
                            required />
                    </div>
                    <div>
                        <label htmlFor="inputAddress">Address</label><br />
                        <input type="text" id="inputAddress" placeholder="Enter address"
                            required />
                    </div>
                    <div>
                        <label htmlFor="inputCity">City</label><br />
                        <input type="text" id="inputCity" placeholder="Enter city" required />
                    </div>
                    <div>
                        <label htmlFor="inputState">State</label><br />
                        <input type="text" id="inputState" placeholder="Enter state" required />
                    </div>
                    <div>
                        <label htmlFor="inputPostCode">Postal Code</label><br />
                        <input type="text" id="inputPostCode" placeholder="Enter postal code"
                            required />
                    </div>
                </form>
            </div>
        </>
    )
}

export default DeliveryForm