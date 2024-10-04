import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../Shared/UIElements/Modal";
import Map from "../../Shared/UIElements/Map";

const PlaceItem = (props) => {
  const [showMap, setShowMap] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const openMapHandler = () => setShowMap(true);

  const closeMapHandler = () => setShowMap(false);
  const showDeleteWanringHandler = () => {
    setShowConfirmModal(true);
  };
  const cancelDeleteHandler = () => {
    setShowConfirmModal(false);
  };
  const confirmDeleteHandler = () => {
    console.log("DELETING......");
  };

  return (
    <React.Fragment>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={
          <button
            className="my-2 px-3 py-1 rounded bg-red-500 hover:bg-red-600"
            onClick={closeMapHandler}
          >
            CLOSE
          </button>
        }
      >
        <div className="map-container">
          <Map center={props.coordinates} zoom={16} />
        </div>
      </Modal>
      <Modal
        show={showConfirmModal}
        onCancel={cancelDeleteHandler}
        header="Are you sure?"
        footerClass="text-lg flex justify-between"
        footer={
          <React.Fragment>
            <button
              className="p-2 px-4 rounded bg-yellow-500 hover:bg-yellow-600"
              onClick={cancelDeleteHandler}
            >
              CANCEL
            </button>
            <button
              className=" p-2 px-4 rounded bg-red-500 hover:bg-red-600"
              onClick={confirmDeleteHandler}
            >
              DELETE
            </button>
          </React.Fragment>
        }
      >
        <p>
          Do you want to proceed and delete this place? Please note that it
          can't be undone thereafter.
        </p>
      </Modal>
      <li className="min-w-56 rounded max-w-md bg-white w-2/6 m-10 flex flex-col items-center">
        <div>
          <img className="rounded" src={props.image} alt={props.title} />
        </div>
        <div className="max-w-96 m-3 flex flex-col items-center justify-center">
          <h2 className="text-xl font-bold mb-2">{props.title}</h2>
          <h3 className="text-lg font-bold mb-2">{props.address}</h3>
          <p className="text-md">{props.description}</p>
        </div>
        <span className="block w-full h-0.5 bg-gray-300" />
        <div className="my-3 flex flex-col space-x-0 md:flex-row md:space-x-3">
          <button
            className="my-2 rounded py-1 px-3 border-2 text-yellow-600 border-yellow-500 hover:bg-yellow-500 hover:text-white w-full md:w-auto"
            onClick={openMapHandler}
          >
            VIEW ON MAP
          </button>
          <button className="my-2 px-3 py-1 rounded bg-yellow-500 hover:bg-yellow-600  ">
            <Link to={`/places/${props.id}`}>EDIT</Link>
          </button>
          <button
            className="my-2 px-3 py-1 rounded bg-red-500 hover:bg-red-600 w-full md:w-auto"
            onClick={showDeleteWanringHandler}
          >
            DELETE
          </button>
        </div>
      </li>
    </React.Fragment>
  );
};
export default PlaceItem;
