import React, { useState } from "react";
import axios from "axios";
import { url } from "../config/config";

export default function ScheduleViewingPage() {
  const firstNameLabel = "firstName";
  const lastNameLabel = "lastName";
  const emailLabel = "email";
  const phoneNumberLabel = "phnumber";
  const addressLabel = "address";
  const dateLabel = "date";
  const passwordLabel = "password";

  const [message, set_message] = useState("");
  const [info, set_Info] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    birthDate: "",
  });

  function checkProperties(obj) {
    for (var key in obj) {
      if (obj[key] === null || obj[key] === "") return true;
    }
    return false;
  }

  async function submitUser() {
    const config = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      email: email,
      phone: phone,
      address: address,
    };
    await axios.post(`${url}/customers`, config);
  }
  const {
    firstName,
    lastName,
    email,
    password,
    phone,
    address,
    birthDate: date,
  } = info;

  return (
    <div>
      <h1>Here you can sign up to Krisz's webshop!</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          {
            const infoCheck = checkProperties(info);
            if (infoCheck) {
              console.log("You missed something");
            } else {
              console.log(info);
              set_message("You have successfully submitted your form.");
              submitUser();
            }
          }
        }}
      >
        <label htmlFor={firstNameLabel}>First Name: </label>
        <input
          type="text"
          id={firstNameLabel}
          name={firstNameLabel}
          value={firstName}
          onChange={(event) => {
            set_Info({ ...info, firstName: event.target.value });
          }}
        />
        <br />

        <label htmlFor={lastNameLabel}>Last Name: </label>
        <input
          type="text"
          id={lastNameLabel}
          name={lastNameLabel}
          value={lastName}
          onChange={(event) => {
            set_Info({ ...info, lastName: event.target.value });
          }}
        />
        <br />

        <label htmlFor={emailLabel}>E-mail: </label>
        <input
          type="text"
          id={emailLabel}
          name={emailLabel}
          value={email}
          onChange={(event) => {
            set_Info({ ...info, email: event.target.value });
          }}
        />
        <br />

        <label htmlFor={passwordLabel}>Password: </label>
        <input
          type="password"
          id={passwordLabel}
          name={passwordLabel}
          value={password}
          onChange={(event) => {
            set_Info({ ...info, password: event.target.value });
          }}
        />
        <br />

        <label htmlFor={addressLabel}>Address: </label>
        <input
          type="text"
          id={addressLabel}
          name={addressLabel}
          value={address}
          onChange={(event) => {
            set_Info({ ...info, address: event.target.value });
          }}
        />
        <br />

        <label htmlFor={phoneNumberLabel}>Phone number: </label>
        <input
          type="text"
          id={phoneNumberLabel}
          name={phoneNumberLabel}
          value={phone}
          onChange={(event) => {
            set_Info({ ...info, phone: event.target.value });
          }}
        />
        <br />

        <label htmlFor={dateLabel}>Date of birth:</label>
        <input
          type="date"
          id={dateLabel}
          name={dateLabel}
          value={date}
          onChange={(event) => {
            set_Info({ ...info, birthDate: event.target.value });
          }}
        />
        <br />
        <br />
        <button type="submit">submit</button>
      </form>

      <br />
      {message}
    </div>
  );
}
