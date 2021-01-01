import React, { Fragment, useState } from "react";

const ErrorExample = () => {
  const [title, setTitle] = useState("random title");
  const handleClick = () => {
    if (title === "random title") {
      setTitle("Hello People");
    } else {
      setTitle("random title");
    }
  };
  return (
    <Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change Title
      </button>
    </Fragment>
  );
};

export default ErrorExample;
