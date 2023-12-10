import React from "react";
import "./footer.css";

function Footer(){
  return(
    <>
    
    <section class="footer">
        <div class="footer-row">
          <div class="footer-col">
            <h4>Info</h4>
            <ul class="links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Compressions</a></li>
              <li><a href="#">Customers</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Collection</a></li>
            </ul>
          </div>  
          <div class="footer-col">
            <h4>Get Help</h4>
            <ul class="links">
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Shipping</a></li>
              <li><a href="#">Returns</a></li>
              <li><a href="#">Order Status</a></li>
              <li><a href="#">Payment Options</a></li>
            </ul>
          </div> 
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul class="links">
              <li><a href="#">Terms and Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Disclaimer</a></li>
            </ul>
          </div> 
          
          <div class="footer-col">
            <h4>Newsletter</h4>
            <p>
              Subscribe to our AgroGeniusHub website for a weekly dose
              of offers, updates, helpful tips, and
              exclusive offers.
            </p>
            <form action="#">
              <input type="text" placeholder="Enter your email address" required/>
              <button type="submit">SUBSCRIBE</button>
            </form>
            <div class="icons">
              <i class="fa-brands fa-facebook-f"></i> 
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            </div>   
          </div>
      </section>
      </>
    )}

      export default Footer