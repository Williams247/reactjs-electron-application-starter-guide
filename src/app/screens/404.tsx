import React from "react";
import { Link } from "react-router-dom";

export function ScreenNotFound() {
  return (
    <div>
      <p>Page not found</p>
      <Link to="/" className="underline">
        Click to go home
      </Link>
    </div>
  );
}
