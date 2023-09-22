import React from "react";
import Card from "../card"


function Aside() {
  return (
    <div className="container py-6 is-max-desktop">
      <div className="columns is-centered  has-text-centered-mobile">
        <div className="column">
          <div className="is-mobile mx-3">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aside