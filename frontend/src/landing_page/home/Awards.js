import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="/media/images/awardimage.jpg" alt="awardimage" />
        </div>

        <div className="col-lg-6">
          <h1>Largest stock broker in India</h1>
          <p>
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in
          </p>

          <div className="row">
            <div className="col-6">
              <ul>
                <li>Futures and options</li>
                <li>Commodities and derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and government securities</li>
              </ul>
            </div>
          </div>

          <img
            src="/media/images/press-logos.png"
            alt="press logos"
            style={{ width: "100%", marginTop: "20px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Awards;
