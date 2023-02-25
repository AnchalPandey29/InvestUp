import { Formik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

  const navigate = useNavigate();

  
  const userSubmit = async (formdata, { setSubmitting }) => {
    console.log(formdata);


    // 1. URL
    // 2. request method - get, post, put, delete , etc.
    // 3. Data you want to sent.
    // 4. data format - json, etc.

    setSubmitting(true);
    const res = await fetch("http://localhost:5000/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    });

    console.log(res.status)
    setSubmitting(false);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: 'Success',
        text: 'You have registered successfully'
      })
      navigate('/login');
    } else {
      // error alert
    }
  }

  return (
    <div>
        <div class="row">
  <div class="col-3">
    
    <div class="nav flex-column nav-pills text-center"id="v-pills-tab" role="tablist"aria-orientation="vertical" >
      <a class="nav-link active" id="v-pills-About Startup-tab" data-mdb-toggle="pill" href="#v-pills-AboutStartup" role="tab"
        aria-controls="v-pills-AboutStartup" aria-selected="true">About Startup</a>
      <a class="nav-link" id="v-pills-ContactInfo-tab" data-mdb-toggle="pill" href="#v-pills-ContactInfo" role="tab"aria-controls="v-pills-ContactInfo"
        aria-selected="false">Contact Info</a>
      <a class="nav-link" id="v-pills-Category And Interests-tab" data-mdb-toggle="pill" href="#v-pills-Category And Interests" role="tab"
      aria-controls="v-pills-Category And Interests" aria-selected="false" >Category And Interests</a >
    </div>
    
  </div>

  <div class="col-9">
    
    <div class="tab-content" id="v-pills-tabContent">
      <div class="tab-pane fade show active" id="v-pills-About Startup"role="tabpanel"aria-labelledby="v-pills-About Startup-tab" >
      <form>
        <div class="col-md-7">
          < div class="file-upload-wrapper">
            <div class="image-section"></div>
            <div class="image-body">
              <span>Browse</span>
              <input type="file" class="image-input" name="image"></input>
            </div>
          </div>
        </div>
      <div className="form-outline mb-4">
      <input type="name" value={values.name} onChange={handleChange} name="name" className="form-control" />
      <label className="form-label" htmlFor="form3Example3">Startup Name</label>
      </div>
  <FormControl className="ps-3 pb-4">
      <FormLabel id="demo-radio-buttons-group-label">Funded Or Bootstrapped</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="none" name="type" onChange={handleChange} value={values.type} >
                      <div className="">
                      <FormControlLabel value=" Funded" control={<Radio />} label="Funded" />
                      <FormControlLabel value="Bootstrapped" control={<Radio />} label="Bootstarpped" />
                     
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <div class="btn-group shadow-0" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Ideation</button>
                <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Validation</button>
                <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Early Traction</button>
                 <button type="button" class="btn btn-outline-secondary" data-mdb-color="dark">Scaling</button>
               </div>
               <div class="form-outline mb-4">
              <textarea class="form-control" id="form6Example7" rows="4"></textarea>
              <label class="form-label" for="form6Example7">Brief</label>
              </div>


        </form>
      </div>
      <div
        class="tab-pane fade"
        id="v-pills-Contact Info"
        role="tabpanel"
        aria-labelledby="v-pills-Contact Info-tab"
      >
        <form>
        <div className="row mb-4 form-floating" onSubmit={handleSubmit}>
                    <div className="col">
                      <div className="form-outline">
                        <input type="email" value={values.email} onChange={handleChange} name="email" className="form-control" />
                        <label className="form-label" for="floatingInputValue">Email</label>
                     </div>
                     <div className="col">
                      <div className="form-outline">
                        <input type="tel" value={values.tel} onChange={handleChange} name="Mobile" className="form-control" />
                        <label className="form-label" for="floatingInputValue">Mobile</label>
                     </div>

                    </div>
                    </div>
                    
                  </div>
                  <div className="row mb-4 form-floating" onSubmit={handleSubmit}>
                    <div className="col">
                      <div className="form-outline">
                        <input type="text" value={values.name} onChange={handleChange} name="state" className="form-control" />
                        <label className="form-label" for="floatingInputValue">State</label>
                     </div>
                     <div className="col">
                      <div className="form-outline">
                        <input type="text" value={values.name} onChange={handleChange} name="city" className="form-control" />
                        <label className="form-label" for="floatingInputValue">city</label>
                     </div>

                    </div>
                    </div>
                    
                  </div>
                  <div className="row mb-4 form-floating" onSubmit={handleSubmit}>
                    <div className="col">
                      <div className="form-outline">
                        <input type="url" value={values.name} onChange={handleChange} name="name" className="form-control" />
                        <label className="form-label" for="floatingInputValue">Website</label>
                     </div>
                     <div className="col">
                      <div className="form-outline">
                        <input type="url" value={values.name} onChange={handleChange} name="name" className="form-control" />
                        <label className="form-label" for="floatingInputValue">Mobile App Link</label>
                     </div>

                    </div>
                    </div>
                    
                  </div>
                  </form>
      </div>
      <div class="tab-pane fade" id="v-pills-Categories and Interests" role="tabpanel" aria-labelledby="v-pills-Categories and Interests-tab">
       Categories and Interest</div>
    </div>
    <form>
    <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref"></label>
    <select class="select">
      <option value="Private Limited Company">Private Limited Company </option>
      <option value="Limited Liability Partnership">Limited Liability Partnership</option>
      <option value="Registered Partnrship">Registered Partnership</option>
      </select>
      </div>
      <div class="col-12">
    <label class="visually-hidden" for="inlineFormSelectPref"></label>
    <select class="select">
      <option value="Private Limited Company">Private Limited Company </option>
      <option value="Limited Liability Partnership">Limited Liability Partnership</option>
      <option value="Registered Partnrship">Registered Partnership</option>
      </select>
      </div>
      
      
    <FormControl className="ps-3 pb-4">
      <FormLabel id="demo-radio-buttons-group-label">Your Interests</FormLabel>
      <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="none" name="type" onChange={handleChange} value={values.type} >
                      <div className="">
                      <FormControlLabel value=" All" control={<Radio />} label="All" />
                      <FormControlLabel value="Investors" control={<Radio />} label="Investors" />
                      <FormControlLabel value="Accelerators" control={<Radio />} label=" Accelerators" />
                      <FormControlLabel value="Mentors" control={<Radio />} label="Mentors" />

                     
                      </div>
                    </RadioGroup>
                  </FormControl>

    

    </form>
  </div>
</div>
</div>
  )
}

export default Register



