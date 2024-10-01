import React, { useReducer, useEffect } from "react";
import { validate } from "../util/validators"; // Ensure this is properly defined

const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };
    case "TOUCH":
      return {
        ...state,
        isTouched: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isValid: props.initialValid || false, // Use props.valid to set initial validity
    isTouched: false, // Start as untouched, will be set onBlur
  });

  const { id, onInput, validators, element, type, placeholder, rows } = props;
  const { value, isValid, isTouched } = inputState;

  // Update the form state in the parent component whenever input value or validity changes
  useEffect(() => {
    onInput(id, value, isValid);
  }, [id, value, isValid, onInput]);

  const changeHandler = (event) => {
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: validators,
    });
  };

  const touchHandler = () => {
    dispatch({
      type: "TOUCH",
    });
  };

  const elementNode =
    element === "input" ? (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className={`${props.InputClass} ${
          !isValid && isTouched ? "ring-red-500" : ""
        }`}
      />
    ) : (
      <textarea
        id={id}
        rows={rows || 3}
        onChange={changeHandler}
        onBlur={touchHandler}
        value={inputState.value}
        className={`${props.InputClass} ${
          !isValid && isTouched ? "ring-red-500" : ""
        }`}
      />
    );

  return (
    <div
      className={`${
        !isValid && isTouched ? props.Invalid : props.className
      } transition-colors duration-300 ease-in-out`}
    >
      <label htmlFor={id} className={props.labelClass}>
        {props.label}
      </label>
      {elementNode}
      {!isValid && isTouched && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
