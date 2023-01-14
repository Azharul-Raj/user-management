import { createContext, useState } from "react";

export const DataContext=createContext()
const DataProvider = ({ children }) => {
    const [id1, setId] = useState("EVT0001")
    const [refresh, setRefresh] = useState(true);
    let [maleCount,setMaleCount]=useState(0)
    const [femaleCount,setFemaleCount]=useState(0)
    
    const data={id1,setId,refresh,setRefresh,maleCount,setMaleCount,femaleCount,setFemaleCount}
    return (
        <DataContext.Provider value={data}>
            {
                children
            }
        </DataContext.Provider>
    );
};

export default DataProvider;