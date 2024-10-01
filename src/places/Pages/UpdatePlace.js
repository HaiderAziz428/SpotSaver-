import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useForm } from "../../Shared/hooks/form-hook";

import Input from "../../Shared/FormElements/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../Shared/util/validators";
const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Eiffel Tower",
    description:
      "The Eiffel Tower was absolutely breathtaking, offering a truly unique experience. Its charm and beauty were captivating, and I was pleasantly surprised by the short lines to go up.",
    imageUrl:
      "https://imgs.search.brave.com/mnb71GAf1XAtmoWSpfey3gxh4O3nrNoXo1aU60Lu3PA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbmRl/cGVuZGVudHRyYXZl/bGNhdHMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE5LzAx/L0VpZmZlbC1Ub3dl/ci1QYXJpcy0yLmpw/Zw",
    address: "Av. Gustave Eiffel, 75007 Paris, France",
    location: {
      lat: 50.8161451,
      lng: 17.1770774,
    },
    creater: "u1",
  },
  {
    id: "p2",
    title: " Tower",
    description:
      "The Eiffel Tower was absolutely breathtaking, offering a truly unique experience. Its charm and beauty were captivating, and I was pleasantly surprised by the short lines to go up.",
    imageUrl:
      "https://lh5.googleusercontent.com/p/AF1QipPTxHG0_dJooayYKzCB004tccRM5MhxYp6KWa53=w408-h544-k-no",
    address: "Av. Gustave Eiffel, 75007 Paris, France",
    location: {
      lat: 50.8161451,
      lng: 17.1770774,
    },
    creater: "u2",
  },
];
const UpdatePlace = () => {
  const [isLoading, setIsLoading] = useState(true);
  const placeId = useParams().placeId;

  const [formState, inputHandler, setFormData] = useForm(
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

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
          address: {
            value: identifiedPlace.address,
            isValid: true,
          },
        },
        true
      );
      setIsLoading(false);
    }
  }, [setFormData, identifiedPlace]);

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <h2 className="my-2 px-3 py-1 text-xl mt-10 rounded  w-full md:w-auto">
          Could not find place!
        </h2>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
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
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
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
        initialValue={formState.inputs.address.value}
        initialValid={formState.inputs.address.isValid}
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
        UPDATE PLACE
      </button>
    </form>
  );
};

export default UpdatePlace;
