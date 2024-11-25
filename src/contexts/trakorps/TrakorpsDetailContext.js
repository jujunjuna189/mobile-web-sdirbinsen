import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanDetailRequest } from "../../api/SatuanRequest";

const TrakorpsDetailContext = createContext();

export const TrakorpsDetailContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState({});

    const getSatuan = async () => {
        await getSatuanDetailRequest({ id: location.state?.satuan?.id }).then((res) => {
            setSatuan(res);
            console.log(res);
        });
    }

    useEffect(() => {
        getSatuan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailContext.Provider value={{ navigation, satuan }}>
            {children}
        </TrakorpsDetailContext.Provider>
    );
}

export const UseTrakorpsDetailContext = () => {
    return useContext(TrakorpsDetailContext);
}