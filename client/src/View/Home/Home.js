import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from "../../Component/Navbar/Navbar";
import "./Home.css";
import Footer  from '../../Component/Footers/footer';


function Home() {

    return (

        <>
          <Navbar />
        <div className='home'>
          
           
            <Carousel data-bs-theme="dark">
            <Carousel.Item>
        <img
          className="image1"
          src="https://img.freepik.com/premium-photo/bouquet-colorful-pink-orange-roses-mix-flowers-spring-floral-background-wallpaper_407348-1261.jpg?w=2000"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='slide-tital'>Flowers</h5>
          <p className='slide-description1'> We say the plant 'flowers', 'is flowering' or 'is in flower' when this colourful part begins to grow bigger and open out. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image1"
          src="https://lifecareus.com/wp-content/uploads/2022/06/LARGE-bigstock-Slices-Pieces-Whole-Ripe-Cit-394772279.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='slide-tital'>Fruits</h5>
          <p className='slide-description2'>Fruits are good source of vitamins and minerals and are a readily available source. A fruit will boost you instantly.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image1"
          src="https://wallpapercave.com/wp/wp4184188.jpg"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='slide-tital'>Vegetables</h5>
          <p className='slide-description3'>Vegetables are a rich source of folate, a B vitamin that helps your body make new red blood cells. </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="image1"
          src="https://www.thespruce.com/thmb/jYHYJfM37wRP-Fo-QIpVAuxcFR0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/seed-saving-tips-1402414-01-1106495ede874681a06403826da56637.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='slide-tital'>Seeds</h5>
          <p className='slide-description4'>
          Seeds are an important source of food for people and animals. Seeds used for food are often called grains or beans. 
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

           <div className='card-h'> 
            <div className='card'>
                <div className='card-1'>
                    <h1 className='head'>Flowers</h1>
                    <p className='c-text'>Flower, the characteristic reproductive structure of angiosperms. As popularly used, the term “flower” applies when part or all of the reproductive structure is distinctive in colour and form.</p>
               
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
               
                    <img src='https://tse2.mm.bing.net/th?id=OIP.l9_PLD4Ya5Ze6LsnjL9lkwHaE7&pid=Api&P=0&h=180' alt='' className='card-img imgcard'/>
                   
                </div>
                <div className='card-1'>
                <h1 className='head'>Vegetables</h1>
                    <p className='c-text'> Vegetables are parts of plants that are consumed by humans or other animals as food. The original meaning   edible plant matter, including the flowers, fruits, stems, leaves, roots, and seeds.</p>
               
                    <img src='https://tse2.mm.bing.net/th?id=OIP.Py4eRbJ0WIFjs51eUrIErAHaEo&pid=Api&P=0&h=180' alt='' className='card-img'/>
                   
                </div>

            </div>
            </div>

        

            </div>
            <Footer/>

       
  </>

    )
}




export default Home;

