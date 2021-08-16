import React, { Fragment } from "react";
import loader from "./loader.gif";
const Loading = () => (
  <Fragment>
    <img
      src={loader}
      alt="loading..."
      style={{ width: "400px", display: "block" ,alignContent:"center",alignItems:"center" ,padding:"30px",margin:"500px"}}
    />
  </Fragment>
);
export default Loading;