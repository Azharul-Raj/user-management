import { useContext, useEffect, useState } from "react";
import { collection, query,where,getDocs } from "firebase/firestore";



import Lists from "../Main/Lists/Lists";
import { DataContext } from "../../contexts/dataProvider";
import { Outlet } from "react-router-dom";
import { db } from "../../firebase/firebase.config";
import Dropdown from "../../components/Dropdown";
const Header = () => {
    let { filter,maleCount,femaleCount,setFemaleCount, setMaleCount,setId } = useContext(DataContext);
    const [clients, setClients] = useState([]);
    // dropdown states
  if (filter === "Male") {
    setId("EVT0002")
  }
  //dropdown states
    // filter out all required data
  const compress = (allData) => {
    const list=[]
    setMaleCount(0);
    setFemaleCount(0);
    allData.forEach((doc) => {
      if (doc.data().Gender === "Male") {
        
        setMaleCount((prev) => prev + 1);
      }
      if (doc.data().Gender === "Female") {
        setFemaleCount((prev) => prev + 1);
      }
      list.push({ id: doc.id, ...doc.data() });
    });
    return list;
  }

  // console.log("from header",filter)
  const filters = {
    Male: where("Gender", "==", "Male"),
    Female: where("Gender", "==", "Female"),
    Chennai: where("Location", "==", "Chennai"),
    Hyderabad: where("Location", "==", "Hyderabad"),
    Bangalore: where("Location", "==", "Bangalore"),
    default: where("Date", "==", filter)
  }
  
  useEffect(() => {
    const fetchData = async () => {
      let data = collection(db, "user-management");
      if (filter !== "") {
        data = query(data, filters[filter] || filters.default);
      }
      const allData = await getDocs(data);
      const list = compress(allData);
      setClients(list);
    };
    fetchData();
  }, [filter]);
  
  
  
  return (
    <>
      {/* header */}
      <div className="bg-[#001C7B] lg:h-10 flex justify-between">
        <div className="ml-5">
          <h3 className="font-bold text-xl text-[#008381]"><span className="text-2xl">S</span>ECQ<span className="text-2xl text-[#FF0000]">AI</span>SE</h3>
        </div>
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
                    <Dropdown/>
                  {/* dropdown */}
                </div>
              </div>
              {clients.map((client) => (
                <Lists key={client.id} client={client} />
              ))}
              {
                 clients.length===0 &&
    
                  <div className="text-black font-bold flex justify-center items-center"> NO DATA FOUND</div>
                
              }
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
