import React, { useEffect, useState } from 'react';
import axios from "axios"
import { useSelector } from 'react-redux';




import { Link, useNavigate } from 'react-router-dom';





const Product = () => {

  const store=useSelector((store)=>
  store)
 
  
  const navigate=useNavigate()
 
  const [state,setstate]=useState(store)


 
console.log(state)

   
    function Data(){
      return (
        <>
      <p1>We are a multi-vertical integrated agency that serves at the intersection of creativity, innovation, communication, technology and performance. Our digital solutions are tailored to your brand needs, allowing you to concentrate on other major aspects of your organization. We design and construct unique websites that complement and support your business goals, we create groundbreaking apps and games across all major mobile platforms, we publicize your brand story on digital channels as well as help you boost sales and earn a decent market share.</p1>
        </>
      )
    }
 
 

  
    return (
   <>
   <h1>Product page</h1>

   

   <div >{state.state == false ?  "Admin or Users can  access this page  LOGIN!!.." :null  } </div>
  


   <div >{state.state == true ?  <Data></Data> :null  } </div>


   
   </>
    )
    }

export default Product;