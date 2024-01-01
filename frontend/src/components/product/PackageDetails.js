// import React, { Fragment, useState, useEffect } from 'react'
// import { Carousel } from 'react-bootstrap'

// import Loader from '../layout/Loader'
// import MetaData from '../layout/MetaData'
// import ListReviews from '../review/ListReviews'

// import { useAlert } from 'react-alert'
// import { useDispatch, useSelector } from 'react-redux'
// import { getPackDetails, newReview, clearErrors } from '../../actions/packageActions'
// import { addItemToCart } from '../../actions/cartActions'
// import { NEW_REVIEW_RESET } from '../../constants/packageConstants'

// const PackageDetails = ({ match }) => {

//     const [quantity, setQuantity] = useState(1)
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState('');

//     const dispatch = useDispatch();
//     const alert = useAlert();

//     const { loading, error, pack } = useSelector(state => state.packDetails)
//     const { user } = useSelector(state => state.auth)
//     const { error: reviewError, success } = useSelector(state => state.newReview)

//     useEffect(() => {
//         dispatch(getPackDetails(match.params.id))

//         if (error) {
//             alert.error(error);
//             dispatch(clearErrors())
//         }

//         if (reviewError) {
//             alert.error(reviewError);
//             dispatch(clearErrors())
//         }

//         if (success) {
//             alert.success('Reivew posted successfully')
//             dispatch({ type: NEW_REVIEW_RESET })
//         }

//     }, [dispatch, alert, error, reviewError, match.params.id, success])

//     const addToCart = () => {
//         dispatch(addItemToCart(match.params.id, quantity));
//         alert.success('Item Added to Cart')
//     }

//     const increaseQty = () => {
//         const count = document.querySelector('.count')

//         if (count.valueAsNumber >= pack.stock) return;

//         const qty = count.valueAsNumber + 1;
//         setQuantity(qty)
//     }

//     const decreaseQty = () => {

//         const count = document.querySelector('.count')

//         if (count.valueAsNumber <= 1) return;

//         const qty = count.valueAsNumber - 1;
//         setQuantity(qty)

//     }

//     function setUserRatings() {
//         const stars = document.querySelectorAll('.star');

//         stars.forEach((star, index) => {
//             star.starValue = index + 1;

//             ['click', 'mouseover', 'mouseout'].forEach(function (e) {
//                 star.addEventListener(e, showRatings);
//             })
//         })

//         function showRatings(e) {
//             stars.forEach((star, index) => {
//                 if (e.type === 'click') {
//                     if (index < this.starValue) {
//                         star.classList.add('orange');

//                         setRating(this.starValue)
//                     } else {
//                         star.classList.remove('orange')
//                     }
//                 }

//                 if (e.type === 'mouseover') {
//                     if (index < this.starValue) {
//                         star.classList.add('yellow');
//                     } else {
//                         star.classList.remove('yellow')
//                     }
//                 }

//                 if (e.type === 'mouseout') {
//                     star.classList.remove('yellow')
//                 }
//             })
//         }
//     }

//     const reviewHandler = () => {
//         const formData = new FormData();

//         formData.set('rating', rating);
//         formData.set('comment', comment);
//         formData.set('packId', match.params.id);

//         dispatch(newReview(formData));
//     }

//     return (
//         <Fragment>
//             {loading ? <Loader /> : (
//                 <Fragment>
//                     <MetaData title={pack.numberofmarla} />
//                     <div className="row d-flex justify-content-around">
//                         <div className="col-12 col-lg-5 img-fluid" id="product_image">
//                             <Carousel pause='hover'>
//                                 {pack.images && pack.images.map(image => (
//                                     <Carousel.Item key={image.public_id}>
//                                         <img className="d-block w-100" src={image.url} alt={pack.title} />
//                                     </Carousel.Item>
//                                 ))}
//                             </Carousel>
//                         </div>

//                         <div className="col-12 col-lg-5 mt-5">
//                             <h3>{pack.numberofmarla}</h3>
//                             <p id="product_id">Package # {pack._id}</p>

//                             <hr />

//                             <div className="rating-outer">
//                                 <div className="rating-inner" style={{ width: `${(pack.ratings / 5) * 100}%` }}></div>
//                             </div>
//                             <span id="no_of_reviews">({pack.numOfReviews} Reviews)</span>

//                             <hr />

//                             <p id="product_price">${pack.totalprice}</p>
//                             <div className="stockCounter d-inline">
//                                 <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

//                                 <input type="number" className="form-control count d-inline" value={quantity} readOnly />

//                                 <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
//                             </div>
//                             <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={pack.stock === 0} onClick={addToCart}>Add to Cart</button>

//                             <hr />

//                             <p>Status: <span id="stock_status" className={pack.stock > 0 ? 'greenColor' : 'redColor'} >{pack.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

//                             <hr />

//                             <h4 className="mt-2">Description:</h4>
//                             <p>{pack.totalprice}</p>
//                             <hr />
//                             <p id="product_seller mb-3">Sold by: <strong>{pack.totalprice}</strong></p>

//                             {user ? <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal" onClick={setUserRatings}>
//                                 Submit Your Review
//                             </button>
//                                 :
//                                 <div className="alert alert-danger mt-5" type='alert'>Login to post your review.</div>
//                             }


//                             <div className="row mt-2 mb-5">
//                                 <div className="rating w-50">

//                                     <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
//                                         <div className="modal-dialog" role="document">
//                                             <div className="modal-content">
//                                                 <div className="modal-header">
//                                                     <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
//                                                     <button type="button" className="close" data-dismiss="modal" aria-label="Close">
//                                                         <span aria-hidden="true">&times;</span>
//                                                     </button>
//                                                 </div>
//                                                 <div className="modal-body">

//                                                     <ul className="stars" >
//                                                         <li className="star"><i className="fa fa-star"></i></li>
//                                                         <li className="star"><i className="fa fa-star"></i></li>
//                                                         <li className="star"><i className="fa fa-star"></i></li>
//                                                         <li className="star"><i className="fa fa-star"></i></li>
//                                                         <li className="star"><i className="fa fa-star"></i></li>
//                                                     </ul>

//                                                     <textarea
//                                                         name="review"
//                                                         id="review" className="form-control mt-3"
//                                                         value={comment}
//                                                         onChange={(e) => setComment(e.target.value)}
//                                                     >

//                                                     </textarea>

//                                                     <button className="btn my-3 float-right review-btn px-4 text-white" onClick={reviewHandler} data-dismiss="modal" aria-label="Close">Submit</button>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {pack.reviews && pack.reviews.length > 0 && (
//                         <ListReviews reviews={pack.reviews} />
//                     )}

//                 </Fragment>
//             )}
//         </Fragment>
//     )
// }

// export default PackageDetails

import React, { Fragment, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import ListReviews from '../review/ListReviews'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getPackDetails, newReview, clearErrors } from '../../actions/packageActions'
import { addItemToCart } from '../../actions/cartActions'
import { NEW_REVIEW_RESET } from '../../constants/packageConstants'

const PackageDetails = ({ match }) => {

    const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, pack } = useSelector(state => state.packDetails)
    const { user } = useSelector(state => state.auth)
    const { error: reviewError, success } = useSelector(state => state.newReview)

    useEffect(() => {
        dispatch(getPackDetails(match.params.id))

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (reviewError) {
            alert.error(reviewError);
            dispatch(clearErrors())
        }

        if (success) {
            alert.success('Reivew posted successfully')
            dispatch({ type: NEW_REVIEW_RESET })
        }

    }, [dispatch, alert, error, reviewError, match.params.id, success])

    // const addToCart = () => {
    //     dispatch(addItemToCart(match.params.id, quantity));
    //     alert.success('Item Added to Cart')
    // }

    // const increaseQty = () => {
    //     const count = document.querySelector('.count')

    //     if (count.valueAsNumber >= pack.stock) return;

    //     const qty = count.valueAsNumber + 1;
    //     setQuantity(qty)
    // }

    // const decreaseQty = () => {

    //     const count = document.querySelector('.count')

    //     if (count.valueAsNumber <= 1) return;

    //     const qty = count.valueAsNumber - 1;
    //     setQuantity(qty)

    // }

    function setUserRatings() {
        const stars = document.querySelectorAll('.star');

        stars.forEach((star, index) => {
            star.starValue = index + 1;

            ['click', 'mouseover', 'mouseout'].forEach(function (e) {
                star.addEventListener(e, showRatings);
            })
        })

        function showRatings(e) {
            stars.forEach((star, index) => {
                if (e.type === 'click') {
                    if (index < this.starValue) {
                        star.classList.add('orange');

                        setRating(this.starValue)
                    } else {
                        star.classList.remove('orange')
                    }
                }

                if (e.type === 'mouseover') {
                    if (index < this.starValue) {
                        star.classList.add('yellow');
                    } else {
                        star.classList.remove('yellow')
                    }
                }

                if (e.type === 'mouseout') {
                    star.classList.remove('yellow')
                }
            })
        }
    }

    const reviewHandler = () => {
        const formData = new FormData();

        formData.set('rating', rating);
        formData.set('comment', comment);
        formData.set('packId', match.params.id);

        dispatch(newReview(formData));
    }

    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={pack.numberofmarla} />
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="product_image">
                            <Carousel pause='hover'>
                                {pack.images && pack.images.map(image => (
                                    <Carousel.Item key={image.public_id}>
                                        <img className="d-block w-100" src={image.url} alt={pack.title} />
                                    </Carousel.Item>
                                ))}
                            </Carousel>
                        </div>

                        <div className="col-12 col-lg-5 mt-5">
                            <h3><b>{pack.numberofmarla} Marla</b></h3>
                            <p id="product_id"><b>Package #</b> {pack._id}</p>

                            <hr />

                            <div className="rating-outer">
                                <div className="rating-inner" style={{ width: `${(pack.ratings / 5) * 100}%` }}></div>
                            </div>
                            <span id="no_of_reviews">({pack.numOfReviews} Reviews)</span>


                            {/* <p id="product_price">${pack.totalprice}</p>
                            <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                            </div>
                            <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={pack.stock === 0} onClick={addToCart}>Add to Cart</button> */}

                            <hr />

                            {/* <p>Status: <span id="stock_status" className={pack.stock > 0 ? 'greenColor' : 'redColor'} >{pack.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

                            <hr /> */}

                           
                            <h4 className="mt-2">Description:</h4>
                            
                             <p>This project package is about {pack.numberofmarla} marla house with 13x14 room size with attach washrooms ,15x8 Laundry, 5x8 kitchen ,20x13 TV Launch and car parking area.The remaing free space can use for garden.</p>
                             <label><b>Estimated Square Foot: &nbsp; &nbsp;</b>{pack.estimatedsquarefoot}</label><br></br>
                             <label><b>Total Estimated Cost: &nbsp; &nbsp; </b> {pack.totalprice}</label><br></br>
                             <p><b>This cost include:</b></p>
                             <label>Price of Cement :  &#160; &#160;{pack.cement}</label>
                             <label>Price of Sand   : &#160; &nbsp; &nbsp;{pack.sand}</label>
                             <label>Price of Aggregate : &#160; &nbsp;{pack.aggregate}</label>
                             <label>Price of Steel  :&nbsp; &#160;{pack.steel}</label>
                             <label>Price of Finishers (Paint,Tiles, Bricks):&nbsp;{pack.finishers}</label>
                             <label>Price of Fittings ( Window, Doors,Plumbing,Eletrical,Sanitary) : &#160; &#160;{pack.fittings}</label>
                             <h4 className="mt-2">Contact Info:</h4>
                            
                            <label><b>Phone# &nbsp; &nbsp; </b>051-536356434</label>
                            <br></br>
                            <label><b>Email@ :&nbsp; &nbsp;</b>info.pakrealconstruction@gmail.com</label>
                           <hr/>
                            {/* <p>{pack.totalprice}</p> */}
                            {/* <hr />
                            <p id="product_seller mb-3">Sold by: <strong>{pack.totalprice}</strong></p> */}

                            {user ? <button id="review_btn" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal" onClick={setUserRatings}>
                                Submit Your Review
                            </button>
                                :
                                <div className="alert alert-danger mt-5" type='alert'>Login to post your review.</div>
                            }


                            <div className="row mt-2 mb-5">
                                <div className="rating w-50">

                                    <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog" aria-labelledby="ratingModalLabel" aria-hidden="true">
                                        <div className="modal-dialog" role="document">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h5 className="modal-title" id="ratingModalLabel">Submit Review</h5>
                                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div className="modal-body">

                                                    <ul className="stars" >
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                        <li className="star"><i className="fa fa-star"></i></li>
                                                    </ul>

                                                    <textarea
                                                        name="review"
                                                        id="review" className="form-control mt-3"
                                                        value={comment}
                                                        onChange={(e) => setComment(e.target.value)}
                                                    >

                                                    </textarea>

                                                    <button className="btn my-3 float-right review-btn px-4 text-white" onClick={reviewHandler} data-dismiss="modal" aria-label="Close">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {pack.reviews && pack.reviews.length > 0 && (
                        <ListReviews reviews={pack.reviews} />
                    )}

                </Fragment>
            )}
        </Fragment>
    )
}

export default PackageDetails