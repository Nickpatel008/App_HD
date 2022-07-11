import React from "react";
import { NavLink } from "react-router-dom";

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Color_particlesConfig from "../../Configs/color_particlesConfig";

import Navbar from "../Navbar/index";
import Counter from "../Counter/index";
import Magazine from "../Magazine/index";
import Pricing from "../Pricing/index";
import OurApp from "../OurApp/index";
import OurTeam from "../OurTeam/index";
import Footer from "../Footer/index";

const Index = () => {

  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <>
<div className="main__body">

<Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={Color_particlesConfig}
      />




<div className="clip_Wrapped"></div>
<div className="container-fluid bg__header">
        <div class="container z-depth-0  hero__wrapper">
          <section class="dark-grey-text ">
            <div class="row pr-lg-5">
              <div class="col-lg-7 col-md-7 mb-4 ">
                <div class="view">
                  <img
                    src="https://mdbootstrap.com/img/illustrations/graphics(4).png"
                    class="img-fluid"
                    alt="smaple image"
                  />
                </div>
              </div>
              <div class="col-lg-5 col-md-5 d-flex align-items-center hero__right__side">
                <div className="hero__right__side__content p-5">
                  <h3 class="font-weight-bold mb-4">
                  Find the best answer to your technical question, help others answer theirs
                  </h3>
 
                  <p>
                  Every developerdata scientistsystem adminmobile developergame developer has a
tab open to Stack Overflow
                  </p>

                  <NavLink to="/signUp">
                    <button
                      type="button"
                      class="btn btn-orange btn-rounded mx-0"
                    >
                     Join the community
                    </button>
                  </NavLink>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </div>



    
  

      <div className="bg-light">
        

      <Counter />

      <Magazine />

      <Pricing />

      <OurApp />

      <OurTeam />
      </div>
    </>
  );
};

export default Index;
