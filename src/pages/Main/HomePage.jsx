import { useContext, useEffect, useMemo, useState } from "react";
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
  const clientsMemo=useMemo(()=>clients,[clients])
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
    <></>
  );
};

export default HomePage;
