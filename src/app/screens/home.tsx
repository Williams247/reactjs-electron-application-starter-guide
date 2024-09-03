import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

export function HomeScreen() {
  return (
    <div>
      <p className={twMerge("text-lg", "text-[blue]")}>
        Welcome to reactjs electron application starter guide
      </p>
      <Link to="/about" className="underline">
        Go to About Screen
      </Link>
    </div>
  );
}
