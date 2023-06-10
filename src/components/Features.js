import React from 'react'
import { FaSearch, FaRegHeart, FaShoppingCart, FaSyncAlt, FaUserAlt, FaBars, FaFacebook, FaTwitter, FaYoutube, FaDollarSign, FaTags, FaThumbsUp, FaCreditCard, FaTruckMoving, FaTruckLoading, FaTruckPickup  } from 'react-icons/fa';

function Features() {
  return (
    <div>
      <section id='features'>
    <div class="row">
  <div class="feature-box col-lg-3">
    <h3 class="firsthead">
    <FaTags /> 
      <br />
      Amazing Value Every Day
    </h3>
    <p class="firstspecs">Items prices that fit your budget</p>
  </div>
  <div class="feature-box col-lg-3">
    <h3>
      <FaThumbsUp />
      <br />
      Successful Customer Service
    </h3>
    <p>We work with a focus on 100% customer satisfaction.</p>
  </div>
  <div class="feature-box col-lg-3">
    <h3 class="lastfeature">
      <FaCreditCard />
      <br />
      All Payment Methods
    </h3>
    <p class="lastspecs">Don't bother with payment details.</p>
  </div>
  <div class="feature-box col-lg-3">
    <h3 class="lastfeature">
      <FaTruckMoving />
      <br />
      Completely free shipping
    </h3>
    <p class="lastspecs">We'll handle the shipping.</p>
  </div>
  
</div>
</section>
    </div>
  )
}

export default Features;
