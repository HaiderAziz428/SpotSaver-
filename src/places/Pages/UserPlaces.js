import React from "react";
import PlaceList from "../Components/PlaceList";
import { useParams } from "react-router-dom";

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
const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creater === userId);
  return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
