import React, { useEffect, useState } from "react";
import {  Link ,Route} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { newComplain, clearErrors } from '../../actions/complainActions'
// import { NEW_COMPLAIN_RESET } from '../../constants/complainConstants'

const Complain=({history})=>
{
    const { user} = useSelector(state => state.auth)
    const [complain, setComplain] = useState({
        name:user.name,
        email:user.email,
        phone: '',
        complaint:'',
    })

    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [complaint, setComplaint] = useState('');
   
    const { name, email, phone,complaint } = complain;
    const alert = useAlert();
    const dispatch = useDispatch();
//       const { loading, error, success } = useSelector(state => state.newComplain);
//   useEffect(() => {
//       if (error) {
//           alert.error(error);
//           dispatch(clearErrors())
//       }
//       if (success) {
//           history.push('/newComplain');
//           alert.success('Complain created successfully');
//           dispatch({ type:  NEW_COMPLAIN_RESET})
//       }
//   }, [dispatch, alert, error, success, history])
    const submitHandler = (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.set('name', name);
            formData.set('email', email);
            formData.set('phone', phone);
            formData.set('complaint', complaint);
           dispatch(newComplain(formData));
           alert.success("You have successfully complaint")
    }
    const onChange = e => {
        setComplain({ ...complain, [e.target.name]: e.target.value })
    }
    return(
        <>
            <div className=".contact-form">
                <div className=".container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-1">
                            <div className="contact-form-container ">
                            <form  method="POST"  id="contact-form"  onSubmit={submitHandler} encType='multipart/form-data'>
                                <h1 className="mb-5 mt-5 text-center text-primary mr-5"><b>Complaint</b></h1>
                                    <div className=" d-flex justify-content-between ">
                    <input type="name" 
                                        name="name" 
                                        id="name"
                                        value={name}
                                         onChange={onChange}
                                        // onChange={(e)=>setName(e.target.value)}           
                                         placeholder="Your Name"
                                         required="true"/>
                                        <br/>
                    <input type="email" 
                                         name="email" id="email" 
                                        value={email}
                                         onChange={onChange}
                                        // onChange={(e)=>setEmail(e.target.value)}
                                        placeholder="Your Email" required="true"/>
                                        <br/>
                    <input type="text" 
                                        name="phone" id="phone"
                                        value={phone}
                                        onChange={onChange}
                                        // onChange={(e)=>setPhone(e.target.value)}
                                     
                                         placeholder="Phone Number" required="true"/>
                                        <br/>
                                    </div>
                                    <br/>
                                    <div className="d-sm-inline-flex">
                    <textarea id="complaint" cols="84" rows="5" 
                                          name="complaint"
                                           value={complaint}
                                           onChange={onChange}         
                                        // onChange={(e)=>setComplaint(e.target.value)}          
                                              placeholder="Complaint"></textarea>
                                              <div className=" col-lg-2">
 <h1 className="text-danger ml-5 text-center"><b>Note</b></h1>
 <p className="text-center">Your&#160;complaint&#160;first&#160;line&#160;should&#160;contain&#160;
                    the&#160;&#160;main&#160;&#160;objective&#160;of&#160;&#160;your&#160;complaint.&#160;
                    We&#160;&#160;will&#160;&#160;respond&#160;&#160;back&#160;&#160;on&#160;your&#160;given&#160;
                    email&#160;or&#160;&#160;mobile&#160;number&#160;,so&#160;&#160;be&#160;careful&#160;
                    while&#160;providing&#160;your&#160;required&#160;&#160;details.</p>
 <hr/>
 <label><b>Phone#&nbsp;</b>0315538320</label>
                       <br></br>
                         <label><b>Email@: </b>info.pakrealconstruction@gmail.com</label>
                         <hr/>
</div>
                                             
                                             </div>
                                                                 <div class="text-center mt-2">
     <button id="register_button" type="submit" class="btn btn-primary " 
     
   >Submit</button>
  </div>
                            </form>
                            </div>
                        </div>
                         
                        
                    </div>
                </div>
            </div>
        </>
    )
}
export default Complain;