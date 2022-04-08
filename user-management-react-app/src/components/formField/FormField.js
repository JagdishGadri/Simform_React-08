import React from "react";
import "./formField.css";

function FormField(props) {
  return (
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">{props.labelName}</label>
      <input
        type={props.type}
        className="form-control"
        name={props.name}
        onChange={props.onChange}
        value={props.value}
        autoComplete="off"
        onBlur={props.onBlur}
      />
      {props.touched && props.error ? (
        <div style={{ color: "Red" }}>{props.error}</div>
      ) : null}
    </div>
  );
}

export default FormField;
