import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebase.config"

const HomePage = () => {
    const [user, setUser] = useState([]);
    // data fetching part
    useEffect(() => {
        const fetchData = async () => {
            let list=[]
            const data = await getDocs(collection(db, "user-management"));
            data.forEach(doc => {
                // console.log(doc.id, doc.data());
                list.push({id:doc.id,...doc.data()})
            })
            setUser(list)
        }
        fetchData()
    }, [])
    console.log(user)

    return (
        <div>
            hlw
        </div>
    );
};

export default HomePage;