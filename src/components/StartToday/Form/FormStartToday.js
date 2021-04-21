import React from "react";
import validate from "./validateInfo";
import useForm from "./useForm";
import "./form.css";

const carsModels = ["BMW", "MERCEDES", "Audi", "Ford"];
const Form = ({ submitForm }) => {
  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );

  return (
    <form onSubmit={handleSubmit} className="form" noValidate>
      {errors.allRequired && (
        <div className="errorSelectbox">{errors.allRequired}</div>
      )}
      <h1>Enter your car details</h1>
      <div className="form-inputs">
        <label className="form-label">Car Make</label>
        <select
          className="select-css"
          value={values.carModel}
          onChange={handleChange}
          id="carModel"
        >
          <option selected disabled value="">
            Select Brand
          </option>
          <option>BMW</option>
          <option>MERCEDES</option>
          <option>AUDI</option>
          <option>VOLVO</option>
        </select>
        {errors.carModel && (
          <div className="errorSelectbox">{errors.carModel}</div>
        )}
      </div>
      <h1>Enter your Contact Info</h1>
      <div className="form-inputs">
        <label className="form-label">Your Full Name</label>
        <input
          className={errors.name ? "form-input errorInput" : "form-input"}
          type="text"
          id="name"
          placeholder="Enter User Name"
          value={values.name}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
      <div className="form-inputs">
        <label className="form-label">Your Phone Number</label>
        <input
          className={errors.phone ? "form-input errorInput" : "form-input"}
          type="number"
          id="phone"
          placeholder="EX: +972 897 564 34"
          value={values.phone}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>

      <button
        className="form-input-btn"
        type="submit"
        disabled={values.disabled ? true : false}
      >
        Sign up
      </button>
    </form>
  );
};

export default Form;
