import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanTradisiRequest } from "../../api/SatuanRequest";

const TrakorpsDetailTradisiSatuanContext = createContext();

export const TrakorpsDetailTradisiSatuanContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState({});

    const getTradisiSatuan = async () => {
        await getSatuanTradisiRequest({ params: { satuan: { id: location.state?.satuan.id } } }).then((res) => {
            setSatuan(res?.data?.[0]);
            console.log(res?.data?.[0]);
        });
    }

    useEffect(() => {
        getTradisiSatuan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailTradisiSatuanContext.Provider value={{ navigation, satuan }}>
            {children}
        </TrakorpsDetailTradisiSatuanContext.Provider>
    );
}

export const UseTrakorpsDetailTradisiSatuanContext = () => {
    return useContext(TrakorpsDetailTradisiSatuanContext);
}