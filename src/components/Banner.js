import React from 'react'

export default function Banner() {
  return (
    <>
      <header>
        <div className="card">
          <img src="_img/eagle.png" alt="eagle_image" className='card-img' height="" />
          <div className="card-img-overlay">
            <div className="container">
              {/* Top Navbar */}
              <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand fs-4 fw-bold" href="/">MoGo</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapseControl" aria-controls="collapseControl" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapseControl">
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                    <li className="nav-item mx-3">
                      <a className="nav-link active" aria-current="page" href="/">About</a>
                    </li>
                    <li className="nav-item mx-3">
                      <a className="nav-link active" aria-current="page" href="/">Services</a>
                    </li>
                    <li className="nav-item mx-3">
                      <a className="nav-link active" aria-current="page" href="/">Work</a>
                    </li>
                    <li className="nav-item mx-3">
                      <a className="nav-link active" aria-current="page" href="/">Blog</a>
                    </li>
                    <li className="nav-item mx-3">
                      <a className="nav-link active" aria-current="page" href="/">Contact</a>
                    </li>
                  </ul>
                  <ul className='navbar-nav logo'>
                    <li className="nav-item ms-3">
                      <a className="nav-link" aria-current="page" href="/">
                        <span class="material-icons text-light d-inline">
                          shopping_cart
                        </span>
                      </a>
                    </li>
                    <li className="nav-item ms-3  me-0">
                      <a className="nav-link" aria-current="page" href="/">
                        <span class="material-icons text-light d-inline">
                          search
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* .............. */}

              {/* Banner Content 1 */}
              <div className="row content">
                <div className="col text-light text-center">
                  <h2 className='display-2'>Creative Template</h2>
                  <h1 className='fw-bolder d-none d-lg-block'>WELCOME <br />TO MOGO</h1>
                  <h3 className='fw-bolder d-block d-lg-none display-1'>WELCOME <br />TO MOGO</h3>
                  <span className='my-3 mx-auto d-block bg-light mb-3 mb-lg-5'></span>
                  <button className='btn btn-outline-light'>LEARN MORE</button>
                </div>
              </div>
              {/* .............. */}

              {/* Banner Content 2 */}
              <div className="row d-none d-lg-flex">
                <div className="col">
                  <div className="card bg-transparent border-0">
                    <div class="progress">
                      <div class="progress-bar bg-danger" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className='text-light mt-2 fw-lighter'><span className='fw-bold'>01</span> INTRO</p>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-transparent border-0">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className='text-light mt-2 fw-lighter'><span className='fw-bold'>02</span> WORK</p>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-transparent border-0">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className='text-light mt-2 fw-lighter'><span className='fw-bold'>03</span> ABOUT</p>
                  </div>
                </div>
                <div className="col">
                  <div className="card bg-transparent border-0">
                    <div class="progress">
                      <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <p className='text-light mt-2 fw-lighter'><span className='fw-bold'>04</span> CONTACTS</p>
                  </div>
                </div>
              </div>
              {/* ................ */}
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
