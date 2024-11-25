import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getMaterialRequest } from "../../api/MaterialRequest";
import { ConverUrl } from "../../utils/convert/UrlConvert";

const BinmatListContext = createContext();

export const BinmatListContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [materiel, setMateriel] = useState({});

    const getMateriel = async ({ filter = "" }) => {
        await getMaterialRequest({ filter: `search=${filter}&kategori=${ConverUrl(location.state?.title)}&satuan_id=${location.state?.satuan?.id}` }).then((res) => {
            setMateriel(res);
            console.log(res);
        });
    }

    const onSearch = ({ value }) => {
        console.log(value);
        getMateriel({ filter: value });
    }

    useEffect(() => {
        getMateriel({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmatListContext.Provider value={{ navigation, location, materiel, onSearch }}>
            {children}
        </BinmatListContext.Provider>
    );
}

export const UseBinmatListContext = () => {
    return useContext(BinmatListContext);
}