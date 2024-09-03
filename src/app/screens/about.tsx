import React from "react";
import { Link } from "react-router-dom";

export function AboutScreen() {
  return (
    <div>
      <p>About us screen</p>
      <Link to="/" className="underline">
        Go to Home Screen
      </Link>
      <br />
      <Link to="/unknown" className="underline">
        Visit an unkown route
      </Link>
    </div>
  );
}
