import Boa_plain_bar from "../Components/boa-plain-bar";
import Boa_red_bar from "../Components/boa-red-bar";
import "./Application-Portal.css";

function Application_Portal() {
  return (
    <div className="Body">
      <Boa_plain_bar />
      <Boa_red_bar loan="Auto Loan Application" />
      <div className="Form">
        <h2
          style={{
            color: "#012169",
            paddingTop: "40px",
            paddingLeft: "30px",
            paddingBottom: "20px",
            fontSize: "20px",
          }}
        >
          Get Started
        </h2>
        <h3 style={{ color: "#6b5e51", paddingLeft: "30px" }}>
          Welcome. Apply in just minutes
        </h3>
        <hr style={{ margin: "30px" }} />
        <div
          style={{
            paddingLeft: "30px",
            display: "flex",
            flexDirection: "column",
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <label style={{ fontSize: "15px" }}>Loan types *</label>
          <select style={{ height: "40px", width: "400px" }}>
            <option value=""></option>
            <option value="Home Loan">Home Loan</option>
            <option value="Auto Loan">Auto Loan</option>
            <option value="Personal Loan">Personal Loan</option>
          </select>
        </div>
        <hr style={{ margin: "30px" }} />
      </div>
    </div>
  );
}

export default Application_Portal;
