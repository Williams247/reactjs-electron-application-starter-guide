import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function ScreenNotFound() {
  return (
    <div>
      <p className={twMerge("text-lg", "text-[blue]")}>Page not found</p>
      <Link to="/" className="underline">
        Click to go home
      </Link>
    </div>
  );
}
