import React from "react";
import { Link } from "react-router-dom";

export function HomeScreen() {
  return (
    <div>
      <p>Welcome to reactjs electron application starter guide</p>
      <Link to="/about" className="underline">
        Go to About Screen
      </Link>
    </div>
  );
}
