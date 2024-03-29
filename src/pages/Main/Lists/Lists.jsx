import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../contexts/dataProvider";

const Lists = (client) => {
  const {id1, setId, refresh, setRefresh } = useContext(DataContext);
  const { id, Location, Time, Date } = client.client;

  const handleId = (id) => {
    setId(id);
    setRefresh(!refresh);
  };
 
  
  return (
    <>
    <Link onClick={() => handleId(id)}>
      <div
        className={`${
          id === id1 ? "bg-[#7F7F7F]" : "bg-[#D9D9D9]"
        } max-w-2xl my-5 px-8 py-4 rounded-lg shadow-md`}
      >
        <div className="flex items-center justify-between">
          <span
            className={`${
              id === id1 ? "text-white" : "text-black"
            } text-sm font-light`}
          >
            {id} : {Location}
          </span>
          <span
            className={`${
              id === id1 ? "text-white" : "text-black"
            } text-sm font-light`}
          >
            {Date} {Time}
          </span>
        </div>
        <h1
          className={`${
            id === id1 ? "text-white" : "text-black"
          } text-sm font-light`}
        >
          person detected
        </h1>
      </div>
      </Link>
      </>
  );
};
export default React.memo(Lists);
