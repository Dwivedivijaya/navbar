import React, { Component } from 'react'
import Image from './image/banner.jpg'
import IMG from './image/logo.png'
import Imag from './image/banner1.jpg'
import Imga from './image/img.jpg'
import Download1 from './image/image.jpg'
import Download4 from './image/download4.jpg'
import Download5 from './image/download5.jpg'
import Logo1 from './image/logo1.png'
import './navbar.css'

export default class navbar extends Component {
    render() {
        return (
          <div className="">
            <nav class="navbar navbar-expand-sm bg-light navbar-light">
            <div className="container-fluid">
             <a class="navbar-brand" href="#">
                 <img src={IMG} style={{height:"35px",width:"35px"}}/>
                      </a>
                     <ul className="navbar-nav" style={{color:"black"}}>
                       <li className="nav-item">
                         <a class="nav-link" href="#"><b>Home</b></a>
                         </li>
                           <li className="nav-item">
                             <a class="nav-link" href="#"><b>About</b></a>
                        </li>
                       <li className="nav-item">
                         <a className="nav-link" href="#"><b>Servics</b></a>
                          </li>
                          <li className="nav-item">
                         <a className="nav-link" href="#"><b>Team</b></a>
                          </li>
                          <li className="nav-item">
                         <a className="nav-link" href="#"><b>Portfolic</b></a>
                          </li>
                             <li className="nav-item">
                                        <a class="nav-link" href="#"><b>Contact Us</b></a>
                                    </li>
                                 </ul>
                               </div>
                            </nav>
  <div class="carousel slide" data-ride="carousel" data-interval="3000" id="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" style={{height:"80vh"}}>
     <img src={Image}  class="d-block w-100 h-100" alt="..." style={{height:"100%",width:"100%"}}/>
         <div class="carousel-caption d-none d-lg-block">
        <h3 className="heading">First slide label</h3>
        
      </div>
    </div>
    <div class="carousel-item" style={{height:"80vh"}}>
      <img src={Imga} class="d-block w-100 h-100"alt="..." style={{height:"100%",width:"100%"}}/>
       <div class="carousel-caption d-none d-lg-block">
       <h3 className="heading">Scond lide label</h3>
        
      </div>
    </div>
    <div class="carousel-item" style={{height:"80vh"}}>
      <img src={Imag}  class="d-block w-100 h-100" alt="..." style={{height:"100%",width:"100%"}}/>
       <div class="carousel-caption d-none d-lg-block">
       <h3 className="heading">Third slide label</h3>
       
      </div>
    </div>
  </div>
   <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    
  </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span></a>
    <ol class="carousel-indicators">
    <li data-target="#carousel" data-slide-to="0" class="active"></li>
    <li data-target="#carousel" data-slide-to="1"></li>
    <li data-target="#carousel" data-slide-to="2"></li>
  </ol>
    </div>
    <div className="container mt-5">
      <div className="row">
      <div className="col-md-12 col-sm-12 col-lg-12">
           <div className="paragraph-text">
          <p className="para"><b>Welcome to Finesse</b></p>
          <p className="parag"><b>Interiors Real Estate Staging</b></p>
          </div>
          </div>
          <div className="row">
      <div className="col-md-6 col-sm-6 col-lg-6">     
           <p className="paragrapha">Let us optimize your property to get it SOLD for TOP DOLLAR in the shortest possible time!</p>
              <p className="aragep">When you hire Finesse Interiors Real Estate Staging, you can expect your property to look like a Model Home!</p>
         </div>
         
         
        
         <div className="col-md-6 col-sm-6 col-lg-6">
           <div className="secondpara-tex">
           <p className="secondpara mt-5">We are a Professional and Certified Staging Company offering home Staging services. We have a full inventory of rental items available. Our experience allows us to optimize your space to help get it SOLD for TOP DOLLAR in the shortest amount of time. Staging is the MOST POWERFUL marketing tool when it comes to selling Real Estate. Everyone knows that all houses will sell...the question becomes, for how much and how quickly? These are two major reasons why EVERY property needs to be Staged before going to market. You only get one chance to make a great first impression! Home Staging showcases the house in a new spotlight with distinctive features that the prospective Buyer will be looking for. The space will be optimized with an eye for detail rendering the house magnificently elegant.</p>
         </div>
         </div>
         </div>
    </div>
    </div>
    
    <div className="container-fluid imagehover">
      <div className="row pt-5">
         <div className="col-md-6 col-sm-6 col-lg-6">
         <div classname="imagebanner">
           <div className="banner">
         <h3 style={{color:"white", padding:"25%"}}>Occupied Staging</h3>
         </div>
         </div>
    </div>
    <div className="col-md-6 col-sm-6 col-lg-6">
    <div classname="imagebanner">
      <div className="banner">
      <h3  style={{color:"white", padding:"25%"}}>VACANT</h3>
      </div>
    </div>
    </div>
  </div>
</div>
<div className="container">
<div className="row">
      <div className="col-md-6 col-sm-6 col-lg-6">     
           <p className="para mt-5">Recent Projects</p>
           <p className="paragrapha">Staged homes sell 88% faster and for 20% more money!" - Margaret Heidenry from realtor.com</p>
         </div>
         <div className="col-md-6 col-sm-6 col-lg-6">
           <div className="secondpara-tex">
           <p className="secondpara mt-5">Let Finesse Interiors Real Estate Staging make this statistic a REALITY for You and your Clients! By Staging properties, Buyers can easily visualize their life in your Listing. Home Staging showcases the house in a new spot-light with distinctive features, with an eye for detail rendering the space splendid and elegant. Staging is done to make the property more appealing and vibrant with the use of furniture, art, and accessories to beautify the home.</p>
         </div>
         </div>
</div>
</div> 
<div className="container">
<div className="row mt-3">
  
      <div className="col-md-6 col-sm-6 col-lg-6">
      <img src={Imga}  class="images d-block w-100 h-100" alt="..." style={{border:"1px solid",padding:"1px"}}/>
      </div>
      
         <div className="col-md-6 col-sm-6 col-lg-6">
         <div className="row">
         <img src={Download5}  class="image d-block w-100 h-50%" alt="..." /> 
         
         <img src={Download4}  class="image d-block w-100 h-50%" alt="..." />   
         </div>
         </div>
        </div>
        </div>
        <div class="container">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
            <img src={Logo1}  className="logo mt-5" alt="..." style={{width:"10%"}} /> 
             </div>
          </div>
        </div>
        <div class="carousel slide" data-ride="carousel" data-interval="2000" id="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active p-5">
      <p>“Sue staged our house for sale and I have to honestly say I was very nervous she was going to come in and criticize our home. I felt an unbelievable comfort from the moment she walked in. She is not there to tear your home apart. Her job is to accent and display the best features of your home. She added sparkle and l style and I only wish I meet her years ago. After she was done making our home shine we sold in 5 days for 90k above asking”.

</p>
         <div class="carousel-caption d-none d-lg-block">
        <h3 className="head"style={{color:"gray",position:"relative",top:"50px"}}>Roxanne Meek</h3>
        
      </div>
    </div>
    <div class="carousel-item p-5">
     <p>“I had the pleasure of recently using Sue`s incredible staging service for a recent listing of mine and I am hooked! Sue is incredible! Magic really! She has the ability to make homes come alive and tell a story. But not only is the service impeccable, but so is she. This listing had a very emotional component attached to it and Sue was warm, caring and gentle with my clients - just what they needed in order to feel comfortable with having her come in and work her magic with the home. Thank You! Thank You! Thank You! Don`t hesitate to give Sue a call - you`ll be VERY happy you did!”
</p>
       <div class="carousel-caption d-none d-lg-block">
       <h3 className="head"  style={{color:"gray",position:"relative",top:"50px"}}>Jane Thuet</h3>
        
      </div>
    </div>
    <div class="carousel-item p-5">
      <p>“This lady deserves more than 5 stars!! I had the pleasure of meeting Sue last year and it has completely changed my business and the way I offer service to my sellers. Sue is a master at her craft and has the ability to transform a space and home well in advance of actually staging it. When she adds her magic touch of elegance and sophistication, my sellers are always blown away with the results and many of them have brought her to their new homes once they move for decorating advice. Thank you Sue for all you have done and continue to do for me and my clients!!”
</p>
       <div class="carousel-caption d-none d-lg-block">
       <h3 className="head" style={{color:"gray",position:"relative",top:"50px"}}>DENA SICARD</h3>
       </div>
    </div>
  </div>
   <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    </a>
  <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span></a>
    </div>
    <div className="container-fluid footer">
      <div className="row pt-5">
        <div className="col-md-12 col-sm-12 col-lg-12"><h3 style={{color:"white"}}>Ready to Stage a Property?</h3></div>
        </div>
       <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12">
           <p className="footertext">Let's begin discussing your Staging needs and find out how we can get you TOP DOLLAR in today's Market.</p>
        </div>
       </div>
       <div className="row">
          <div className="col-md-12 col-sm-12 col-lg-12">
           <a href="" className="btn bg-light">Request A Staging Consultation</a>
        </div>
       </div>
       
      <div className="row">
      <div className="col-md-6 col-sm-6 col-lg-6 footeraddress">
       <h5>HEAD OFFICE</h5>
       <h6>Sue Kempton</h6>
       <h6>416.271.7846</h6>
      <h6>finesseinteriors@rogers.com</h6>
        </div>
        <div className="col-md-6 col-sm-6 col-lg-6 footeradd">
       <h5>REPRESENTATIVE OFFICE</h5>
       <h6>Sarah Brasil</h6>
       <h6>905.299.3957</h6>
      <h6>sbrasilmedia@gmail.com</h6>
        </div>
      </div>
     <div className="row copyright pt-3">
<div className="col-md-6 col-sm-6 col-lg-6">
<p style={{color:"gray", float:"left"}}>©2019 finesseinteriors</p>
  </div>
<div className="col-md-6 col-sm-6 col-lg-6">
<p style={{color:"gray", float:"right"}}>Hand-crafted in Java island</p>
  </div>
</div>
      </div>
    </div>
                       
        )
    }
    }