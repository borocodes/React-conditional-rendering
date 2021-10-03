import React from "react";
import Clock from "./Clock";

function App({ loggedIn }) {
  if (loggedIn) {
    return < Clock />;
  } 
  return null;
}

export default App;
