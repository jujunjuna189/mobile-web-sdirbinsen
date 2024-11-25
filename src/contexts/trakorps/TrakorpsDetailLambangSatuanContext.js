import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanLambangRequest } from "../../api/SatuanRequest";

const TrakorpsDetailLambangSatuanContext = createContext();

export const TrakorpsDetailLambangSatuanContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState({});

    const getLambangSatuan = async () => {
        await getSatuanLambangRequest({ params: { satuan: { id: location.state?.satuan.id } } }).then((res) => {
            setSatuan(res?.data?.[0]);
        });
    }

    useEffect(() => {
        getLambangSatuan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailLambangSatuanContext.Provider value={{ navigation, satuan }}>
            {children}
        </TrakorpsDetailLambangSatuanContext.Provider>
    );
}

export const UseTrakorpsDetailLambangSatuanContext = () => {
    return useContext(TrakorpsDetailLambangSatuanContext);
}