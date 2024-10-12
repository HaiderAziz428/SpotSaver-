import React from "react";
import { useForm } from "../../Shared/hooks/form-hook";
import Input from "../../Shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../Shared/util/validators";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs); // You could send this data to a backend
  };

  return (
    <form className="place-form" onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        className="bg-yellow-500 pt-10 px-5 pb-5 flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        labelClass="mb-3 font-bold text-2xl text-white"
        InputClass="block w-full -md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (min. 5 characters)."
        onInput={inputHandler}
        className="bg-yellow-500 pt-10 px-5 pb-5 flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        labelClass="mb-3 font-bold text-2xl text-white"
        InputClass="block w-full -md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
      />
      <Input
        id="address"
        element="textarea"
        label="Address"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid address (min. 5 characters)."
        onInput={inputHandler}
        className="bg-yellow-500 pt-10 px-5 pb-5 flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        labelClass="mb-3 font-bold text-2xl text-white"
        InputClass="block w-full -md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
      />
      <button
        type="submit"
        disabled={!formState.isValid}
        className={`p-4 flex mt-4 mx-auto -lg ${
          formState.isValid ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
        }`}
      >
        ADD PLACE
      </button>
    </form>
  );
};

export default NewPlace;
