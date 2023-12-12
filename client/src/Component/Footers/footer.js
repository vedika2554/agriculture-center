import React from "react";
import "./footer.css";

function Footer(){
  return(
    <>
    
    <section class="footer">
        <div class="footer-row">
          <div class="footer-col">
            <h4>Categories</h4>
            <ul class="links">
              <li><a href="/fruits">Fruit</a></li>
              <li><a href="/flowers">Flowers</a></li>
              <li><a href="/vegitable">Vegetable</a></li>
              <li><a href="/seeds">Seed</a></li>
           
            </ul>
          </div>  
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul class="links">
              <li><a href="/about">About</a></li>
              <li><a href="/nearbystore">Nearbystore</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Faq</a></li>
            </ul>
          </div> 
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="links">
            <li><a href="/">Home</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/signup">Signup</a></li>
              <li><a href="#">Product</a></li>
            </ul>
          </div> 
          <div className="footer-col">
  	 			<h4>follow us</h4>
  	 			<div className="social-links">
  	 				<a href="#"><i class="fa-brands fa-facebook"></i></a>
  	 				<a href="#"><i className="fab fa-twitter"></i></a>
  	 				<a href="#"><i className="fab fa-instagram"></i></a>
  	 				<a href="#"><i className="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
          <div class="footer-col">
            <h4>AgroGeniusHub</h4>
            <p>
              Subscribe to our AgroGeniusHub website for a weekly dose
              of offers, updates, helpful tips, and
              exclusive offers.
            </p>
            <form action="#">
              <input type="text" placeholder="Enter your email address" required/>
              <button type="submit">SUBSCRIBE</button>
            </form>
         
            </div>   
          </div>
      </section>
      </>
    )}

      export default Footer