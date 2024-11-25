import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPetaJabatanRequest } from "../../api/PetaJabatanRequest";
import { getSatuanDetailRequest } from "../../api/SatuanRequest";

const BinmanPetaJabatanListContext = createContext();

export const BinmanPetaJabatanListContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [satuan, setSatuan] = useState({});

    const getSatuan = async () => {
        await getSatuanDetailRequest({ id: location.state?.satuan?.id }).then((res) => {
            setSatuan(res);
            console.log(res);
        });
    }

    const getPetaJabatan = async () => {
        await getPetaJabatanRequest().then((res) => {
            console.log(res);
        });
    }

    const onSearch = ({ value }) => {
        getSatuan({ filter: value });
    }

    useEffect(() => {
        getSatuan();
        getPetaJabatan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmanPetaJabatanListContext.Provider value={{ navigation, satuan, onSearch }}>
            {children}
        </BinmanPetaJabatanListContext.Provider>
    );
}

export const UseBinmanPetaJabatanListContext = () => {
    return useContext(BinmanPetaJabatanListContext);
}