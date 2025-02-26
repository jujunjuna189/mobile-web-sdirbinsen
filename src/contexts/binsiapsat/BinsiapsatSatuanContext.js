import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanRequest } from "../../api/SatuanRequest";
import { getLocalUser } from "../../service/LocalStorage";
import { useSatuanStore } from "../../store";

const BinsiapsatSatuanContext = createContext();

export const BinsiapsatSatuanContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // global state
    const satuan = useSatuanStore((state) => state.satuan);
    const setSatuan = useSatuanStore((state) => state.setSatuan);

    const getSatuan = async ({ filter = "" }) => {
        const user = getLocalUser();
        await getSatuanRequest({ filter: `search=${filter}${user.user?.satuan_id ? '&id=' + user.user?.satuan_id ?? '' : ''}&visibility=trakorps` }).then((res) => {
            setSatuan(res);
        });
    }

    const onSearch = ({ value }) => {
        getSatuan({ filter: value });
    }

    useEffect(() => {
        getSatuan({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinsiapsatSatuanContext.Provider value={{ navigation, location, satuan, onSearch }}>
            {children}
        </BinsiapsatSatuanContext.Provider>
    );
}

export const UseBinsiapsatSatuanContext = () => {
    return useContext(BinsiapsatSatuanContext);
}