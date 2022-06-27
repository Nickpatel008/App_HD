import React from 'react'
import auth_IMG from '../../Assets/images/signupSVG.gif'

const Index = () => {
  return (
    <>
    
    <div className="">

        <div className="container-fluid bg-success sign_main_div">
            <div className="row">
                <div className="col-lg-6">
                    <img src={auth_IMG} />
                </div>
                <div className="col-lg-6">
                    Sign In FORM
                </div>
            </div>
        </div>

    </div>
    
    
    </>
  )
}

export default Index