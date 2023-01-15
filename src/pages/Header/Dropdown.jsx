import React, { useState } from "react";
import { FaSlidersH, FaAngleDown } from "react-icons/fa";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [calender, setCalender] = useState(false);
    const [date, setDate] = useState("");
    
  // const []
  console.log(date);
  return (
    <div>
      <button className="text-xl" onClick={() => setIsOpen(!isOpen)}>
        <FaSlidersH />
      </button>
      <ul
        className={`${
          isOpen ? "block" : "hidden"
        } absolute right-5 duration-1000 ease-in-out`}
      >
        <li>
          <button className="flex w-[70px] items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Location
            <FaAngleDown />{" "}
          </button>
        </li>
        <li>
          <button className="flex w-[70px] items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Gender
            <FaAngleDown />{" "}
          </button>
        </li>
        <li>
          {/* <button onClick={()=>setCalender(!calender)} className="flex w-[70px] items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Date
            <FaAngleDown />
          </button> */}
            <input
                      onSelect={(e) => setDate(e.target.value)}
                      placeholder="DATE"
              className={`${calender?"block":"hidden"} absolute top-16 bg-blue-700 text-white rounded-lg  w-[70px] border-0 h-6`}
              type="date"
              name=""
              id=""
            />
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
