import "./Navbar.css"
import{Link} from "react-router-dom"

export default function Navbar(){
    return(


<div className='Nav-Container'>
     <div>
          <a className='Nav-heading1' href="#">Agliculture Center</a>
     </div>
        <div>
          <Link className= 'Nav-heading' to= "/">Home</Link>
          <Link className= 'Nav-heading' to="/login">Login</Link>
          <Link className= 'Nav-heading' to="/signup">Sign-Up</Link>
          <Link className="Nav-heading" to="/nearbystore">Nearby-store</Link>
          <Link className= 'Nav-heading' to="/about">About</Link>
       </div>
</div>
    )
}
