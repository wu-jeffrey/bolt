import React from "react";

import { LocationContext } from "./LocationContext";

export function useLocation() {
  return React.useContext(LocationContext);
}
