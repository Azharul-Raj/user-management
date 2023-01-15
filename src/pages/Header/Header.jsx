import { useContext, useEffect, useMemo, useState } from "react";
import { collection, query,where,getDocs } from "firebase/firestore";


import { FaSlidersH } from "react-icons/fa";

import Lists from "../Main/Lists/Lists";
import { DataContext } from "../../contexts/dataProvider";
import { Outlet } from "react-router-dom";
import { db } from "../../firebase/firebase.config";
const Header = () => {
    let { filter,maleCount,femaleCount,setFemaleCount, setMaleCount } = useContext(DataContext);
    const [clients, setClients] = useState([]);
    const clientsMemo=useMemo(()=>clients,[clients])
    // data fetching part
    console.log('check filter',filter);
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
                  <div class="space-y-0.5">
  <select
    id="basic"
    name="basic"
    class="">
    <option selected><FaSlidersH/></option>
                      <option>
                      <div className="dropdown dropdown-end">
  <label tabIndex={0} className="btn m-1">Click</label>
  <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
    </option>
    <option>Tomato</option>
  </select>
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
