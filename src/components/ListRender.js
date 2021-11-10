import React from "react";

const ListRender = () => {
  const bool = false;
  const names = ["jon", "gon", "harry"];
  const namelist = names.map((name) => <h2 key={name}>{name}</h2>);
  return <div>{namelist}</div>;
};

export default ListRender;
