import { Link } from "react-router-dom";
import "./navbar.css";

import { useNavigate } from "react-router-dom";


export const Navbar = ()=>{
    const navigate=useNavigate()




  
  

      



    return(

        
          
           
                    
            
           
       
            <div className="navBottom">
              <Link id="home" to={"/"}> <img  src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img/https://brandandbeyondit.com/wp-content/uploads/elementor/thumbs/logo-pqrzcxqnpa8cs4og8ey4g1onyrh9qp6c5isckv9r0g.png" alt="" /></Link>
              <Link className="nav-link" to="/login"><button>Login</button></Link>
                <Link className="nav-link" to="/register"><button>Signup</button></Link>
                <Link className="nav-link" to="/product"><button>product</button></Link>
                <Link className="nav-link" to="/admin"><button>Admin</button></Link>
              
           </div>
  
    )
}