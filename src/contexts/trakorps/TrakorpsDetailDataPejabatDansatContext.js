import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanPejabatDansatRequest } from "../../api/SatuanRequest";

const TrakorpsDetailDataPejabatDansatContext = createContext();

export const TrakorpsDetailDataPejabatDansatContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState({});

    const getDataPejabatDansat = async () => {
        await getSatuanPejabatDansatRequest({ params: { satuan: { id: location.state?.satuan.id } } }).then((res) => {
            setSatuan(res);
            console.log(res);
        });
    }

    useEffect(() => {
        getDataPejabatDansat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailDataPejabatDansatContext.Provider value={{ navigation, satuan }}>
            {children}
        </TrakorpsDetailDataPejabatDansatContext.Provider>
    );
}

export const UseTrakorpsDetailDataPejabatDansatContext = () => {
    return useContext(TrakorpsDetailDataPejabatDansatContext);
}