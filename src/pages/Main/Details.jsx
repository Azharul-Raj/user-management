import { useContext, useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase.config";
import { DataContext } from "../../contexts/dataProvider";

const Details = () => {
  const { id1, refresh } = useContext(DataContext);
  // console.log(id1);
  const [details, setDetails] = useState({});
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = doc(db, "user-management", id1);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       setDetails(docSnap.data());
  //       // console.log("Document data:", docSnap.data());
  //     } else {
  //       // doc.data() will be undefined in this case
  //       console.log("No such document!");
  //     }
  //   };
  //   fetchData();
  // }, [refresh]);

  // using REST
  useEffect(() => {
    fetch(`http://localhost:3001/user/${id1}`)
      .then(res => res.json())
    .then(data=>setDetails(data))
  },[refresh])

  return (
    <>
      <div className="relative flex flex-col-reverse py-16 lg:py-0 mx-5 lg:flex-col">
        <div className="w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:py-20 lg:max-w-screen-xl">
          <div className="mb-0 lg:max-w-lg lg:pr-8 xl:pr-6">
            <h2 className="text-2xl font-bold">{id1}</h2>
            <p className="text-xl font-bold">Person detected</p>
            <div className="my-10">
              <h3 className="text-2xl font-semibold">Name : {details.Name} </h3>
              <h3 className="text-2xl font-semibold">
                Location : {details.Location}{" "}
              </h3>
              <h3 className="text-2xl font-semibold">Date : {details.Date} </h3>
              <h3 className="text-2xl font-semibold">Time : {details.Time} </h3>
            </div>
            <div className="">
              <h3 className="text-2xl font-semibold">Description :</h3>
              <div className="w-1/2">
                <h3 className="text-2xl font-semibold">
                  {details.Name} detected at {details.Location} on{" "}
                  {details.Date}
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center space-x-4"></div>
            </div>
          </div>
        </div>
        <div className="inset-y-0 rounded-lg top-0 right-0 w-full max-w-xl px-4 mx-auto mb-6 md:px-0 lg:pl-8 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-1/2 lg:max-w-full lg:absolute xl:px-0">
          <h2 className="text-xl font-bold">{details.Gender}</h2>
          <img
            className=" w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={details.image}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Details;
