import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPetaJabatanRequest, getPetaJabatanSummaryRequest } from "../../api/PetaJabatanRequest";
import { getSatuanDetailRequest } from "../../api/SatuanRequest";

const BinmanPetaJabatanListContext = createContext();

export const BinmanPetaJabatanListContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [filter, setFilter] = useState({});
    const [satuan, setSatuan] = useState({});
    const [petaJabatanSummary, setPetaJabatanSummary] = useState({});
    const [petaJabatan, setPetaJabatan] = useState({});

    const getSatuan = async () => {
        await getSatuanDetailRequest({ id: location.state?.satuan?.id }).then((res) => {
            setSatuan(res);
        });
    }

    const getPetaJabatanSummary = async () => {
        await getPetaJabatanSummaryRequest({ filter: `satuan_id=${location.state?.satuan?.id}` }).then((res) => {
            setPetaJabatanSummary(res);
        });
    }

    const getPetaJabatan = async ({ filter = {} }) => {
        await getPetaJabatanRequest({ filter: `satuan_id=${location.state?.satuan?.id}&jabatan=${filter.jabatan ?? ''}&personil_id=${filter.personil_id ?? ''}` }).then((res) => {
            setPetaJabatan(res);
        });
    }

    const onSearch = ({ value }) => {
        getPetaJabatan({ filter: { ...filter, jabatan: value } });
    }

    const onFilter = ({ field, value }) => {
        setFilter({ ...filter, [field]: value });
        getPetaJabatan({ filter: { ...filter, [field]: value } });
    }

    useEffect(() => {
        getSatuan();
        getPetaJabatanSummary();
        getPetaJabatan({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmanPetaJabatanListContext.Provider value={{ navigation, satuan, petaJabatanSummary, petaJabatan, onSearch, onFilter }}>
            {children}
        </BinmanPetaJabatanListContext.Provider>
    );
}

export const UseBinmanPetaJabatanListContext = () => {
    return useContext(BinmanPetaJabatanListContext);
}