import Boa_plain_bar from "../Components/boa-plain-bar";
import Boa_red_bar from "../Components/boa-red-bar";
import Footer from "../Components/footer";
import "./Application-Portal.css";

import { useNavigate } from "react-router-dom";

function Application_Portal() {
  let navigate = useNavigate();
  return (
    <div className="Application-Portal">
      <Boa_plain_bar />
      <Boa_red_bar loan="Auto Loan Application" />
      <div className="Form">
        <h2 className="get-started">Get Started</h2>
        <h2 className="welcome">Welcome. Apply in just minutes</h2>
        <hr />
        <div className="Loan-Type">
          <label>Loan types *</label>
          <select>
            <option value=""></option>
            <option value="Dealer purchase">Dealer purchase</option>
            <option value="Refinance">Refinance</option>
            <option value="Lease buyout">Lease buyout</option>
            <option value="Private party">Private party</option>
          </select>
        </div>
        <hr />
        <div className="continue-return-buttons">
          <button
            className="continue-button"
            onClick={() => {
              navigate("/Auto_Loan");
            }}
          >
            Continue
          </button>
          <button className="return-to-overview-button">
            Return to overview
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Application_Portal;
