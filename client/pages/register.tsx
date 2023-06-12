import React, { FormEvent, useState } from "react";

import axios from "axios";
import { NewUser } from "../types";

const Register = (): JSX.Element => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();

    const newUser: NewUser = { name, email, password };

    console.log(newUser);

    axios
      .post("http://localhost:8000/api/register", newUser)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container-fluid">
      <div className="row py-5 bg-secondary text-light">
        <div className="col text-center">
          <h1 className="display-1 text-center py-5">Register Page</h1>
        </div>
      </div>

      <div className="row py-5">
        <div className="col-md-6 offset-md-3">
          <form>
            <div className="form-group p-2">
              <small>
                <label>Your name</label>
              </small>
              <input
                className="form-control"
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group p-2">
              <small>
                <label>Your email</label>
              </small>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group p-2">
              <small>
                <label>Your password</label>
              </small>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group p-2">
              <button
                className="btn btn-primary btn-clock"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
