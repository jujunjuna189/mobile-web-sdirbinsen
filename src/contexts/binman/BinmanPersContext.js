import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPersonilRequest } from "../../api/PersonilRequest";

const BinmanPersContext = createContext();

export const BinmanPersContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [personil, setPersonil] = useState();

    const getPersonil = async ({ filter = "" }) => {
        await getPersonilRequest({ filter: `sumber_pa=${location?.state?.category}&search=${filter}` }).then((res) => {
            setPersonil(res);
        });
    }

    const onSearch = ({ value }) => {
        getPersonil({ filter: value });
    }

    useEffect(() => {
        getPersonil({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmanPersContext.Provider value={{ navigation, location, personil, onSearch }}>
            {children}
        </BinmanPersContext.Provider>
    );
}

export const UseBinmanPersContext = () => {
    return useContext(BinmanPersContext);
}