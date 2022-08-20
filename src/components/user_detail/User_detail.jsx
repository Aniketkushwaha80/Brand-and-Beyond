import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';

import { useParams } from 'react-router-dom'


import { Link, useNavigate } from 'react-router-dom';





const Userdetail = () => {

    const {id} = useParams()
    console.log(id)

    const [data,setdata]=useState([])
   
 
    useEffect(()=>{
        axios.get(`https://brandandbeyond.herokuapp.com/users/${id}`).then((res)=>{
          setdata(res.data)
        })
    },[])
     
    console.log(data)

    
    return (
        <>
      
           
             <div className='userdetail'>
                   <p>Name: {data.username}</p>
                   <p>Email: {data.email}</p>
                   <p>Phone: {data.phone}</p>
                   <p>Password: {data.password}</p>
                   <p>Role: {data.role}</p>
             </div>
                
             
                
 
     
        </>
    )

  
    }

export default Userdetail;