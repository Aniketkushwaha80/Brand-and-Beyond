import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {useSelector,useDispatch} from "react-redux"
import { Role,State } from '../../Redux/action';


const Login = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const store=useSelector((store)=>
    store.data)
    
 
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
      "email": formData.email,
      "password": formData.password,
    }
    fetch("https://brandandbeyond.herokuapp.com/login",{
      method:"POST",
      headers:{
          "content-type":"application/json",
      },
      body:JSON.stringify(create),
    
    }).then(data => data.json())
    .then(data =>  { 
       
        if(data.status=="ok"){

dispatch(Role(data.user.role))
dispatch(State(true))

if (data.user.role=="admin"){
    navigate("/admin")
}else{
 
    console.log(data)

    navigate("/product")
}
alert("Successfully login"); 
        } else{
            alert("Login Failed Check Password or email "); 
        }
    })
    .catch((err) => {
         alert ("This is a warning message!");
        console.error(err);
    })
    
    }
    return (
        <form onSubmit={handleSubmit}  >
        <div className="register">
        
        <h2 className="r-heading">Sign in</h2>
        <hr />
       <div className='r-inputs'>
        <lable className="lable " >Email</lable >
        <input  onChange={Handle} type="text" className="name" name='email'/>
        <lable className="lable" >Password</lable >
        <input  onChange={Handle} type="password" className="name" name='password'/>
        <button className="submit"  type="submit" value="Submit">sign in</button>
       
  
  
        
       </div>
       <h2 className="r-heading">Sign Up</h2>
    <Link to="/register">  <button className='create-button'>Create An Account</button></Link>
         </div>
         </form>
    );
};

export default Login;