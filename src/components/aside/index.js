import React from "react";
import Card from "../card"


function Aside()  {
    return (
      <div className="container py-6 ">
        <div className="columns is-centered  has-text-centered-mobile">
          <div className="column  is-two-thirds-tablet is-full-mobile ">
            <div className="is-mobile mx-6">
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