import React from 'react'

function Footer() {
  return (
    <div>
      <div className='footer'>
  <div className='left-side'>
    <h6>
    CUSTOMER SERVICES
    </h6>
    <h1>(+777) 450-15-415</h1>
    <h6>Monday – Friday: 9:00 - 20:00</h6>
  </div>
  <div className='right-side'>
  <h6>NEWSLETTER</h6>
  <form class="form-inline" >
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Your Email" style={{borderRadius: "0"}}></input>
  <button type="submit" class="btn btn-dark" style={{borderRadius: "0"}}>Submit</button>
  </form>
  </div>
</div>

<div className='footer-final'>
  <div className=''>
    <h4 style={{color: "white"}}>About Wooma</h4>
    <br></br>
    <p>Wooma inside</p>
    <p>About us</p>
    <p>Company</p>
    <p>Careers</p>
    <p>Brands</p>
  </div>
  <div className=''>
    <h4 style={{color: "white"}}>Categories</h4>
    <br></br>
    <p>Rings</p>
    <p>Accessories</p>
    <p>Earrings</p>
    <p>Gold Buckle</p>
    <p>Bracelets</p>
  </div>

  <div className=''>
    <h4 style={{color: "white"}}>Help</h4>
    <br></br>
    <p>Order Tracking</p>
    <p>Terms & Conditions</p>
    <p>Privacy Policy</p>
    <p>Tutorials</p>
    <p>FAQ</p>
  </div>

  <div className=''>
    <h5 style={{color: "white"}}>hello@demomyjewelry.com</h5>
    <br></br>
    <h6 style={{color: "white"}}>FOLLOW</h6>
    <div style={{display: "flex"}}>
    <p style={{marginRight: "20px"}}><i class="fab fa-facebook"></i> </p>
    <p style={{marginRight: "20px"}}><i class="fab fa-twitter"></i> </p>
    <p style={{marginRight: "20px"}}><i class="fab fa-youtube"></i> </p>
    <p style={{marginRight: "20px"}}><i class="fab fa-telegram"></i> </p>
    <p style={{marginRight: "20px"}}><i class="fab fa-whatsapp"></i> </p>
    </div>
    <h6 style={{color: "white", marginTop: "100px"}}>COPYRIGHT - MYJEWELRY.com</h6>
  </div>

</div>
    </div>
  )
}

export default Footer;
