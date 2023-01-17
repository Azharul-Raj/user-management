import { createContext, useState } from "react";

export const DataContext=createContext()
const DataProvider = ({ children }) => {
    const [filter, setFilter] = useState("");
    const [refresh, setRefresh] = useState(true);
    let [maleCount, setMaleCount] = useState(0);
    const [femaleCount, setFemaleCount] = useState(0);
    if(filter===""){
        var [id1, setId] = useState("EVT0001")
    }
    else if (filter === "Male") {
        var [id1, setId] = useState("EVT0002")
    }
    const data={id1,filter,setFilter,setId,refresh,setRefresh,maleCount,setMaleCount,femaleCount,setFemaleCount}
    return (
        <DataContext.Provider value={data}>
            {
                children
            }
        </DataContext.Provider>
    );
};

export default DataProvider;