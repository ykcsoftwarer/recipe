import React from "react";
import { useLocation } from "react-router-dom"; 

const Details = ({detailData}) => {
  const {state} = useLocation()
  // console.log("Detailsdata", detailData)
  return <div>Details</div>;
};

export default Details;
