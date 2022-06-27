import React from 'react'
import { NavLink } from 'react-router-dom'

import  Navbar  from './Navbar/index'
import  Counter  from '../Counter/index'
import  Magazine  from '../Magazine/index'
import  Pricing  from '../Pricing/index'
import  OurApp  from '../OurApp/index'
import  OurTeam  from '../OurTeam/index'
import  Footer  from './Footer/index'


const Index = () => {
  return (
    <>
    
    <Navbar />


    <div className="container-fluid bg__header">
          <div class="container z-depth-0">
            <section class="dark-grey-text">
              <div class="row pr-lg-5">
                <div class="col-md-7 mb-4">
                  <div class="view">
                    <img
                      src="https://mdbootstrap.com/img/illustrations/graphics(4).png"
                      class="img-fluid"
                      alt="smaple image"
                    />
                  </div>
                </div>
                <div class="col-md-5 d-flex align-items-center">
                  <div>
                    <h3 class="font-weight-bold mb-4">
                      Material Design Blocks
                    </h3>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adip elit. Maiores
                      deleniti explicabo voluptatem quisquam nulla asperiores
                      aspernatur aperiam voluptate et consectetur minima
                      delectus, fugiat eum soluta blanditiis adipisci, velit
                      dolore magnam.
                    </p>

                    

                    <NavLink to="/signUp">
                    <button
                      type="button"
                      class="btn btn-orange btn-rounded mx-0"
                    >
                      Join Now
                    </button>
                    </NavLink>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>



    <Counter />
    
    <Magazine />

    <Pricing />

    <OurApp />

    <OurTeam />

    <Footer />

    
    
    </>
  )
}

export default Index