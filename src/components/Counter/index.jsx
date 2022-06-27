import React from 'react'

const Index = () => {
  return (
    <>

<div class="">
<div class="container-fluid grey my-2 z-depth-1 px-0 rounded">


<section class="container  white-text  p-5 rounded">
  
  <h3 class="text-center font-weight-bold mb-4 pb-2">Counter</h3>

  <div class="row">

    <div class="col-md-4 mb-4">
      <div class="row">
        <div class="col-6 pr-0">
          <h4 class="display-4 text-right mb-0 count-up" data-from="0" data-to="42" data-time="2000">42</h4>
        </div>

        <div class="col-6">
          <p class="text-uppercase font-weight-normal mb-1">Projects</p>
          <p class="mb-0"><i class="fas fa-briefcase fa-2x mb-0"></i></p>
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-4">
      <div class="row">
        <div class="col-6 pr-0">
          <h4 class="display-4 text-right mb-0 count1" data-from="0" data-to="3500" data-time="2000">3,500</h4>
        </div>

        <div class="col-6">
          <p class="text-uppercase font-weight-normal mb-1">Customers</p>
          <p class="mb-0"><i class="fas fa-user fa-2x mb-0"></i></p>
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-4">
      <div class="row">
        <div class="col-6 pr-0">
          <h4 class="display-4 text-right"><span class="d-flex justify-content-end"><span class="count2" data-from="0" data-to="100" data-time="2000">0</span> %</span></h4>
        </div>

        <div class="col-6">
          <p class="text-uppercase font-weight-normal mb-1">Satisfaction</p>
          <p class="mb-0"><i class="fas fa-smile fa-2x mb-0"></i></p>
        </div>
      </div>
    </div>

  </div>

</section>


</div>

</div>


    </>
  )
}

export default Index