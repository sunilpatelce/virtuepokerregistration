import React from 'react';

function Step1({ formData, setFormData, handleStepChange }) {
  return (
    <div className="reg-step clearfix" id="reg-step-1">
      <div className="reg-step-inner clearfix">
        <h2 className="reg-step-title-1 mb-3">Create an Account</h2>
        <div className="form-group mb-3">
          <input
            type="email"
            inputMode="email"
            className="form-control"
            value={formData.email}
            placeholder="Email Address"
            onChange={(event) =>
              setFormData({ ...formData, email: event.target.value })
            }
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={formData.password}
            onChange={(event) =>
              setFormData({ ...formData, password: event.target.value })
            }
          />
          <div className="pass-indi-holder">
            <span className="pass-indi bg-danger"></span>
            <span className="pass-indi bg-danger"></span>
            <span className="pass-indi bg-warning"></span>
            <span className="pass-indi bg-success"></span>
          </div>
          <div className="form-text">
            Must be 8 Characters <br />
            (At least 1 Uppercase, Special Symbol & Number)
          </div>
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={(event) =>
              setFormData({ ...formData, confirmPassword: event.target.value })
            }
          />
        </div>
        <button
          className="reg-btn-blue-1 w-100 next-reg-step-btn"
          onClick={() => {
            handleStepChange(2);
          }}
        >
          Continue
        </button>
        <div className="ortext">
          <p>Or Sign up with</p>
        </div>
        <div className="reg-quick-opt-btns">
          <a href="#" className="reg-quick-opt-btn me-2" title="Apple ID">
            <img
              src={process.env.PUBLIC_URL + '/images/Apple_logo_black_1.png'}
              alt="apple"
              className="mw-100 mh-100"
            />
          </a>
          <a href="#" className="reg-quick-opt-btn me-2" title="Google">
            <img
              src={process.env.PUBLIC_URL + '/images/Google_ G _Logo_1.png'}
              alt="apple"
              className="mw-100 mh-100"
            />
          </a>
          <a href="#" className="reg-quick-opt-btn" title="Discord">
            <img
              src={process.env.PUBLIC_URL + '/images/discord-icon_1.png'}
              alt="apple"
              className="mw-100 mh-100"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Step1;
