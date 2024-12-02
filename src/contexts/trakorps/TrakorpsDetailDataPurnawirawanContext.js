import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanPurnawirawanRequest } from "../../api/SatuanRequest";

const TrakorpsDetailDataPurnawirawanContext = createContext();

export const TrakorpsDetailDataPurnawirawanContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState({});

    const getDataPurnawirawan = async () => {
        await getSatuanPurnawirawanRequest({ params: { satuan: { id: location.state?.satuan.id } } }).then((res) => {
            setSatuan(res);
            console.log(res);
        });
    }

    useEffect(() => {
        getDataPurnawirawan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailDataPurnawirawanContext.Provider value={{ navigation, satuan }}>
            {children}
        </TrakorpsDetailDataPurnawirawanContext.Provider>
    );
}

export const UseTrakorpsDetailDataPurnawirawanContext = () => {
    return useContext(TrakorpsDetailDataPurnawirawanContext);
}