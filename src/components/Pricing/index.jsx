import React from "react";

const Index = () => {
  return (
    <>
      <div class="container-fluid my-5 px-0 z-depth-1 deep-purple">
        <section class="container text-center white-text  lighten-2 pt-5 px-lg-5">
          <h3 class="font-weight-bold mt-3 mb-4 pb-2">
            Choose your pricing plan
          </h3>

          <div class="row mb-5">
            <div class="col-lg-4 col-md-12 mb-4">
              <div class="pricing-card">
                <div class="card-body">
                  <p class="display-3">
                    <span class="h5 font-weight-normal pr-2">$</span>29
                  </p>

                  <h5 class="text-uppercase font-weight-normal mb-4">
                    Single Template
                  </h5>

                  <p class="mb-4 pb-2">Single template, lifetime license</p>

                  <a class="btn btn-outline-white btn-md btn-rounded btn-block">
                    Select an album
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="pricing-card">
                <div class="card-body">
                  <p class="display-3">
                    <span class="h5 font-weight-normal pr-2">$</span>99
                  </p>

                  <h5 class="text-uppercase font-weight-normal mb-4">
                    One year membership
                  </h5>

                  <p class="mb-4 pb-2">Get access to all templates</p>

                  <a class="btn btn-white btn-md btn-rounded dark-grey-text btn-block">
                    Sign up
                  </a>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mb-4">
              <div class="pricing-card">
                <div class="card-body">
                  <p class="display-3">
                    <span class="h5 font-weight-normal pr-2">$</span>199
                  </p>

                  <h5 class="text-uppercase font-weight-normal mb-4">
                    Lifetime access
                  </h5>

                  <p class="mb-4 pb-2">Pay only once and have fun forever</p>

                  <a class="btn btn-outline-white btn-md btn-rounded btn-block">
                    Sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
