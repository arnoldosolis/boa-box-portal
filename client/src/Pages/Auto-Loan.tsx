import Boa_plain_bar from "../Components/boa-plain-bar";
import Boa_red_bar from "../Components/boa-red-bar";
import Footer from "../Components/footer";
import "./Auto-Loan.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Auto_Loan() {
  let navigate = useNavigate();
  const [uniqueFile, setUniqueFile] = useState<File>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [ssn, setSSN] = useState<string>("");
  const uploadApplication = () => {
    axios
      .post("http://localhost:3001/upload", {
        newFolder: `${firstName}_${lastName}_${ssn}`,
        fileName: "SSN",
        uniqueFile: uniqueFile,
      })
      .then((response) => console.log(response));
  };

  return (
    <div className="Auto-Loan">
      <Boa_plain_bar />
      <Boa_red_bar loan="Auto Loan" />
      <div className="Form">
        <h1> Pleased to meet you </h1>
        <h3>
          We'd like to get to know you better - please tell us a little about
          yourself
        </h3>
        <label>First name</label>
        <input
          type="text"
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        />
        <label>Middle name</label>
        <input type="text" />
        <label>Last name</label>
        <input
          type="text"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
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
        <input
          type="text"
          onChange={(e) => {
            setSSN(e.target.value);
          }}
        />
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
        <label>Please upload a photo of your ID</label>
        <form encType="multipart">
          <input
            type="file"
            onChange={(e) => {
              // @ts-ignore: Object is possibly 'null'.
              setUniqueFile(e.target.files[0]);
            }}
          />
        </form>
        <button
          onClick={() => {
            uploadApplication();
            navigate("/Done");
          }}
        >
          Done
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Auto_Loan;
