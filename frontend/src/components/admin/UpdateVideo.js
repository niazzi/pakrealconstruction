import React, { Fragment, useState, useEffect } from 'react'

import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'

import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { updateVideo, getVideoDetails, clearErrors } from '../../actions/videoActions'
import { UPDATE_VIDEO_RESET } from '../../constants/videoConstants'

const UpdateVideo = ({match,history}) => {

  const [name, setName] = useState('');
   const [numOfDays, setNumOfDays] = useState(0);
   const [projStartDate, setProjStartDate] = useState('');
  const [description, setDescription] = useState('');
  // const [category, setCategory] = useState('');
  // const [stock, setStock] = useState(0);

  const [clips, setClips] = useState([]);
  const [oldClips, setOldClips] = useState([]);
  const [clipsPreview, setClipsPreview] = useState([])

  const alert = useAlert();
    const dispatch = useDispatch();

    const { error, video } = useSelector(state => state.videoDetails)
    const { loading, error: updateError, isUpdated } = useSelector(state => state.video);

    const videoId = match.params.id;

    useEffect(() => {

        if (video && video._id !== videoId) {
            dispatch(getVideoDetails(videoId));
        } else {
            setName(video.name);
            setNumOfDays(video.numOfDays);
            setDescription(video.description);
            // setCategory(video.category);
            // setSeller(product.seller);
            setProjStartDate(video.projStartDate)
            setOldClips(video.clips)
        }

        if (error) {
            alert.error(error);
            dispatch(clearErrors())
        }

        if (updateError) {
            alert.error(updateError);
            dispatch(clearErrors())
        }


        if (isUpdated) {
            history.push('/admin/vedeos');
            alert.success('Video updated successfully');
            dispatch({ type: UPDATE_VIDEO_RESET })
        }

    }, [dispatch, alert, error, isUpdated, history, updateError, video, videoId])


    const submitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.set('name', name);
        formData.set('numOfDays', numOfDays);
        formData.set('projStartDate', projStartDate);
        formData.set('description', description);
        // formData.set('category', category);
        
        // formData.set('seller', seller);
// formData.set('clips',clips)
        clips.forEach(clip => {
            formData.append('clips', clip)
        })

        dispatch(updateVideo(video._id, formData))
    }

    const onChange = e => {

        const files = Array.from(e.target.files)

        setClipsPreview([]);
        setClips([])
        setOldClips([])

        files.forEach(file => {
            const reader = new FileReader();

            reader.onload = () => {
                if (reader.readyState === 2) {
                    setClipsPreview(oldArray => [...oldArray, reader.result])
                    setClips(oldArray => [...oldArray, reader.result])
                }
            }

            reader.readAsDataURL(file)
        })
    }
 

  return (
    <Fragment>
    <MetaData title={'Update Video'} />
    <div className="row">
        <div className="col-12 col-md-2">
            <Sidebar />
        </div>

        <div className="col-12 col-md-10">
            <Fragment>
            <div className="wrapper my-5"> 
  <form className="shadow-lg" onSubmit={submitHandler} encType="multipart/form-data">
    <h1 className="mb-4">Update video</h1>
    <div className="form-group">
      <label htmlFor="name_field">Project Title</label>
      <input type="text" id="name_field" className="form-control"  
        value={name}
           onChange={(e) => setName(e.target.value)}
      />
    </div>
    <div className="form-group">
      <label htmlFor="price_field">Number of days</label>
      <input type="text" id="price_field" className="form-control" 
      value={numOfDays}
      onChange={(e) => setNumOfDays(e.target.value)} />
    </div>
    <div className="form-group">
      <label htmlFor="stock_field">Project Start Date</label>
      <input type="text" id="stock_field" className="form-control" 
      value={projStartDate}
                     onChange={(e) => setProjStartDate(e.target.value)}
       />
    </div>
    <div className="form-group">
      <label htmlFor="description_field">Description</label>
      <textarea className="form-control" id="description_field" rows={8} defaultValue={""}
      value={description} onChange={(e) => setDescription(e.target.value)} />
    </div>
    {/* <div className="form-group">
      <label>Video</label>
      <div className="custom-file">
        <input type="file" name="product_images" className="custom-file-input" id="customFile" multiple />
        <label className="custom-file-label" htmlFor="customFile">
          Choose Video
        </label>
      </div>
    </div> */}

    <div class='form-group'>
                <label>Video</label>
                
                    <div class='custom-file'>
                        <input
                            type='file'
                            name='product_images'
                            class='custom-file-input'
                            id='customFile'
                            onChange={onChange}
                            multiple
                        />
                        <label class='custom-file-label' for='customFile'>
                            Choose Video
                        </label>
                    </div>
                    {oldClips && oldClips.map(clip => (
                                        <video width="55" height="52" controls>
                                    {/* <source src={videos} key={clip} type="video/mp4" />  */}
                                    <source src={video.clips[0].url} type="video/mp4" />
                                    </video>   
                                    ))}
                    {clipsPreview.map(clip => (
                                        
                                    <video width="55" height="52" controls>
                                    <source src={clip} key={clip} type="video/mp4" /> 
                                    </video>
                                    ))}

                                    

            </div>
    <button id="login_button" type="submit" className="btn btn-block py-3">
      Update
    </button>
  </form>
</div>

            </Fragment>
        </div>
    </div>

</Fragment>
)
}

export default UpdateVideo