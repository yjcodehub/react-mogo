import React from 'react'

export default function Service() {
  return (
    <>
      <section className="service py-5">
        <div className="container text-center">
          <h3>We work with</h3>
          <h2 className='text-uppercase fw-bold'>Amazing Services</h2>
          <span className='my-3 mx-auto d-block bg-danger my-5 mb-lg-5'></span>
          <div className="row row-cols-lg-3 row-cols-sm-2 row-cols-1 text-start">
            <div className="col my-2">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="_img/clock.png" alt="clock_logo" />
                </div>
                <div class="flex-grow-1 ms-5">
                  <h6 className='mb-3 fw-medium'>PHOTOGRAPHY</h6>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </div>
              </div>
            </div>
            <div className="col my-2">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="_img/design.png" alt="design_logo" />
                </div>
                <div class="flex-grow-1 ms-5">
                  <h6 className='mb-3 fw-medium'>WEB DESIGN</h6>
                  Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </div>
              </div>
            </div>
            <div className="col my-2">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="_img/creativity.png" alt="creativity_logo" />
                </div>
                <div class="flex-grow-1 ms-5">
                  <h6 className='mb-3 fw-medium'>CREATIVITY</h6>
                  Dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </div>
              </div>
            </div>

            <hr className='w-100 my-3 d-none d-lg-block'/>

            <div className="col my-2">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="_img/seo.png" alt="seo_logo" />
                </div>
                <div class="flex-grow-1 ms-5">
                  <h6 className='mb-3 fw-medium'>SEO</h6>
                  Ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
                </div>
              </div>
            </div>
            <div className="col my-2">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="_img/html.png" alt="html_logo" />
                </div>
                <div class="flex-grow-1 ms-5">
                  <h6 className='mb-3 fw-medium'>CSS/HTML</h6>
                  Lorem dolor sit amet, consectetur adipiscing elit, sed do tempor.
                </div>
              </div>
            </div>
            <div className="col my-2">
              <div class="d-flex">
                <div class="flex-shrink-0">
                  <img src="_img/digital.png" alt="digital_logo" />
                </div>
                <div class="flex-grow-1 ms-5">
                  <h6 className='mb-3 fw-medium'>DIGITAL</h6>
                  Sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </div>
              </div>
            </div>


          </div>
        </div>
      </section>
    </>
  )
}
