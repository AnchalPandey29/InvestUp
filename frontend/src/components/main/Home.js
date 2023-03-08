import React from 'react'
import './Home.css';
import Eligibility from './Eligibility';
import Testimonial from './Testimonial';
import Subscription from './Subscription';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


const Home = () => {
  return (

    <>
<AnimatePresence>
  <motion.div 
    className="row homerow pt-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
  >

    <motion.div 
      className="col-md-4 p-4 "
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>InvestUp</h1>
      <p>Explore the funding environment with InvestUp and tap into some of the most relevant models for your startup's growth.</p>
      <Link 
        className='btn ' 
        style={{backgroundColor:"#9c3353", color:"#fffefe"}} 
        to="/main/startuplist"
      >
        Explore Startups
      </Link>
    </motion.div>

    <motion.div 
      className="col-md-4 heroimg"
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img className='hero-image' src="\home.png" alt="" />
    </motion.div>

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

  </motion.div>
</AnimatePresence>



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


