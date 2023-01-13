import { createContext, useState } from "react";

export const DataContext=createContext()
const DataProvider = ({ children }) => {
    const [id1, setId] = useState("EVT0001")
    const [refresh, setRefresh] = useState(true);
    
    const data={id1,setId,refresh,setRefresh}
    return (
        <DataContext.Provider value={data}>
            {
                children
            }
        </DataContext.Provider>
    );
};

export default DataProvider;