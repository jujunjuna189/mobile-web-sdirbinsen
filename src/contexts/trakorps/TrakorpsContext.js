import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSatuanRequest } from "../../api/SatuanRequest";
import { getLocalUser } from "../../service/LocalStorage";
import { useSatuanStore } from "../../store";

const TrakorpsContext = createContext();

export const TrakorpsContextProvider = ({ children }) => {
    const navigation = useNavigate();
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
        <TrakorpsContext.Provider value={{ navigation, satuan, onSearch }}>
            {children}
        </TrakorpsContext.Provider>
    );
}

export const UseTrakorpsContext = () => {
    return useContext(TrakorpsContext);
}