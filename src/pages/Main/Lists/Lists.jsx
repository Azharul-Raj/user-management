import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../../contexts/dataProvider";

const Lists = (client) => {
    const { id1,setId,refresh,setRefresh } = useContext(DataContext);
    const { id, Location, Time, Date, Gender } = client.client;
   
    const handleId =  (id) => {
        setId(id)
        setRefresh(!refresh)
    }
    console.log(id1)
    return (
        <Link className={`${id==id1?"bg-red-600":"bg-black"}`} onClick={()=>handleId(id)}>
        <div className={`"max-w-2xl my-5 px-8 py-4 bg-gray-200 rounded-lg shadow-md dark:bg-gray-200"`}>
        <div className="flex items-center justify-between">
                <span className="text-sm font-light text-black">{ id} : {Location}</span>
                <span className="text-sm font-light text-black">{Date} { Time}</span>
            {/* <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabindex="0" role="button">Design</a> */}
        </div>
            <h1>person detected</h1>
        
            </div>
             </Link>
    );
};
export default React.memo(Lists) ;

