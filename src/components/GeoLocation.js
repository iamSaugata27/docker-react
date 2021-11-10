import React, { useEffect } from "react";

const GeoLocation = () => {
  const arr = [];
  function success(pos) {
    var crd = pos.coords;

    // console.log("Your current position is:");
    arr.push(`Latitude : ${crd.latitude}`);
    arr.push(`Longitude: ${crd.longitude}`);
    arr.push(`More or less ${crd.accuracy} meters.`);
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  useEffect(() => navigator.geolocation.getCurrentPosition(success, error));

  return (
    <div style={{ backgroundColor: "red" }}>
      Hii
      {arr}
      {console.log(arr)}
    </div>
  );
};

export default GeoLocation;
