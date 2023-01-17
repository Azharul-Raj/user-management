import React, { useContext, useEffect, useState } from "react";
import { FaSlidersH, FaAngleDown } from "react-icons/fa";
import { DataContext } from "../contexts/dataProvider";

const Dropdown = () => {
  // const setFilter = () => { }
  // const info=useContext(DataContext);
  const { setFilter } = useContext(DataContext);
  const [isOpen, setIsOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [calender, setCalender] = useState(true);
  const [date, setDate] = useState("");

  const handleFilter = (props) => {
    if (props === "") {
      return;
    }
    // console.log(props);
    setFilter(props)
  };
  const cities = ["Chennai", "Hyderabd", "Banglore"];
  const genders = ["Male", "Female"];
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
        <li className={`${genderOpen ? "hidden" : "block"}`}>
          <a
            onClick={() => setLocationOpen(!locationOpen)}
            className="flex w-[80px] items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Location
            <FaAngleDown />{" "}
            <ul
              className={`${
                locationOpen ? "block" : "hidden"
              } absolute top-2 right-[80px]`}
            >
              {cities.map((city, id) => (
                <li key={id}>
                  <button
                    onClick={() => handleFilter(city)}
                    className="w-[70px] items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    {city}
                  </button>
                </li>
              ))}
            </ul>
          </a>
        </li>
        <li className={`${locationOpen ? "top-[-200px]" : "block"}`}>
          <a
            onClick={() => setGenderOpen(!genderOpen)}
            className="flex w-[80px] items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
          >
            Gender
            <FaAngleDown />{" "}
            <ul
              className={`${
                genderOpen ? "block" : "hidden"
              } absolute top-2 right-[70px]`}
            >
              {genders.map((gender, id) => (
                <li key={id}>
                  <button
                    onClick={() => handleFilter(gender)}
                    className="w-[70px] items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                  >
                    {gender}
                  </button>
                </li>
              ))}
            </ul>
          </a>
        </li>
        <li>
          <input
            onSelect={(e) => handleFilter(e.target.value)}
            placeholder="DATE"
            className={`${
              calender ? "block" : "hidden"
            } absolute top-16 bg-blue-700 text-white rounded-lg  w-[70px] border-0 h-6`}
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
