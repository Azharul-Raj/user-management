import { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore";
import {db} from "../../firebase/firebase.config"
import Lists from './Lists/Lists';
import { FaSlidersH } from 'react-icons/fa';

const HomePage = () => {
    const [clients, setClients] = useState([]);
    // data fetching part
    useEffect(() => {
        const fetchData = async () => {
            let list=[]
            const data = await getDocs(collection(db, "user-management"));
            data.forEach(doc => {
                // console.log(doc.id, doc.data());
                list.push({id:doc.id,...doc.data()})
            })
            setClients(list)
        }
        fetchData()
    }, [])

    return (
        <div className='grid lg:grid-cols-12'>
            {/* left side */}
            <div className="col-span-8">info</div>
            {/* right side */}
            <div className="col-span-4">
                <div className="flex justify-between">
                    {/* left line */}
            <div className="relative">
                <div class="absolute right-0 -ml-0.5 w-1 h-screen bg-gray-600"></div>
                    </div>
                    {/* data list below */}
                    <div className="w-11/12 h-[100vh] overflow-scroll scrollbar-hide">
                        <div className="flex justify-between items-center">
                            <div className="text-xl font-bold">
                                <h2>Events</h2>
                            </div>
                            <div className="text-2xl">
                                <FaSlidersH/>
                            </div>
                        </div>
                        {
                            clients.map(client => <Lists key={client.id} client={ client} />)
                        }
                    </div>
                    {/* right line */}
                <div className="relative mx-1">
                    <div class="absolute right-0 -ml-0.5 w-1 h-screen bg-gray-600"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;