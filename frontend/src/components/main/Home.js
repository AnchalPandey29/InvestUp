import React from 'react'
import './Home.css';

const Home = () => {
  return (
     
  <div>
      <div className="home-container pt-5" >
        <div className="row">
          <div className="col-md-4">
            <h1>InvestUp</h1>
            <p>Explore the funding environment with InvestUp and tap into some of the most relevant models for your startup's growth.</p>
            <button className='btn '> 
              Get started
            </button>
          </div>
          <div className="col-md-4">
            <img className='hero-image' src="\home.png" alt="" />
          </div>
          
        </div>
      </div>

      <div className='row'>
        <div className='col-md-3 p-1'>
            <div className='card'>
                  <img className='card-image' src="\seed.png" alt="" />
                  {/* https://img.freepik.com/free-vector/plant-white_1308-41021.jpg?w=740&t=st=1674664226~exp=1674664826~hmac=dbbe97c9db1b898f9e8bffaa36507ff84122fb5d7306e590f6159b09f6affdae */}
                  <h3>Startup</h3>
                  <p></p>
            </div>
        </div>

        <div className='col-md-3 p-1'>
            <div className='card'>
                  <img className='card-image' src="\plant.png" alt="" />
                  <h3>Startup</h3>
                  
                  <p></p>
            </div>
        </div>
      </div>

      
  </div>
    
  
  )
}

export default Home;