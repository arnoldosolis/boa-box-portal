import Boa_plain_bar from "../Components/boa-plain-bar";
import Boa_red_bar from "../Components/boa-red-bar";
import "./Application-Portal.css";

function Application_Portal() {
  return (
    <div className="Page">
      <Boa_plain_bar />
      <Boa_red_bar loan="Auto Loan Application" />
      <div className="Form">
        <h2>Get Started</h2>
        <h3>Welcome. Apply in just minutes</h3>
        <hr />
        <div className="Loan-Type">
          <label>Loan types *</label>
          <select>
            <option value=""></option>
            <option value="Home Loan">Home Loan</option>
            <option value="Auto Loan">Auto Loan</option>
            <option value="Personal Loan">Personal Loan</option>
          </select>
        </div>
        <hr />
        <div className="continue-return-buttons">
          <button className="continue-button">Continue</button>
          <button className="return-to-overview-button">
            Return to overview
          </button>
        </div>
      </div>
    </div>
  );
}

export default Application_Portal;
