import React from "react";

export const LocationContext = React.createContext({
  timestamp: "",
  latitude: 0,
  longitude: 0,
  altitude: 0,
  heading: 0,
  accuracy: 0,
  speed: 0,
});
