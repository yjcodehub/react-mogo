import React from 'react'

export default function AboutUs() {
  return (
    <>
      <section className='about py-5'>
        <div className="container text-center">
          <h3>What we do</h3>
          <h2 className='fw-bold'>STORY ABOUT US</h2>
          <span className='my-3 mx-auto d-block bg-danger mb-3 mb-lg-5'></span>
          <p className='mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br /> veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1">
            <div className="col my-3 my-sm-0 ">
              <div className="card border-0 rounded-0">
                <img src="_img/about1.png" alt="about1_image" className='card-img' />
                <div className="card-img-overlay d-flex justify-content-center flex-column rounded-0">
                  <span class="material-icons text-light mb-3">
                    group
                  </span>
                  <h6 className='fw-bold text-light'>SUPER TEAM</h6>
                </div>
              </div>
            </div>
            <div className="col my-3 my-sm-0 ">
              <div className="card border-0 rounded-0">
                <img src="_img/about2.png" alt="about2_image" className='card-img' />
                <div className="card-img-overlay d-flex justify-content-center flex-column rounded-0">
                  <span class="material-icons text-light mb-3">
                    group
                  </span>
                  <h6 className='fw-bold text-light'>SUPER TEAM</h6>
                </div>
              </div>
            </div>
            <div className="col my-3  mx-sm-auto my-sm-3 mx-lg-0 my-lg-0">
              <div className="card border-0 rounded-0">
                <img src="_img/about3.png" alt="about3_image" className='card-img' />
                <div className="card-img-overlay d-flex justify-content-center flex-column rounded-0">
                  <span class="material-icons text-light mb-3">
                    group
                  </span>
                  <h6 className='fw-bold text-light'>SUPER TEAM</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
