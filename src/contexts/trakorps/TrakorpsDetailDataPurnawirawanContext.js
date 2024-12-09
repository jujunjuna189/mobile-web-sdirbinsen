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
        });
    }

    const onTogglePersonelDetail = (index) => {
        if (!satuan.data[index].isShowDetail) {
            const indexTrue = satuan.data.findIndex((x) => x.isShowDetail === true);
            indexTrue >= 0 && (satuan.data[indexTrue].isShowDetail = false);
        }
        satuan.data[index].isShowDetail = !satuan.data[index]?.isShowDetail;
        setSatuan({ ...satuan });
    }

    useEffect(() => {
        getDataPurnawirawan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailDataPurnawirawanContext.Provider value={{ navigation, satuan, onTogglePersonelDetail }}>
            {children}
        </TrakorpsDetailDataPurnawirawanContext.Provider>
    );
}

export const UseTrakorpsDetailDataPurnawirawanContext = () => {
    return useContext(TrakorpsDetailDataPurnawirawanContext);
}