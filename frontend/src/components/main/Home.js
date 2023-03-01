import React from 'react'
import './Home.css';
import Eligibility from './Eligibility';
import Testimonial from './Testimonial';
import Subscription from './Subscription';

const Home = () => {
  return (

    <>

      <div className="home-container pt-5" >
        <div className="row">

          <div className="col-md-4 p-4 ">
            <h1>InvestUp</h1>
            <p>Explore the funding environment with InvestUp and tap into some of the most relevant models for your startup's growth.</p>
            <button className='btn ' style={{backgroundColor:"#9c3353", color:"#fffefe"}}>
              Get started
            </button>
          </div>
          <div className="col-md-4 heroimg">
            <img className='hero-image' src="\home.png" alt="" />
          </div>

       

          <svg
            className="hero-waves"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28 "
            preserveAspectRatio="none"
          >
            <defs>
              <path
                id="wave-path"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              ></path>
            </defs>
            <g className="wave1">
              <use xlinkHref="#wave-path" x={50} y={2} fill="rgba(156, 51, 83, 0.2)"></use>
            </g>
            <g className="wave2">
              <use xlinkHref="#wave-path" x={50} y={4} fill="rgba(156, 51, 83, 0.5)"></use>
            </g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x={50} y={6} fill="rgba(156, 51, 83)"></use>
            </g>
          </svg>

        </div>



      </div>

      <Eligibility />
      <Testimonial/>
      <Subscription/>
      
    </>


  )
}

export default Home;

//startup list details add
//profile page
//detail id se


