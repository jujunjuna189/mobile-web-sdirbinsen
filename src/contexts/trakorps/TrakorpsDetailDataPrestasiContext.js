import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanPrestasiRequest } from "../../api/SatuanRequest";

const TrakorpsDetailDataPrestasiContext = createContext();

export const TrakorpsDetailDataPrestasiContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState({});

    const getDataPrestasi = async () => {
        await getSatuanPrestasiRequest({ params: { satuan: { id: location.state?.satuan.id } } }).then((res) => {
            setSatuan(res);
            console.log(res);
        });
    }

    useEffect(() => {
        getDataPrestasi();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailDataPrestasiContext.Provider value={{ navigation, satuan }}>
            {children}
        </TrakorpsDetailDataPrestasiContext.Provider>
    );
}

export const UseTrakorpsDetailDataPrestasiContext = () => {
    return useContext(TrakorpsDetailDataPrestasiContext);
}