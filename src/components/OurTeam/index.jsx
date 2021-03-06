import React from "react";

const Index = () => {
  return (
    <>
      <div id="OurTeam" class="container my-5">
        <section class="team-section text-center dark-grey-text">
          <h3 class="font-weight-bold pb-2 mb-4">Our amazing team</h3>
          <p class="text-muted w-responsive mx-auto mb-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
            error amet numquam iure provident voluptate esse quasi, veritatis
            totam voluptas nostrum quisquam eum porro a pariatur veniam.
          </p>

          <div class="row">
            <div class="col-lg-3 col-md-6 mb-4">
              <div class="avatar mx-auto view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).jpg"
                  class="rounded-circle z-depth-1 img-fluid"
                  alt="Sample avatar"
                />

                <div class="mask waves-effect waves-light rgba-white-slight"></div>
              </div>

              <h5 class="font-weight-bold mt-4 mb-3">Anna Williams</h5>
              <p class="text-uppercase blue-text">
                <strong>Graphic designer</strong>
              </p>
              <p class="grey-text">
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
                consectetur, adipisci sed quia non numquam modi tempora eius.
              </p>
              <ul class="list-unstyled mb-0">
                <a class="p-2 fa-lg fb-ic">
                  <i class="fab fa-facebook-f blue-text"> </i>
                </a>
                <a class="p-2 fa-lg tw-ic">
                  <i class="fab fa-twitter blue-text"> </i>
                </a>
                <a class="p-2 fa-lg ins-ic">
                  <i class="fab fa-instagram blue-text"> </i>
                </a>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4">
              <div class="avatar mx-auto  view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg"
                  class="rounded-circle z-depth-1"
                  alt="Sample avatar"
                />
                <div class="mask waves-effect waves-light rgba-white-slight"></div>
              </div>
              <h5 class="font-weight-bold mt-4 mb-3">John Doe</h5>
              <p class="text-uppercase blue-text">
                <strong>Web developer</strong>
              </p>
              <p class="grey-text">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                ipsa accusantium doloremque rem laudantium totam aperiam.
              </p>
              <ul class="list-unstyled mb-0">
                <a class="p-2 fa-lg fb-ic">
                  <i class="fab fa-facebook-f blue-text"> </i>
                </a>
                <a class="p-2 fa-lg ins-ic">
                  <i class="fab fa-instagram blue-text"> </i>
                </a>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4">
              <div class="avatar mx-auto  view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                  class="rounded-circle z-depth-1"
                  alt="Sample avatar"
                />
                <div class="mask waves-effect waves-light rgba-white-slight"></div>
              </div>
              <h5 class="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p class="text-uppercase blue-text">
                <strong>Photographer</strong>
              </p>
              <p class="grey-text">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim est fugiat nulla id eu laborum.
              </p>
              <ul class="list-unstyled mb-0">
                <a class="p-2 fa-lg fb-ic">
                  <i class="fab fa-facebook-f blue-text"> </i>
                </a>
                <a class="p-2 fa-lg ins-ic">
                  <i class="fab fa-instagram blue-text"> </i>
                </a>
                <a class="p-2 fa-lg ins-ic">
                  <i class="fab fa-dribbble blue-text"> </i>
                </a>
              </ul>
            </div>

            <div class="col-lg-3 col-md-6 mb-4">
              <div class="avatar mx-auto  view overlay">
                <img
                  src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                  class="rounded-circle z-depth-1"
                  alt="Sample avatar"
                />
                <div class="mask waves-effect waves-light rgba-white-slight"></div>
              </div>
              <h5 class="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p class="text-uppercase blue-text">
                <strong>Backend developer</strong>
              </p>
              <p class="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
                nisi qui consectetur totam officia voluptates perferendis
                voluptatibus aut.
              </p>
              <ul class="list-unstyled mb-0">
                <a class="p-2 fa-lg fb-ic">
                  <i class="fab fa-facebook-f blue-text"> </i>
                </a>
                <a class="p-2 fa-lg ins-ic">
                  <i class="fab fa-github blue-text"> </i>
                </a>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Index;
