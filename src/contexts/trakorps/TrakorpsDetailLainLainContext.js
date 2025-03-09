import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanLainLainRequest } from "../../api/SatuanRequest";

const TrakorpsDetailLainLainContext = createContext();

export const TrakorpsDetailLainLainContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState([]);

    const getSatuanLainLain = async () => {
        await getSatuanLainLainRequest({ params: { satuan: { id: location.state?.satuan.id } } }).then((res) => {
            setSatuan(res?.data);
        });
    }

    useEffect(() => {
        getSatuanLainLain();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailLainLainContext.Provider value={{ navigation, satuan }}>
            {children}
        </TrakorpsDetailLainLainContext.Provider>
    );
}

export const UseTrakorpsDetailLainLainContext = () => {
    return useContext(TrakorpsDetailLainLainContext);
}