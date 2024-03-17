import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import {
	PrimaryButton,
	SecondaryButton,
	TertiaryButton,
} from "../../../components/Buttons/DesignedButtons";
import "../../Pages/LoginAndRegisterPages/LoginAndRegister.css"

import "./AddEmployee.css"

function AddEmployee(props) {

  const store = useSelector((store) => store);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
	const dispatch = useDispatch();

  const addEmployee = (event) => {
		event.preventDefault();
		if (firstName && lastName) {
			// dispatch({
			// 	type: "LOGIN",
			// 	payload: {
			// 		username: "username",
			// 		password: "password",
			// 	},
			// });
      console.log('f', firstName, 'l', lastName, 'e', email);
		} else {
			dispatch({ type: "LOGIN_INPUT_ERROR" });
		}
	}; // end login


  return (
      <div className="formPanel">
      <h4>Add Employee </h4>

      {/* -- First Name --  */}
			<form onSubmit={addEmployee} className="form border">
      <div className="justInputs border">
        <div className="input border">
            <label
              htmlFor="firstName"
              style={{ fontWeight: 700 }}
            >
              First Name
            </label>
            <div className="login-input-box">
              <input 
                id="login-input"
                type="text"
                name="firstName"
                required
                value={firstName} 
                onChange={(event) =>
                  setFirstName(event.target.value)
                }
              />
            </div>
          </div>

          {/* -- Last Name --  */}
          <div className="input border">
              <label 
                  htmlFor="lastName"
                  style={{ fontWeight: 700 }}
              >
                  Last Name
              </label>
              <div className="login-input-box">
                <input
                  id="login-input"
                  type="text"
                  name="lastName"
                  required
                  value={lastName} 
                  onChange={(event) =>
                    setLastName(event.target.value)
                  }
                />
              </div>
          </div>
          {/* -- Email -- */}
          <div className="input border">
              <label 
                  htmlFor="email"
                  style={{ fontWeight: 700 }}
              >
                  Email
              </label>
              <div className="login-input-box">
                <input
                  id="login-input"
                  type="text"
                  name="email"
                  value={email} 
                  onChange={(event) =>
                    setEmail(event.target.value)
                  }
                />
              </div>
          </div>
          </div>         
          <PrimaryButton id="addEmployee" className="submitButton" text="Add"  />
        </form>
        </div>
  );
}

export default AddEmployee;
