import React from "react";

function Cal(props) {
  return (
    <>
      <div class="cal">
        <div class="date">
          
          <h1>{props.date}</h1>
        </div>
        <div class="event center">
          
          <h1 class="hidden">{props.event} </h1>
        </div>
      </div>
    </>
  );
}

export default Cal;
