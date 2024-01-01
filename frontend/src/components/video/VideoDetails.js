// import React, { Fragment, useState, useEffect } from 'react'
// import { Carousel } from 'react-bootstrap'

// import Loader from '../layout/Loader'
// import MetaData from '../layout/MetaData'
// import ListReviews from '../review/ListReviews'

// import { useAlert } from 'react-alert'
// import { useDispatch, useSelector } from 'react-redux'
// import { getVideoDetails, newReview, clearErrors } from '../../actions/videoActions'
// // import { addItemToCart } from '../../actions/cartActions'
// import { NEW_REVIEW_RESET } from '../../constants/videoConstants'

// const VideoDetails = ({ match }) => {

//     // const [quantity, setQuantity] = useState(1)
//     const [rating, setRating] = useState(0);
//     const [comment, setComment] = useState('');

//     const dispatch = useDispatch();
//     const alert = useAlert();

//     const { loading, error, video } = useSelector(state => state.videoDetails)
//     const { user } = useSelector(state => state.auth)
//     const { error: reviewError, success } = useSelector(state => state.newReview)

//     useEffect(() => {
//         dispatch(getVideoDetails(match.params.id))

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

//     // const addToCart = () => {
//     //     dispatch(addItemToCart(match.params.id, quantity));
//     //     alert.success('Item Added to Cart')
//     // }

//     // const increaseQty = () => {
//     //     const count = document.querySelector('.count')

//     //     if (count.valueAsNumber >= product.stock) return;

//     //     const qty = count.valueAsNumber + 1;
//     //     setQuantity(qty)
//     // }

//     // const decreaseQty = () => {

//     //     const count = document.querySelector('.count')

//     //     if (count.valueAsNumber <= 1) return;

//     //     const qty = count.valueAsNumber - 1;
//     //     setQuantity(qty)

//     // }

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
//         formData.set('videoId', match.params.id);

//         dispatch(newReview(formData));
//     }




//     // 


//     return (
//         <Fragment>
//             {loading ? <Loader /> : (
//                 <Fragment>
//                     <MetaData title={video.name} />
//                     <div className="row d-flex justify-content-around">
//                         <div className="col-12 col-lg-5 img-fluid" id="product_image">
//                         <Carousel pause='hover'>
//                                 {video.clips && video.clips.map(clip => (
//                                     <Carousel.Item key={clip.public_id}>
//                                         {/* <img className="d-block w-100" src={clip.url} alt={video.title} /> */}
//                                         <video 
//                      width="55" height="52" controls>
//                                     <source src={clip.url} key={clip} type="video/mp4" /> 
//                                     </video> 
//                                     </Carousel.Item>
//                                 ))}
//                             </Carousel>
//                         </div>

//                         <div className="col-12 col-lg-5 mt-5">
//                             <h3>{video.name}</h3>
//                             <p id="product_id">Video # {video._id}</p>

//                             <hr />

//                             <div className="rating-outer">
//                                 <div className="rating-inner" style={{ width: `${(video.ratings / 5) * 100}%` }}></div>
//                             </div>
//                             <span id="no_of_reviews">({video.numOfReviews} Reviews)</span>

//                             <hr />

//                             <p id="product_price">{video.numOfDays}</p>
//                             {/* <div className="stockCounter d-inline">
//                                 <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

//                                 <input type="number" className="form-control count d-inline" value={quantity} readOnly />

//                                 <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
//                             </div> */}
//                             {/* <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={product.stock === 0} onClick={addToCart}>Add to Cart</button> */}

//                             <hr />

//                             {/* <p>Status: <span id="stock_status" className={product.stock > 0 ? 'greenColor' : 'redColor'} >{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

//                             <hr /> */}

//                             <h4 className="mt-2">Description:</h4>
//                             <p>{video.description}</p>
//                             <hr />
//                             {/* <p id="product_seller mb-3">Sold by: <strong>{video.seller}</strong></p> */}

//                             {user ? <button id="review_btn" type="button" className="btn btn-primary mt-4" 
//                             data-toggle="modal" data-target="#ratingModal" onClick={setUserRatings}>
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

//                     {video.reviews && video.reviews.length > 0 && (
//                         <ListReviews reviews={video.reviews} />
//                     )}

//                 </Fragment>
//             )}
//         </Fragment>
//     )
// }

// export default VideoDetails


import React, { Fragment, useState, useEffect } from 'react'
import { Carousel } from 'react-bootstrap'

import Loader from '../layout/Loader'
import MetaData from '../layout/MetaData'
import ListReviews from '../review/ListReviews'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { getVideoDetails,newVideoReview,clearErrors } from '../../actions/videoActions'
// import { addItemToCart } from '../../actions/cartActions'
import { NEW_REVIEW_RESET } from '../../constants/videoConstants'

const VideoDetails = ({ match }) => {

    // const [quantity, setQuantity] = useState(1)
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const dispatch = useDispatch();
    const alert = useAlert();

    const { loading, error, video } = useSelector(state => state.videoDetails)
    const { user } = useSelector(state => state.auth)
    const { error: reviewError, success } = useSelector(state => state.newVideoReview)

    useEffect(() => {
        dispatch(getVideoDetails(match.params.id))

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

    //     if (count.valueAsNumber >= product.stock) return;

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
        formData.set('videoId', match.params.id);

        dispatch(newVideoReview(formData));
    }




    // 


    return (
        <Fragment>
            {loading ? <Loader /> : (
                <Fragment>
                    <MetaData title={video.name} />
                    <div className="row d-flex justify-content-around">
                        <div className="col-12 col-lg-5 img-fluid" id="product_image">
                         <Carousel pause='hover'> 
                                {video.clips && video.clips.map(clip => (
                                    <Carousel.Item key={clip.public_id}>
                                       
                                       <video 
                     style={{'width':'100%'}}  controls>
                                    <source src={clip.url} key={clip} type="video/mp4" /> 
                                    </video> 
                                    </Carousel.Item>
                                ))}
                            </Carousel> 
                        </div>

                        <div className="col-12 col-lg-5 mt-5">
                            <h3><b>{video.name}</b></h3>
                            <p id="product_id">Video # {video._id}</p>

                            <hr />

                            <div className="rating-outer">
                                <div className="rating-inner" style={{ width: `${(video.ratings / 5) * 100}%` }}></div>
                            </div>
                            <span id="no_of_reviews">({video.numOfReviews} Reviews)</span>

                            <hr />

                            {/* <p id="product_price">{video.numOfDays}</p> */}
                            {/* <div className="stockCounter d-inline">
                                <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>

                                <input type="number" className="form-control count d-inline" value={quantity} readOnly />

                                <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                            </div> */}
                            {/* <button type="button" id="cart_btn" className="btn btn-primary d-inline ml-4" disabled={product.stock === 0} onClick={addToCart}>Add to Cart</button> */}

                            {/* <hr /> */}

                            {/* <p>Status: <span id="stock_status" className={product.stock > 0 ? 'greenColor' : 'redColor'} >{product.stock > 0 ? 'In Stock' : 'Out of Stock'}</span></p>

                            <hr /> */}

                            <h4 className="mt-2">Description:</h4>
                            <p>{video.description}</p><br></br>
                            <hr />
                            <label><b>Project Start Date  :&#160; &nbsp; &#160; &nbsp;</b>{video.projStartDate}</label><br></br>
                            <label><b>Number Of Days Spend :&#160;</b>{video.numOfDays}</label>
                            <hr />
                            <h4 className="mt-2">Contact Info:</h4>
                            <label><b>Phone# :&#160; &nbsp;</b>051-536356434</label>
                            <br></br>
                            <label><b>Email@ :&#160; &nbsp;</b><b>info.pakrealconstruction@gmail.com</b></label>
                            {/* <p id="product_seller mb-3">Sold by: <strong>{video.seller}</strong></p> */}

                            {user ? <button id="review_btn" type="button" className="btn btn-primary mt-4" 
                            data-toggle="modal" data-target="#ratingModal" onClick={setUserRatings}>
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

                    {video.reviews && video.reviews.length > 0 && (
                        <ListReviews reviews={video.reviews} />
                    )}

                </Fragment>
            )}
        </Fragment>
    )
}

export default VideoDetails