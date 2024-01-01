import React, {Fragment, useEffect, useState} from 'react'
import MetaData from '../layout/MetaData'
import axios from 'axios';
import Sidebar from './Sidebar'
import { useParams } from 'react-router-dom';

const UpdateLabor = () => {
  const {id} = useParams();
  const [laborData, setLabourData] = useState({});
  const [updateStatus, setUpdateStatus] = useState(false)

  const updateLaborInfo = (e)=>{
    e.preventDefault();
    axios
		  .patch(`http://localhost:4000/api/v1/admin/labor/${id}`, laborData)
		  .then((response) => {
			 if(response.data.success)
       setUpdateStatus(true);
		
      console.log(response.data);
		  })
		  .catch((error) => {
			console.log(error);
		  });
    
  }

  useEffect(()=>{
		axios
		  .get(`http://localhost:4000/api/v1/labor/${id}`)
		  .then((response) => {
			if(response.data.success)
			setLabourData(response.data.labor)
		  })
		  .catch((error) => {
			console.log(error);
		  });
	}, [])
  return (
    <Fragment>
    <MetaData title={'Update Labor'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div className="wrapper my-5"> 
  <form className="shadow-lg" >
    <h1 className="mb-4">Update Labor</h1>
    <div className="form-group">
      <label htmlFor="name_field">Name</label>
      <input type="text"
                 minlength="5"
                 maxLength="40"
                 required
                 pattern='[a-zA-Z][a-zA-Z ]+[a-zA-Z]$' id="name_field" className="form-control"  value={laborData?.name} onChange={(e)=>{setLabourData({...laborData, name: e.target.value})}}/>
    </div>
    <div className="form-group">
      <label htmlFor="price_field">NIC Number (format: xxxxx-xxxxxxx-x):</label>
      <input max="13" 
      type="tel" pattern="^\d{5}-\d{7}-\d{1}$" required
      id="price_field" className="form-control"  value={laborData?.cnic} onChange={(e)=>{setLabourData({...laborData, cnic: e.target.value})}}/>
    </div>
    <div className="form-group">
      <label htmlFor="description_field">Work Description</label>
      <textarea className="form-control" required id="description_field" rows={2} defaultValue={""} value={laborData.description} onChange={(e)=>{setLabourData({...laborData, description: e.target.value})}}/>
    </div>
    
    <div className="form-group">
      <label htmlFor="category_field">Type</label>
      <select className="form-control" required  id="category_field" value={laborData.type} onChange={(e)=>{setLabourData({...laborData, type: e.target.value})}}>
        <option>Plumber</option>
        <option>Electration</option>
        <option>Civil Engineer</option>
        <option>Painter</option>
        <option>Other</option>
      </select>
    </div>
    <div className="form-group">
      <label htmlFor="stock_field">Contact Number</label>
      <input type="tel" id="stock_field" 
      placeholder="0301-7800801" pattern="[0-9]{4}-[0-9]{4}[0-9]{3}" required
      className="form-control"  value={laborData.contactNumber} onChange={(e)=>{setLabourData({...laborData, contactNumber: e.target.value})}}/>
    </div>
    
    <div className="form-group">
      <label>Images</label>
      <div className="custom-file">
        <input type="file"
        required
        accept="image/png, image/jpg, image/jpeg"
        name="product_images" className="custom-file-input" id="customFile" multiple />
        <label className="custom-file-label" htmlFor="customFile">
          Choose Images
        </label>
      </div>
    </div>
    <div className='form-group'>
    <p>Approval status:</p>
    <input type="radio" required id="approve" name="fav_language" value={true}  onChange={(e)=>{setLabourData({...laborData, isApproved: true})}}/>
    <label for="approve">Approve</label>
    <input type="radio" required id="reject" name="fav_language" value={false} onChange={(e)=>{setLabourData({...laborData, isApproved: false})}}/>
    <label for="reject">Reject</label>
    </div>
    <button   className="btn btn-block py-2" onClick={updateLaborInfo} >
      UPDATE
    </button>
    {
    updateStatus ? (<p style={{marginTop: "30px"}}>{`Labor with id: ${id} has been successfully updated !`}</p>) : null
  }
  </form>
 
</div>

            </Fragment>
        </div>
    </div>

</Fragment>
)
}


export default UpdateLabor
