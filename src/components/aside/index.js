import React from "react";
import Card from "../card"


function Aside()  {
    return (
      <div className="container is-max-desktop">
        <div className="columns is-centered">
          <div className="column">
            <div className="is-flex is-justify-content-center">
              <Card />
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Aside