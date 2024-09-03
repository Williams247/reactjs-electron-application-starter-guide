import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function AboutScreen() {
  return (
    <div>
      <p className={twMerge("text-lg", "text-[blue]")}>About us screen</p>
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
