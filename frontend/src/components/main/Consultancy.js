import React from 'react'

const Consultancy = () => {
  return (
    <div>
        <div className="carousel-item active">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 p-5">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Anna Deynah</h5>
              <p>CEO, Lapharma.co</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                We are a private
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block p-5">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">John Doe</h5>
              <p>Web Developer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid commodi.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star-half-alt fa-sm" />
                </li>
              </ul>
            </div>
            <div className="col-lg-4 d-none d-lg-block p-5">
              <img
                className="rounded-circle shadow-1-strong mb-4"
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                alt="avatar"
                style={{ width: 150 }}
              />
              <h5 className="mb-3">Maria Kate</h5>
              <p>Photographer</p>
              <p className="text-muted">
                <i className="fas fa-quote-left pe-2" />
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti.
              </p>
              <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="fas fa-star fa-sm" />
                </li>
                <li>
                  <i className="far fa-star fa-sm" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Consultancy