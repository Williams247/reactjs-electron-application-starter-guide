import React from "react";
import { Navigation } from "./components/navigation.tsx";

function View() {
  return (
    <>
      <Navigation />
      <section>
        <p className="font-bold text-center mt-10">Application powered by react electron</p>
      </section>
    </>
  );
}

export default View;
