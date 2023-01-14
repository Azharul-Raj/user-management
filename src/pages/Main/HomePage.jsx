import { useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import Lists from "./Lists/Lists";
import { FaSlidersH } from "react-icons/fa";
import Details from "./Details";
import { DataContext } from "../../contexts/dataProvider";
import Header from "../Header/Header";

const HomePage = () => {
  let { setFemaleCount, setMaleCount } = useContext(DataContext);
  const [clients, setClients] = useState([]);
  // data fetching part
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      const data = await getDocs(collection(db, "user-management"));
      data.forEach((doc) => {
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
  // console.log(maleCount)
  return (
    <>
      {/* header */}
      <Header />
      {/* header */}
      <div className="grid lg:grid-cols-12">
        {/* left side */}
        <div className="col-span-8">
          <Details />
        </div>
        {/* right side */}
        <div className="col-span-4">
          <div className="flex justify-between">
            {/* left line */}
            <div className="relative">
              <div className="absolute right-0 -ml-0.5 w-1 h-screen bg-gray-600"></div>
            </div>
            {/* data list below */}
            <div className="w-11/12 h-[100vh] overflow-scroll scrollbar-hide">
              <div className="flex justify-between items-center">
                <div className="text-xl font-bold">
                  <h2>Events</h2>
                </div>
                <div className="antialiased">
                  {/* dropdown */}
                  <div class="group inline-block">
                    <button
                      aria-haspopup="true"
                      aria-controls="menu"
                      class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
                    >
                      <span class="pr-1 font-semibold flex-1">
                        <FaSlidersH />
                      </span>
                      <span>
                        <svg
                          class="fill-current h-4 w-4 transform group-hover:-rotate-180
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
                      class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute 
  transition duration-150 ease-in-out origin-top min-w-32"
                    >
                      <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Programming
                      </li>
                      <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                        DevOps
                      </li>
                      <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                        <button
                          aria-haspopup="true"
                          aria-controls="menu-lang"
                          class="w-full text-left flex items-center outline-none focus:outline-none"
                        >
                          <span class="pr-1 flex-1">Langauges</span>
                          <span class="mr-auto">
                            <svg
                              class="fill-current h-4 w-4
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
                          class="bg-white border rounded-sm absolute top-0 right-0 
  transition duration-150 ease-in-out origin-top-left
  min-w-32
  "
                        >
                          <li class="px-3 py-1 hover:bg-gray-100">
                            Javascript
                          </li>
                          <li class="rounded-sm relative px-3 py-1 hover:bg-gray-100">
                            <button
                              aria-haspopup="true"
                              aria-controls="menu-lang-python"
                              class="w-full text-left flex items-center outline-none focus:outline-none"
                            >
                              <span class="pr-1 flex-1">Python</span>
                              <span class="mr-auto">
                                <svg
                                  class="fill-current h-4 w-4
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
                              class="bg-white border rounded-sm absolute top-0 right-0 
      transition duration-150 ease-in-out origin-top-left
      min-w-32
      "
                            >
                              <li class="px-3 py-1 hover:bg-gray-100">2.7</li>
                              <li class="px-3 py-1 hover:bg-gray-100">3+</li>
                            </ul>
                          </li>
                          <li class="px-3 py-1 hover:bg-gray-100">Go</li>
                          <li class="px-3 py-1 hover:bg-gray-100">Rust</li>
                        </ul>
                      </li>
                      <li class="rounded-sm px-3 py-1 hover:bg-gray-100">
                        Testing
                      </li>
                    </ul>
                  </div>
                  {/* dropdown */}
                </div>
              </div>
              {clients.map((client) => (
                <Lists key={client.id} client={client} />
              ))}
            </div>
            {/* right line */}
            <div className="relative mx-1">
              <div className="absolute right-0 -ml-0.5 w-1 h-screen bg-gray-600"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
