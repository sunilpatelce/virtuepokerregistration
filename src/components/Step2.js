import React from 'react';

function Step2({ formData, setFormData, handleStepChange }) {
  return (
    <div className="reg-step clearfix" id="reg-step-2">
      <div className="reg-step-inner clearfix">
        <h2 className="reg-step-title-1 mb-3">Verify Email</h2>
        <div className="form-text">
          You should receive an email from us with verification code
        </div>
        <h3 className="reg-step-title-2 my-3">Enter Code :</h3>
        <div className="form-group otp-form-group mb-3">
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
          <input type="text" className="form-control" inputMode="numeric" />
        </div>
        <div className="form-text mb-1">
          Not seeing your verification code ?
        </div>
        <a href="#" className="link-blue-1 mb-4 d-table">
          Send New Code
        </a>
        <button className="reg-btn-blue-1 w-100 next-reg-step-btn mb-3" onClick={() => {
            handleStepChange(3);
          }}>
          Verify
        </button>
        <div className="quick-offer-parent">
          <div className="quick-offer">
            <img
              src={process.env.PUBLIC_URL + '/images/coins-icon-1.png'}
              alt="coins"
              className="me-2"
              width="40"
              height="40"
            />
            <p>Verify Email & Get 25 Coin FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step2;
