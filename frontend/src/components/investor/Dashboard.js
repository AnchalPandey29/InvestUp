import { Typography } from '@mui/material'
import React from 'react'

const InvestorDashboard = () => {
  return (
    <>
        <div className='row' style={{backgroundColor:"#9c3353",height:"30vh",alignItems:"center"}}>
          <h2 className='text-center' style={{color:"white"}}>Plant the seed of succes and watch your business grow with <strong style={{color:"yellow"}}>InvestUp</strong>
          <br />
          Invest in innovation with confidence!</h2>
          </div>
         
         <div className="row justify-content-center">
         <img  src="/cute.gif" alt="" style={{width:"700px"}}/>
         </div>
       
        <Typography paragraph>
          {/* para  */}
        </Typography>
        <Typography paragraph>
          {/* para  */}
        </Typography>
        </>
  )
}

export default InvestorDashboard;