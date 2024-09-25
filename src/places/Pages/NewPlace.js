import React from "react";
import Input from "../../Shared/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/util/validators";
import { useForm } from "../../Shared/hooks/form-hook";

const NewPlace = () => {
  const [formState, inputHandler] = useForm(
    {
      inputs: {
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
    },
    false
  );

  const placeSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  return (
    <form onSubmit={placeSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        className="bg-yellow-500 pt-10 px-5 pb-5 rounded flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        labelClass="mb-3 font-bold text-2xl text-white"
        InputClass="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 rounded flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea" // Correct element type for description
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)"
        className="bg-yellow-500 pt-10 px-5 pb-5 rounded flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        labelClass="mb-3 font-bold text-2xl text-white"
        InputClass="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 rounded flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="textarea" // Correct element type for description
        label="Address"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid Address (at least 5 characters)"
        className="bg-yellow-500 pt-10 px-5 pb-5 rounded flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        labelClass="mb-3 font-bold text-2xl text-white"
        InputClass="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        Invalid="bg-red-500 text-yellow-500 pt-10 px-5 pb-5 rounded flex flex-col max-w-xs lg:max-w-4xl md:max-w-2xl sm:max-w-xl mx-auto mt-10"
        onInput={inputHandler}
      />
      <button
        type="submit"
        disabled={!formState.isValid}
        className={`p-4 flex mt-4 mx-auto rounded-lg ${
          formState.isValid ? "bg-red-500 hover:bg-red-600" : "bg-gray-300"
        }`}
      >
        ADD PLACE
      </button>
    </form>
  );
};

export default NewPlace;
