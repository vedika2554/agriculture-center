import React from 'react';
import Navbar from"./../../Component/Nvabar/Navbar";
import "./Home.css";
import Footer from './../../Component/Footer/Footer';



function Home() {

    return(
<>
    <Navbar/>


    
    <div class="Nav-Container">
        <div>
        <a class=".Nav-heading1">Agliculture Center</a>
        </div>
        <div>
       <a class="Nav-heading">Home</a>
       <a class="Nav-heading">Login</a>
       <a class="Nav-heading">Sign-Up</a>
       <a class="Nav-heading">About</a>
    </div>
    </div>

    <h1>Agliculture Center</h1>

    <div className='Container'>
     
        <div className='card'>
            
       </div>
       <div className='card'>
            
       </div>

       <div className='card'>
            
       </div>

       <div className='card'>
            
       </div>

    </div>
    <Footer/>

    </>
        

    )}
    
export default Home


    

