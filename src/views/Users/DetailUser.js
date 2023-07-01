import React from "react";
import { useParams } from "react-router-dom";
export const DetailUser = () => {
  const { userid } = useParams();

  return (
    <div>
      This is ID: {userid}
      <br />
      My name is:
    </div>
  );
};
export default DetailUser;
