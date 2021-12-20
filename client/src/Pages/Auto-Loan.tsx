import Boa_plain_bar from "../Components/boa-plain-bar";
import Boa_red_bar from "../Components/boa-red-bar";
import "./Auto-Loan.css";
function Auto_Loan() {
  return (
    <div className="Page">
      <Boa_plain_bar />
      <Boa_red_bar loan="Auto Loan" />
      <div className="Form">
        <h1> Pleased to meet you </h1>
        <h3>
          We'd like to get to know you better - please tell us a little about
          yourself
        </h3>
        <label>First name</label>
        <input type="text" />
        <label>Middle name</label>
        <input type="text" />
        <label>Last name</label>
        <input type="text" />
        <label>Suffix (optional)</label>
        <select>
          <option value=""></option>
          <option value="Jr">Jr</option>
          <option value="Sr">Sr</option>
          <option value="II">II</option>
          <option value="III">III</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
        </select>
        <label>Phone number</label>
	<input type="text" />
        <label>Phone type</label>
        <select>
          <option value=""></option>
          <option value="Home">Home</option>
          <option value="Work">Work</option>
          <option value="Mobile">Mobile</option>
        </select>
        <label>Email address</label>
        <input type="text" />
        <label>Street address</label>
        <input type="text" />
        <label>Country of residence</label>
        <select id="country" name="country">
          <option value=""></option>
          <option value="United States of America">
            United States of America
          </option>
        </select>
        <label>Social Security</label>
        <input type="text" />
        <label>Date of birth</label>
        <input type="text" placeholder="MM/DD/YYYY" />
        <label>What is your marital status?</label>
        <select>
          <option value=""></option>
          <option value="Married">Married</option>
          <option value="Seperated">Seperated</option>
          <option value="Unmarried">Unmarried</option>
          <option value="Widowed">Widowed</option>
        </select>
        <button>Done</button>
      </div>
    </div>
  );
}

export default Auto_Loan;
