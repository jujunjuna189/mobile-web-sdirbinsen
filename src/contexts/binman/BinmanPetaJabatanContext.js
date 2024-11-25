import { createContext, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getSatuanRequest } from "../../api/SatuanRequest";
import { useSatuanStore } from "../../store";

const BinmanPetaJabatanContext = createContext();

export const BinmanPetaJabatanContextProvider = ({ children }) => {
    const navigation = useNavigate();
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
        <BinmanPetaJabatanContext.Provider value={{ navigation, satuan, onSearch }}>
            {children}
        </BinmanPetaJabatanContext.Provider>
    );
}

export const UseBinmanPetaJabatanContext = () => {
    return useContext(BinmanPetaJabatanContext);
}