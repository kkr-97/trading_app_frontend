import React from "react";

function Signup() {
  return (
    <div className="signup-container container ">
      <div className="row ">
        <div className="col-12 col-lg-7 p-5 text-center">
          <img
            src="media/images/signup.png"
            alt="sign up"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-12 col-lg-5 p-5 text-center text-lg-start d-flex flex-column justify-content-center align-items-start">
          <h2 className="mb-2">Signup now</h2>
          <p className="text-secondary">Or track your existing application.</p>
          <div className="input-group mb-3 d-flex flex-row">
            <div className="input-group-prepend">
              <span
                className="input-group-text text-secondary"
                id="basic-addon1"
              >
                +91
              </span>
            </div>

            <input
              type="text"
              id="phone-input"
              placeholder="Enter Mobile Number..."
              className="form-control"
              aria-describedby="basic-addon1"
            />
          </div>
          <p className="text-secondary small">
            You will receive an OTP on your number
          </p>
          <button className="btn btn-primary mt-2">Continue</button>
          <a href="/sign-up" className="small text-primary mt-3">
            Want to open an NRI account?
          </a>
        </div>
      </div>
      <div className="row">
        <p className="small text-secondary text-center">
          I authorise Zerodha to contact me even if my number is registered on
          DND. I authorise Zerodha to fetch my KYC information from the C-KYC
          registry with my PAN. Please visit{" "}
          <a
            className="text-primary"
            href="https://support.zerodha.com/category/console/reports/other-queries/articles/details-collected-when-opening-an-account"
          >
            this article
          </a>{" "}
          to know more.
          <br />
          <br />
          If you are looking to open a HUF, Corporate, Partnership, or NRI
          account, you have to use the offline forms. For help,{" "}
          <a
            className="text-primary"
            href="https://support.zerodha.com/category/account-opening/company-partnership-and-huf-account-opening?language=english"
          >
            click here
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default Signup;
