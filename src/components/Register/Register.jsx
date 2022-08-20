
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import "./Register.css"
const Register = () => {
    const navigate=useNavigate()

    const [formData,setformData]=useState([])

    const Handle=(e)=>{

        const {name, value}=e.target
            setformData({
                ...formData,[name]:value,
            })
        }
        
  const handleSubmit=(e)=>{
    e.preventDefault()
    
 
    const create={
      "username": formData.username,
      "email": formData.email,
      "phone": formData.phone,
      "role":formData.role,
      "password": formData.password,
    }
    fetch("https://brandandbeyond.herokuapp.com/register",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(create),
    
    }).then(data => data.json())
    .then(data =>  { 
        console.log(data);
        if(data.status="ok"){
            alert("Successfully Registered"); 
            navigate("/login")
        } else{
            alert("Registation failed"); 
        }
    })
    .catch((err) => {
         alert ("This is a warning message!");
        console.error(err);
    })
    
    }
      
    return (
        <form  onSubmit={handleSubmit}  >
        <div className="register">
        <i id="close" class="fa-solid fa-angle-left"></i>
        <h2 className="r-heading">Create An Account</h2>
        <hr />
       <div className='r-inputs'>
       <lable className="lable" >username</lable >
        <input   onChange={Handle} type="text" required="true" className="firstame" name='username'/>

        <lable className="lable " >Email</lable >
        <input onChange={Handle}  type="text" required="true" className="name" name='email'/>

        <lable className="lable">phone</lable >
        <input onChange={Handle}  type="Number" required="true" className="lastname" name='phone'/>

        
        <lable className="lable" >Role</lable >
       
        <select onChange={Handle}  type="text" className="name" required="true" name='role'>
            <option value="">----</option>
        <option value="user">User</option>
            <option value="admin" >Admin</option>
            
        </select>


        <lable className="lable" >Password</lable >
        <input onChange={Handle}  type="password" className="name" required="true" name='password'/>
        <input className="submit"  type="submit" value="Submit" />
  
    
        
       </div>
       <h2 className="r-heading">Already Have an Account?</h2>
    <Link to="/login">  <button className='create-button'>Sign In</button></Link>
         </div>
         </form>
    );
};

export default Register;
 