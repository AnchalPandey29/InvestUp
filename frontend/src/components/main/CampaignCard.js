import React from 'react';


const CampaignCard = ({ imageUrl, title, description }) => {

  

  return (

    <div>
 
   
      <div className="input-group m-5" style={{width:"40%"}}>
        <div className="form-outline">
          <input type="search" id="form1" className="form-control" />
          <label className="form-label" htmlFor="form1">
            Search
          </label>
        </div>
        <button type="button" className="btn btn-primary">
          <i className="fas fa-search" />
        </button>
      </div>




      <div className='card mx-auto m-5 ms-5 me-5 p-4' style={{ width: "auto", height: "fit-content" }}>


        {/*Section: News of the day*/}
        <div className="row gx-5">
          <div className="col-md-6 mb-4">
            <div
              className="bg-image hover-overlay ripple shadow-2-strong rounded-5 "
              data-mdb-ripple-color="light"
            >
              <img
                src={imageUrl}
                className="img-fluid mx-auto"
                style={{ maxHeight: "150px", display: "block" }}
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                />
              </a>
            </div>
          </div>
          <div className="col-md-6 mb-4">
            <span className="badge bg-primary px-2 py-1 shadow-1-strong mb-3">
                Limited Seats
            </span>
            <h4>
              <strong> {title} </strong>
            </h4>
            <p className="text-muted">
              {description}
            </p>
            <button type="button" className="btn" style={{ backgroundColor: "#9c3353", color: "white" }}>
              Read more
            </button>
          </div>
        </div>
        {/*Section: News of the day*/}
      </div>

    </div>
  );
};

export default CampaignCard;
