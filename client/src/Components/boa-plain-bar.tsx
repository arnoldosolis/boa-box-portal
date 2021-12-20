import boa_plain_bar_logo from "../Images/boa-plain-bar-logo.svg";

function Boa_plain_bar() {
  return (
    <div style={{ backgroundColor: "White" }}>
      <img
        style={{
          height: "50px",
          width: "300px",
          paddingTop: "10px",
          paddingLeft: "20px",
        }}
        src={boa_plain_bar_logo}
      />
    </div>
  );
}

export default Boa_plain_bar;
