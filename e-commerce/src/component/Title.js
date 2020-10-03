import React from "react";

export default function Title({ name, title }) {
  return (
    <React.Fragment>
      <div className="col-sm-10 mx-auto text-center my-2 text-title">
        <h1 className="text-capitalize font-weight-bold">
          {name}

          <strong className="text-blue">{title}</strong>
        </h1>
      </div>
    </React.Fragment>
  );
}
