import React from 'react';

function Step5({ formData, setFormData, handleStepChange }) {
  return (
    <div className="reg-step clearfix" id="reg-step-5">
      <div className="reg-step-inner clearfix">
        <h2 className="reg-step-title-1 mb-3">Player Information</h2>
        <div className="form-group mb-2">
          <label className="form-label">First Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) => {
              setFormData({ ...formData, firstName: e.target.value });
            }}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Last Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) => {
              setFormData({ ...formData, lastName: e.target.value });
            }}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Phone :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={formData.phone}
            onChange={(e) => {
              setFormData({ ...formData, phone: e.target.value });
            }}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Country :</label>
          <select className="form-select form-control">
            <option>Canada</option>
            <option>China</option>
            <option>India</option>
            <option>Japan</option>
            <option>Korea</option>
            <option>UAE</option>
            <option>USA</option>
            <option>UK</option>
            <option>Australia</option>
          </select>
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Date of Birth :</label>
          <input
            type="text"
            className="form-control"
            placeholder="MM/DD/YYYY"
            id="inputAppDatetime"
            value={formData.dob}
            onChange={(e) => {
              setFormData({ ...formData, dob: e.target.value });
            }}
          />
        </div>
        <div className="form-group mb-2">
          <label className="form-label">Display Name :</label>
          <input
            type="text"
            className="form-control"
            placeholder="Display Name"
            value={formData.displayName}
            onChange={(e) => {
              setFormData({ ...formData, displayName: e.target.value });
            }}
            
          />
          <div className="form-text mb-1">
            Up to 12 characters without spaces
          </div>
        </div>
        <button className="reg-btn-blue-1 w-100 next-reg-step-btn mt-3" onClick={() => {
            handleStepChange(6);
          }}>
          Continue
        </button>
        <div className="quick-offer-parent mt-3">
          <div className="quick-offer">
            <img
              src={process.env.PUBLIC_URL + '/images/coins-icon-1.png'}
              alt="coins"
              className="me-2"
              width="40"
              height="40"
            />
            <p>Complete Above Information & Get 25 Coin FREE</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step5;
