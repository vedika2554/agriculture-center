import "./Navbar.css"
import{Link} from "react-router-dom"

export default function Navbar(){
    return(


<div className='Nav-Container'>
     <div>
          <a className='Nav-heading1'>Agliculture Center</a>
     </div>
        <div>
          <Link className= 'Nav-heading' to= "/">Home</Link>
          <Link className= 'Nav-heading' to="/">Login</Link>
          <Link className= 'Nav-heading' to="/">Sign-Up</Link>
          <Link className= 'Nav-heading' to="/">About</Link>
       </div>
</div>
    )
}
