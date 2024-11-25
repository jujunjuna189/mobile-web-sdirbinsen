import { createContext, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanRequest } from "../../api/SatuanRequest";
import { useSatuanStore } from "../../store";

const BinmatSatuanContext = createContext();

export const BinmatSatuanContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // global state
    const satuan = useSatuanStore((state) => state.satuan);
    const setSatuan = useSatuanStore((state) => state.setSatuan);

    const getSatuan = async ({ filter = "" }) => {
        await getSatuanRequest({ filter: `search=${filter}` }).then((res) => {
            setSatuan(res);
            console.log(res);
        });
    }

    const onSearch = ({ value }) => {
        console.log(value);
        getSatuan({ filter: value });
    }

    useEffect(() => {
        getSatuan({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmatSatuanContext.Provider value={{ navigation, location, satuan, onSearch }}>
            {children}
        </BinmatSatuanContext.Provider>
    );
}

export const UseBinmatSatuanContext = () => {
    return useContext(BinmatSatuanContext);
}