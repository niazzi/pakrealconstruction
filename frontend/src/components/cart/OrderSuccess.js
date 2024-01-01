// import React from 'react'


// export const OrderSuccess = () => {
//   return (
//     <div className="container container-fluid">
//         <div className="row justify-content-center">
//             <div className="col-6 mt-5 text-center">
//                 <img className="my-5 img-fluid d-block mx-auto" src="https://freepngimg.com/thumb/success/6-2-success-png-image.png" alt="Order Success" width="200" height="200" />

//                 <h2>Your Order has been placed successfully.</h2>

//                 <a href="/orders/me">Go to Orders</a>
//             </div>

//         </div>
//     </div>
//   )
// }


import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import MetaData from '../layout/MetaData'

const OrderSuccess = () => {
    return (
        <Fragment>

            <MetaData title={'Order Success'} />

            <div className="row justify-content-center">
                <div className="col-6 mt-5 text-center">
                    <img className="my-5 img-fluid d-block mx-auto" src="/images/order_success.png" alt="Order Success" width="200" height="200" />

                    <h2>Your Order has been placed successfully.</h2>

                    <Link to="/">Go to Orders</Link>
                </div>

            </div>

        </Fragment>
    )
}

export default OrderSuccess