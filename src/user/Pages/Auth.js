import React, { useState, useContext } from "react";
import Input from "../../Shared/FormElements/Input";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators";
import { useForm } from "../../Shared/hooks/form-hook";
import { AuthContext } from "../../Shared/context/auth-context";

const Auth = () => {
  const auth = useContext(AuthContext);
  const [isLogin, setIsLoginMode] = useState(true);
  const [formstate, inputHandler, setFormData] = useForm(
    {
      email: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formstate.inputs);
    auth.login();
  };
  const switchModeHandler = () => {
    if (!isLogin) {
      setFormData(
        { ...formstate.inputs, name: undefined },
        formstate.inputs.email.isValid && formstate.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          ...formstate.inputs,
          name: {
            value: "",
            isValid: false,
          },
        },
        false
      );
    }
    setIsLoginMode((prevMode) => !prevMode);
  };
  return (
    <div className="flex flex-col px-10  max-w-sm lg:max-w-4xl md:max-w-2xl sm:max-w-xl mt-16 bg-gray-800  w-full mx-auto shadow-lg shadow-slate-700 mb-10">
      <h2 className="text-yellow-500 mt-4 p-7 font-bold text-3xl font-poppins flex  justify-center">
        Login Required
      </h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogin && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Your Name"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name."
            onInput={inputHandler}
            className="bg-yellow-500 pt-10 px-5 pb-5 flex flex-col  lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
            labelClass="mb-3 font-bold text-2xl text-white"
            InputClass="block w-full -md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
            Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 flex flex-col  lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Plese enter a valid email address"
          onInput={inputHandler}
          className="bg-yellow-500 pt-10 px-5 pb-5 flex flex-col  lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
          labelClass="mb-3 font-bold text-2xl text-white"
          InputClass="block w-full -md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 flex flex-col  lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Plese enter a valid password, at least 5 characters"
          onInput={inputHandler}
          className="bg-yellow-500 pt-10 px-5 pb-5 flex flex-col  lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
          labelClass="mb-3 font-bold text-2xl text-white"
          InputClass="block w-full -md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
          Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 flex flex-col lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        />
        <button
          type="submit"
          disabled={!formstate.isValid}
          className={`m-6 rounded-2xl p-4 flex mt-4 mx-auto -lg ${
            formstate.isValid ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
          }`}
        >
          {isLogin ? "LOGIN" : "SIGNUP"}
        </button>
        <button
          onClick={switchModeHandler}
          className="flex items-center justify-center mx-auto my-2 rounded py-1 px-3 border-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500 hover:text-white "
        >
          SWITCH TO {isLogin ? "SIGNUP" : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Auth;
