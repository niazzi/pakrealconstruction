import React, { Fragment, useState, useEffect } from 'react'
import ImageUploader from "react-images-upload";

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { newProduct, clearErrors } from '../../actions/productActions'
import { NEW_PRODUCT_RESET } from '../../constants/productConstants'

const NewProduct = ({ history }) => {
    const intialValues = {name:"",price:"",description:"",category:"",stock:""}
    const [formValues,setFormValues] = useState(intialValues);
    const [formErrors, setFormErrors] = useState({});
    //const [nameErrors,setNameErrors] = useState('');
    //const [priceErrors,setPriceErrors] = useState('');
    const [isSubmit,setIsSumit] = useState(false);
    //const [descriptionErrors,setDescriptionErrors] = useState('');
    //const [stockErrors,setStockErrors] = useState('');

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');

    // const [seller, setSeller] = useState('');
    const [images, setImages] = useState([]);
    const [imagesPreview, setImagesPreview] = useState([])
    //const [imageErrors,setImagesError]=useState([]);
    
    const categories = [
        'Cement',
                'Aggregate',
                'Sand',
                'Steel',
                'Paint',
                'Tiles',
                'Bricks',
                'Window',
                'Doors',
                'Plumbing',
                'Electrical',
                'Sanitary',
                
    ]

    const alert = useAlert();
    const dispatch = useDispatch();

    const { loading, error, success } = useSelector(state => state.newProduct);
    

    useEffect(() => {
        //console.log(formErrors);
        //if (Object.keys(nameErrors,priceErrors).length === 0 && isSubmit) {
       // console.log(formValues);       
      // }
      console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
        
        if (error) {
            
            alert.error(error);
            dispatch(clearErrors())
        }

        if (success) {
            
            history.push('/admin/products');
            alert.success('Product created successfully');
            //setNameErrors('');
            dispatch({ type: NEW_PRODUCT_RESET })
           
       // setPriceErrors('');
        }

    }, [formErrors,dispatch, alert, error, success, history])

    const submitHandler = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSumit(true);
        
    //     let errors;
    //     //let suppose = "";
    //     var textregex = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
        const formData = new FormData();
    //      if (!name) {
    //          console.log(" Name Not found");
    //          errors= "Name is Required";
    //          setNameErrors(errors);
            
    //          //setNameErrors("");
           
    //             //setNameErrors('');
            
             
    //      }
    //     //  else if(name !== null && name !== '') {
    //     //     setNameErrors("");
    //     //  }
         
    //      else if (name.length < 5) {
    //         console.log("Name Length is Greater than 5");
    //         errors= "Name Length is Greater than 5";
    //         setNameErrors(errors);
            
    //     }
    //     else if (name.length > 40) {
    //        console.log("Name Length is Smaller than 40");
    //        errors= "Name Length is Smaller than 40";
    //        setNameErrors(errors);
    //     }
      
    //    else if (!textregex.test(name)) {
    //        console.log("This is not a valid Name Format");
    //        errors= "This is not a valid Name Format";
    //        setNameErrors(errors);
           
    //    }  
    //      else if (!price) {
    //         console.log("Price Not found");
    //         errors= "Price is Required";
    //         setPriceErrors(errors);
           
    //     }
    //     else if (price.length >= 7) {
    //         console.log("Price length is smaller than 7");
    //         errors= "Price length is smaller than 7";
    //         setPriceErrors(errors);
    //      }
    //     else if (!description) {
    //         console.log("Description found");
    //         errors= "Description is Required";
    //         setDescriptionErrors(errors);
           
    //     }
    //     else if (!stock) {
    //         console.log("Stock Not found");
    //         errors= "Stock is Required";
    //         setStockErrors(errors);
           
    //     }
    //     else if (stock.length >= 7) {
    //         console.log("Stock length is smaller than 7");
    //         errors= "Stock length is smaller than 7";
    //         setStockErrors(errors);
    //      }
        
    //     else   {
    //          setNameErrors('');
    //          setPriceErrors('');
    //          setDescriptionErrors('');
    //          setStockErrors('');
            
        //const formData = new FormData();
        formData.set('name', name);
        //setNameErrors('');
        formData.set('price', price);
        formData.set('description', description);
        formData.set('category', category);
        formData.set('stock', stock);
        // formData.set('seller', seller);

        images.forEach(image => {
            formData.append('images', image)
        })
        //setNameErrors('');
        dispatch(newProduct(formData));
       
       
    }
    const validate = (e) => {
        const errors = {};
             var textregex = /[a-zA-Z][a-zA-Z ]+[a-zA-Z]$/;
        if (!name) {
            errors.name = "Name is required!";
          }
          else if (name.length < 5) {
            console.log("Name Length is Greater than 5");
            errors.name= "Name Length is Greater than 5";
           // setNameErrors(errors);
            
        }
        else if (name.length > 40) {
           console.log("Name Length is Smaller than 40");
           errors.name= "Name Length is Smaller than 40";
          // setNameErrors(errors);
        }
      
       else if (!textregex.test(name)) {
           console.log("This is not a valid Name Format");
           errors.name= "This is not a valid Name Format";
           //setNameErrors(errors);
           
       }  
         else if (!price) {
            errors.price = "Price is required!";
          }
        //   else if (price > 0 && price.length > 7) {
        //     console.log("Price length is larger than or equal to 1 and Length is smaller or equal to 7");
        //    errors.price= "Price length is larger than or equal to 1 and Length is smaller or equal to 7";
   
        // }
        // else if (price.max < 0 ) {
        //     console.log("Price length is larger than or equal to 1 ");
        //    errors.price= "Price length is larger than or equal to 1 ";
   
        // }
          else if (price.length > 7) {
                     console.log("Price length is smaller or equal to than 7");
                    errors.price= "Price length is smaller or equal to than 7";
            
                 }
                
          else if (!description) {
            errors.description = "Description is required!";
          } 
          else if (!category) {
            errors.category = "Category is required!";
          } 
          else if (!category) {
            errors.category = "Category is required!";
          } 
          else if (!stock) {
            errors.stock = "Stock is required!";
          }   
        //   else if (stock.min > 0 ) {
        //          console.log("Stock length is larger than or equal to 1 ");
        //        errors.stock= "Stock length is larger than or equal to 1 ";
       
        //     }
              else if (stock.length > 7) {
                         console.log("Stock length is smaller or equal to than 7");
                        errors.stock= "Stock length is smaller or equal to than 7";
                
                     }
                     
          else{
            <p>Not Found</p>
          }
          
          return errors;
    }
    //  setNameErrors('');
    //  setPriceErrors('');
     //return errors;
//}
    //setNameErrors('');

    


    const onChange = e => {
        //const errors = {};
       

        const files = Array.from(e.target.files)
      
 
        setImagesPreview([]);
        setImages([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setImagesPreview(oldArray => [...oldArray, reader.result])
                    setImages(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }
    
    
    return (
        <Fragment>
            <MetaData title={'New Product'} />
            <div className="row">
                <div className="col-12 col-md-2">
                    <Sidebar />
                </div>

                <div className="col-12 col-md-10">
                    <Fragment>
                        <div className="wrapper my-5">
                        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 5)}</pre>
      )}
                            <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-4">New Product</h1>

                                <div className="form-group">
                                    <label htmlFor="name_field">Name</label>
                                    <input
                                        type="text"
                                        //pattern="[a-z][A-Z]"
                                        placeholder='Aphates are required'
                                        
                                        id="name_field"
                                        name="name"
                                        className="form-control"
                                        //value={formValues.name}
                                        value={name}
                                        onChange={(e) => setFormValues(setName(e.target.value))}
                                        
                                    />
                                </div>
                                {/* <div> <p className='text-danger'>{nameErrors}</p></div> */}
                                <div> <p className='text-danger'>{formErrors.name}</p></div>
                                <div className="form-group">
                                    <label htmlFor="price_field">Price</label>
                                    <input
                                        type="number"
                                        id="price_field"
                                        name="price"
                                        className="form-control"
                                        min="1"
                                        //value={formValues.price}
                                        value={price}
                                        onChange={(e) => setFormValues(setPrice(e.target.value))}
                                    />
                                </div>
                                {/* <div> <p className='text-danger'>{priceErrors}</p></div> */}
                               <div> <p className='text-danger'>{formErrors.price}</p></div>
                                <div className="form-group">
                                    <label htmlFor="description_field">Description</label>
                                    <textarea className="form-control" id="description_field" rows="4"
                                     //value={formValues.description} 
                                     value={description}
                                     onChange={(e) => setFormValues(setDescription(e.target.value))}>
                                     </textarea>
                                </div>
                               {/* <div> <p className='text-danger'>{descriptionErrors}</p> </div> */}
                               <div> <p className='text-danger'>{formErrors.description}</p></div>
                                <div className="form-group">
                                    <label htmlFor="category_field">Category</label>
                                    <select className="form-control" id="category_field" 
                                    //value={formValues.category}
                                    value={category}
                                     onChange={(e) => setFormValues(setCategory(e.target.value))}>
                                        {categories.map(category => (
                                            <option key={category} value={category} >{category}</option>
                                        ))}

                                    </select>
                                </div>
                                <div> <p className='text-danger'>{formErrors.category}</p></div>
                                <div className="form-group">
                                    <label htmlFor="stock_field">Stock</label>
                                    <input
                                        type="number"
                                        id="stock_field"
                                        min="1"
                                        className="form-control"
                                        //value={formValues.stock}
                                        value={stock}
                                        onChange={(e) => setFormValues(setStock(e.target.value))}
                                    />
                                </div>
                                <div> <p className='text-danger'>{formErrors.stock}</p></div>
                                {/* <div className="form-group">
                                    <label htmlFor="seller_field">Seller Name</label>
                                    <input
                                        type="text"
                                        id="seller_field"
                                        className="form-control"
                                        value={seller}
                                        onChange={(e) => setSeller(e.target.value)}
                                    />
                                </div> */}

                                <div className='form-group'>
                                    <label>Images</label>

                                    <div className='custom-file'>
                                        <input
                                            type='file'
                                            name='product_images'
                                            className='custom-file-input'
                                            //pattern="([a-zA-Z0-9\s_\\.\-:])+(.png|.jpg|.gif)$"
                                            accept="image/png, image/gif, image/jpeg"
                                           // accept="image/*"
                                            //pattern = "([^\\s]+(\\.(?i)(jpe?g|png|gif|bmp))$)" 
                                            id='customFile'
                                            //required
                                            
                                            onChange={onChange}
                                            multiple
                                        />
                                        {/* <ImageUploader
                withIcon={false}
                buttonText='Choose images'
                onChange={onChange}
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={false}
            /> */}
                                        <label className='custom-file-label' htmlFor='customFile'>
                                            Choose Images
                                     </label>
                                     {/* <div> <p className='text-danger'>{imageErrors}</p></div> */}
                                    </div>

                                    {imagesPreview.map(img => (
                                        <img src={img} key={img} 
                                        imgExtension={['.jpg']}
                                        alt="Images Preview" 
                                        className="mt-3 mr-2" width="55" height="52" />
                                    ))}

                                </div>


                                <button
                                    id="login_button"
                                    type="submit"
                                    className="btn btn-block py-3"
                                    //disabled={loading ? true : false}
                                    //onSubmit={submitHandler}
                                    
                                >
                                    CREATE
                                </button>

                            </form>
                        </div>
                    </Fragment>
                </div>
            </div>

        </Fragment>
    )
}

export default NewProduct