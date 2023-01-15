import { useContext, useEffect, useMemo, useState } from "react";
import { collection, query,where,getDocs } from "firebase/firestore";


import { FaSlidersH } from "react-icons/fa";

import Lists from "../Main/Lists/Lists";
import { DataContext } from "../../contexts/dataProvider";
import { Outlet } from "react-router-dom";
import { db } from "../../firebase/firebase.config";
const Header = () => {
    let { maleCount,femaleCount,setFemaleCount, setMaleCount } = useContext(DataContext);
    const [clients, setClients] = useState([]);
    const clientsMemo=useMemo(()=>clients,[clients])
    // data fetching part
  const filter='Male'
    useEffect(() => {
      const fetchData = async () => {
        let list = [];
        let allData;
        if (filter==="") {
          allData=await getDocs(collection(db,"user-management"))
        }
        else if (filter==='Male') {
          
          const data = query(collection(db, "user-management"), where("Gender", "==", "Male"));
          allData = await getDocs(data);
        }
        console.log(allData)
        allData.forEach((doc) => {
          if (doc.data().Gender === "Male") {
            setMaleCount((prev) => prev + 1);
          }
          if (doc.data().Gender === "Female") {
            setFemaleCount((prev) => prev + 1);
          }
          list.push({ id: doc.id, ...doc.data() });
        });
        setClients(list);
      };
      fetchData();
    }, []);
  
  // using REST
  // useEffect(() => {
  //   fetch("http://localhost:3001/all-user")
  //     .then(res => res.json())
  //   .then(data=>setClients(data))
  // },[])
  return (
    <>
      {/* header */}
      <div className="bg-blue-500 lg:h-10 flex justify-between">
        <div className="">LOGO</div>
        {/* right side nav */}
        <div className="">
          <div className=""></div>
          <div className="flex space-x-5 mr-5">
            <div className="bg-[#7AAE43] h-7 text-white w-14 text-center">
              {maleCount}
            </div>
            <div className="bg-[#FF0000] mr-5 h-7 text-white w-14 text-center">
              {femaleCount}
            </div>
          </div>
        </div>
      </div>
      {/* header */}
      <div className="grid lg:grid-cols-12">
        {/* left side */}
        <div className="col-span-8">
          <Outlet/>
        </div>
        {/* right side */}
        <div className="col-span-4">
          <div className="flex justify-between">
            {/* left line */}
            <div className="relative">
              <div className="absolute right-0 -ml-0.5 w-3 h-screen bg-gray-200"></div>
            </div>
            {/* data list below */}
            <div className="w-11/12 h-[100vh] pb-5 overflow-scroll scrollbar-hide">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">
                  <h2>Events</h2>
                </div>
                <div className="antialiased">
                  {/* dropdown */}
                  <div className="group inline-block">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu"
                      className="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                    >
                      <span className="pr-1 font-semibold flex-1">
                        <FaSlidersH />
                      </span>
                      <span>
                        <svg
                          className="fill-current h-4 w-4 transform group-hover:-rotate-180
        transition duration-150 ease-in-out"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                        </svg>
                      </span>
                    </button>
                    <ul
                      id="menu"
                      aria-hidden="true"
                      className="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                    >
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Programming
                      </li>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        DevOps
                      </li>
                      <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <button
                          aria-haspopup="true"
                          aria-controls="menu-lang"
                          className="w-full text-left flex items-center outline-none focus:outline-none"
                        >
                          <span className="pr-1 flex-1">Langauges</span>
                          <span className="mr-auto">
                            <svg
                              className="fill-current h-4 w-4
            transition duration-150 ease-in-out"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </span>
                        </button>
                        <ul
                          id="menu-lang"
                          aria-hidden="true"
                          className="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                        >
                          <li className="px-3 py-1 hover:bg-gray-100">
                            Javascript
                          </li>
                          <li className="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                            <button
                              aria-haspopup="true"
                              aria-controls="menu-lang-python"
                              className="w-full text-left flex items-center outline-none focus:outline-none"
                            >
                              <span className="pr-1 flex-1">Python</span>
                              <span className="mr-auto">
                                <svg
                                  className="fill-current h-4 w-4
                transition duration-150 ease-in-out"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                >
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </span>
                            </button>
                            <ul
                              id="menu-lang-python"
                              aria-hidden="true"
                              className="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                            >
                              <li className="px-3 py-1 hover:bg-gray-100">
                                2.7
                              </li>
                              <li className="px-3 py-1 hover:bg-gray-100">
                                3+
                              </li>
                            </ul>
                          </li>
                          <li className="px-3 py-1 hover:bg-gray-100">Go</li>
                          <li className="px-3 py-1 hover:bg-gray-100">Rust</li>
                        </ul>
                      </li>
                      <li className="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Testing
                      </li>
                    </ul>
                  </div>
                  {/* dropdown */}
                </div>
              </div>
              {clientsMemo.map((client) => (
                <Lists key={client.id} client={client} />
              ))}
            </div>
            {/* right line */}
            <div className="relative mx-1">
              <div className="absolute right-0 -ml-0.5 w-3 h-screen bg-gray-200"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
