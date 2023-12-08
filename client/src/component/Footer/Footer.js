import React from "react"

import './Footer.css'

export default function Footer(){
    return(

        <>
        
        <div className="footer">
      <div className="footer-container">
          <div className="footer-col">
          <h4>company</h4>
              <ul>
                  <li><a href="#">about us</a></li>
                  <li><a href="#">our services</a></li>
                  <li><a href="#">privacy policy</a></li>
                  <li><a href="#">partners</a></li>
                  <li><a href="#">careers</a></li>
              </ul>

          </div>
          <div className="footer-col">
          <h4>support</h4>
            <ul>
                <li><a href="#">help center</a></li>
                <li><a href="#">term of services</a></li>
                <li><a href="#">legal</a></li>
                <li><a href="#">privacy policy</a></li>
                <li><a href="#">status</a></li>
            </ul>

          </div>
          <div className="footer-col">
          <h4>follow us</h4>
          <div className="social-link">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>

          

        </div>
        <div className="footer-col">
        <h4>Contact us </h4>
        <input type="email" class="footer-text" placeholder="email" required/>
        <br/>
        <button type="submit" class="submit-btn" onclick="message()">submit</button>
        

         </div>

   </div>
 <hr className="horizontal-row"/>
 <p className="copyright">© 2021 Mozaik. All rights reserved.<br/>

    Privacy policy<br/>
    Terms and conditions</p>

</div>
        </>
    )
};
