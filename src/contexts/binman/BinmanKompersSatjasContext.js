import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSatuanKompersSatjarRequest } from "../../api/SatuanRequest";

const BinmanKompersSatjasListContext = createContext();

export const BinmanKompersSatjasListContextProvider = ({ children }) => {
    const navigation = useNavigate();
    // local state
    const [kompers, setKompers] = useState({});

    const getKompersSatjas = async ({ search = "" }) => {
        await getSatuanKompersSatjarRequest({ filter: `search=${search}` }).then((res) => {
            setKompers(res);
        });
    }

    const onSearch = ({ value }) => {
        getKompersSatjas({ search: value });
    }

    useEffect(() => {
        getKompersSatjas({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmanKompersSatjasListContext.Provider value={{ navigation, kompers, onSearch }}>
            {children}
        </BinmanKompersSatjasListContext.Provider>
    );
}

export const UseBinmanKompersSatjasListContext = () => {
    return useContext(BinmanKompersSatjasListContext);
}