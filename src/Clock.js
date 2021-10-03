import React from "react";

function Clock() {
  const hour = new Date().getHours();
  if (hour < 12) {
    return <p>Good Morning!</p>;
  } else if (hour >= 12 && hour < 18) {
    return <p>Good Afternoon!</p>;
  } else if (hour >= 18) {
    return <p>Good Evening!</p>;
  }
}

export default Clock;
