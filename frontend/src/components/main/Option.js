import React from 'react'
import { Navigate } from 'react-router-dom'

const Option = () => {
    return (
        <div className='mx-auto'>
            <label htmlFor="">Are you a ..</label>
            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                &nbsp;
                <label class="form-check-label" for="flexRadioDefault1">Startup </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                &nbsp;
                <label class="form-check-label" for="flexRadioDefault2">Investor </label>
            </div>

            <div class="form-check">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                &nbsp;
                <label class="form-check-label" for="flexRadioDefault2">Guest</label>
            </div>
        </div>
    )
}

export default Option