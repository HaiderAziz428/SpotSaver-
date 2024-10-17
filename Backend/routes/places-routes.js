const express = require("express");

const router = express.Router();

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Eiffel Tower",
    description:
      "The Eiffel Tower was absolutely breathtaking, offering a truly unique experience. Its charm and beauty were captivating, and I was pleasantly surprised by the short lines to go up.",
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
    address: "Av. Gustave Eiffel, 75007 Paris, France",
    location: {
      lat: 50.8161451,
      lng: 17.1770774,
    },
    creater: "u2",
  },
];
router.get("/:pid", (req, res, next) => {
  const placeId = req.params.pid;
  const place = DUMMY_PLACES.find((p) => {
    return p.id === placeId;
  });
  if (!place) {
    const error = new Error("Could not find a place for the provided id");
    error.code = 404;
    throw error;
  }

  res.json({ place });
});
router.get("/user/:uid", (req, res, next) => {
  const userId = req.params.uid;
  const place = DUMMY_PLACES.find((p) => {
    return p.creater === userId;
  });
  if (!place) {
    const error = new Error("Could not find a place for the provided id");
    error.code = 404;
    return next(error);
  }

  res.json({ place });
});
module.exports = router;
