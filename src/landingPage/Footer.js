import React from "react";

function Footer() {
  return (
    <footer className="mt-5">
      <div className="container p-4">
        <div className="row footer-container">
          <div className="col-12 col-md-3 footer-left">
            <img
              src="media/images/logo.svg"
              className="footer-logo w-50 mt-5"
              alt="Zerodha"
            />
            <p className="text-secondary fs-6 lh-1 mt-4 mb-4 copyright">
              © 2010 - 2024, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <ul className="social-media-list">
              <li className="media-item">
                <a href="/">
                  <i className="fs-5 text-secondary fa-brands fa-x-twitter"></i>
                </a>
              </li>
              <li className="media-item">
                <a href="/">
                  <i className="fs-5 text-secondary fa-brands fa-instagram"></i>
                </a>
              </li>
              <li className="media-item">
                <a href="/">
                  <i className="fs-5 text-secondary fa-brands fa-facebook"></i>
                </a>
              </li>
              <li className="media-item">
                <a href="/">
                  <i className="fs-5 text-secondary fa-brands fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
            <hr className="bg-secondary" />
            <ul className="social-media-list">
              <li className="media-item">
                <a href="/">
                  <i className="fs-5 text-secondary fa-brands fa-youtube"></i>
                </a>
              </li>
              <li className="media-item">
                <a href="/">
                  <i className="fs-5 text-secondary fa-brands fa-whatsapp"></i>
                </a>
              </li>
              <li className="media-item">
                <a href="/">
                  <i className="fs-5 text-secondary fa-brands fa-telegram"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="text-secondary fs-5 fw-400 mb-3 mt-5">Company</h5>
            <a href="/">About</a>
            <br />
            <a href="/">Products</a>
            <br />
            <a href="/">Pricing</a>
            <br />
            <a href="/">Referral programme</a>
            <br />
            <a href="/">Careers</a>
            <br />
            <a href="/">Zerodha.tech</a>
            <br />
            <a href="/">Press & media</a>
            <br />
            <a href="/">Zerodha Cares (CSR)</a>
          </div>
          <div className="col-12 col-md-3">
            <h5 className="text-secondary fs-5 fw-400 mb-3 mt-5">Support</h5>
            <a href="/">Support portal</a>
            <br />
            <a href="/">Contact us</a>
            <br />
            <a href="/">Z-Connect blog</a>
            <br />
            <a href="/">List of charges</a>
            <br />
            <a href="/">Downloads & resources</a>
            <br />
            <a href="/">Videos</a>
            <br />
            <a href="/">Market overview</a>
            <br />
            <a href="/">How to file a complaint?</a>
            <br />
            <a href="/">Status of your complaints</a>
            <br />
          </div>
          <div className="col-12 col-md-3">
            <h5 className="text-secondary fs-5 fw-400 mb-3 mt-5">Account</h5>
            <a href="/">Open an account</a>
            <br />
            <a href="/">Fund transfer</a>
            <br />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col">
            <p className="footer-description text-secondary">
              Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
              Registration no.: INZ000031633 CDSL/NSDL: Depository services
              through Zerodha Broking Ltd. – SEBI Registration no.:
              IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt.
              Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238
              Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
              Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
              Bengaluru - 560078, Karnataka, India. For any complaints
              pertaining to securities broking please write to
              complaints@zerodha.com, for DP related to dp@zerodha.com. Please
              ensure you carefully read the Risk Disclosure Document as
              prescribed by SEBI | ICF
            </p>
            <p className="footer-description text-secondary">
              Procedure to file a complaint on SEBI SCORES: Register on SCORES
              portal. Mandatory details for filing complaints on SCORES: Name,
              PAN, Address, Mobile Number, E-mail ID. Benefits: Effective
              Communication, Speedy redressal of the grievances
            </p>
            <p className="footer-description text-secondary">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </p>
            <p className="footer-description text-secondary">
              Investments in securities market are subject to market risks; read
              all the related documents carefully before investing.
            </p>
            <p className="footer-description text-secondary">
              Attention investors: 1) Stock brokers can accept securities as
              margins from clients only by way of pledge in the depository
              system w.e.f September 01, 2020. 2) Update your e-mail and phone
              number with your stock broker / depository participant and receive
              OTP directly from depository on your e-mail and/or mobile number
              to create pledge. 3) Check your securities / MF / bonds in the
              consolidated account statement issued by NSDL/CDSL every month.
            </p>
            <p className="footer-description text-secondary">
              "Prevent unauthorised transactions in your account. Update your
              mobile numbers/email IDs with your stock brokers. Receive
              information of your transactions directly from Exchange on your
              mobile/email at the end of the day. Issued in the interest of
              investors. KYC is one time exercise while dealing in securities
              markets - once KYC is done through a SEBI registered intermediary
              (broker, DP, Mutual Fund etc.), you need not undergo the same
              process again when you approach another intermediary." Dear
              Investor, if you are subscribing to an IPO, there is no need to
              issue a cheque. Please write the Bank account number and sign the
              IPO application form to authorize your bank to make payment in
              case of allotment. In case of non allotment the funds will remain
              in your bank account. As a business we don't give stock tips, and
              have not authorized anyone to trade on behalf of others. If you
              find anyone claiming to be part of Zerodha and offering such
              services, please create a ticket here.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
