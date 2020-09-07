import React, { useState, useEffect } from "react";
import { ActivityIndicator } from "react-native";
import * as Location from "expo-location";

import { LocationContext } from "./LocationContext";

function LocationProvider(props) {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  });

  return (
    <LocationContext.Provider
      value={{
        timestamp: location?.timestamp,
        latitude: location?.coords.latitude,
        longitude: location?.coords.longitude,
        altitude: location?.coords.altitude,
        heading: location?.coords.heading,
        accuracy: location?.coords.accuracy,
        speed: location?.coords.speed,
      }}
    >
      {errorMsg || !location ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : (
        props.children
      )}
    </LocationContext.Provider>
  );
}

export default React.memo(LocationProvider);
