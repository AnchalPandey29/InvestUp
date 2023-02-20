import React from 'react'
import { Navigate } from 'react-router-dom'

const Option = () => {
    return (
        <div className=' mx-auto'>
          <h2>Are you a....</h2>
            <div class="form-check mb-4 ps-5" >
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                &nbsp;
                <label class="form-check-label" for="flexRadioDefault1">Startup </label>
            </div>

            <div class="form-check mb-4 ps-5">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                &nbsp;
                <label class="form-check-label" for="flexRadioDefault2">Investor </label>
            </div>

            <div class="form-check mb-4 ps-5">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                &nbsp;
                <label class="form-check-label" for="flexRadioDefault2">Guest</label>
            </div>
        </div>
    )
}

export default Option