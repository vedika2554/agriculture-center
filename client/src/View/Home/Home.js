import React from 'react';

import Navbar from "./../../Component/Nvabar/Navbar";
import "./Home.css";
// import Footer from './../../Component/Footer/Footer';




function Home() {

    return (

        <>
        <div>
            <Navbar />
           
            <div className='container-home'>
                
                <div>
                    <img src='https://tse1.mm.bing.net/th?id=OIP.ADxbxfNWjCnbsap-1FQZlgHaEo&pid=Api&P=0&h=180' alt='' className='container-s-img'/>
                </div>
                <div className='info-content'>
                    <h2>Agriculture center </h2>
                    <h1>30%-60% off</h1>
                    <h2>Up to 12 months exchange offer</h2>
                    <h2>No cost emi schedule delivery</h2>
                    <h2>Combo offer big delivery</h2>
                    <button type='button' className='c-btn'> Shop Now</button> 
                    <button type='button' className='c-btn'> Shop Now</button>

                </div>
          
            
            </div>

           <div className='card-h'> 
            <div className='card'>
                <div className='card-1'>
                    <h1 className='head'>Flowers</h1>
                    <p className='c-text'>Flower, the characteristic reproductive structure of angiosperms. As popularly used, the term “flower” especially applies when part or all of the reproductive structure is distinctive in colour and form.</p>
               
                    <img src='https://tse1.mm.bing.net/th?id=OIP.ADxbxfNWjCnbsap-1FQZlgHaEo&pid=Api&P=0&h=180' alt='' className='card-img'/>
                    </div>

                <div className='card-1'>
                <h1 className='head'>Fruits</h1>
                    <p className='c-text'> Fruit, the fleshy or dry ripened ovary of a flowering plant, enclosing the seed or seeds. The principal purpose of the fruit is the protection and dispersal of the seed, though some seedless.</p>
               
                    <img src='https://tse1.mm.bing.net/th?id=OIP.6KeCrTjkGqUYSBckKVjbjQHaEo&pid=Api&P=0&h=180' alt='' className='card-img'/>
                   
                </div>

            </div>
            <div className='card'>
                <div className='card-1'>
                <h1 className='head'>Seeds</h1>
                    <p className='c-text'>A seed is a basic part of any plant. The ovules after fertilization, develop into seeds. A seed is made up of a seed coat and an embryo. The embryo is made up of a radicle, an embryonal axis.</p>
               
                    <img src='https://tse2.mm.bing.net/th?id=OIP.l9_PLD4Ya5Ze6LsnjL9lkwHaE7&pid=Api&P=0&h=180' alt='' className='card-img'/>
                   
                </div>
                <div className='card-1'>
                <h1 className='head'>Vegetables</h1>
                    <p className='c-text'> Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning   edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.</p>
               
                    <img src='https://tse2.mm.bing.net/th?id=OIP.Py4eRbJ0WIFjs51eUrIErAHaEo&pid=Api&P=0&h=180' alt='' className='card-img'/>
                   
                </div>

            </div>
            </div>

        

            </div>



        </>
    )
}




export default Home;

