import React from 'react'

export default function Facts() {
  return (
    <>
      <section className='facts'>
        <div className="container">
          <div className="row row-cols-lg-5 row-cols-sm-3 row-cols-2 text-center text-uppercase text-light">
            <div className="col border py-5">
              <h1 className='display-2 fw-bold'>42</h1>
              <p>Web design projects</p>
            </div>
            <div className="col border py-5">
              <h1 className='display-2 fw-bold'>123</h1>
              <p>Happy Clients</p>
            </div>
            <div className="col border py-5">
              <h1 className='display-2 fw-bold'>15</h1>
              <p>Award winner</p>
            </div>
            <div className="col ms-sm-auto border py-5">
              <h1 className='display-2 fw-bold'>99</h1>
              <p>Cup of coffee</p>
            </div>
            <div className="col mx-auto me-sm-auto border py-5">
              <h1 className='display-2 fw-bold'>24</h1>
              <p>Memers</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
