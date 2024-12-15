import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSiapsatRequest } from "../../api/SiapsatRequest";

const BinsiapsatSatgasPreviewContext = createContext();

export const BinsiapsatSatgasPreviewContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [siapsat, setSiapsat] = useState({});

    const onGetSiapsat = async () => {
        await getSiapsatRequest({ filter: `category=satgas&satuan_id=${location.state?.satuan?.id ?? 'empty'}&title=${location.state?.category?.title ?? ''}` }).then((res) => {
            console.log(res?.data?.[0]);
            setSiapsat({ ...siapsat, [location.state?.category?.title]: res?.data?.[0] ?? {} });
        });
    }

    useEffect(() => {
        onGetSiapsat();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinsiapsatSatgasPreviewContext.Provider value={{ navigation, location, siapsat }}>
            {children}
        </BinsiapsatSatgasPreviewContext.Provider>
    );
}

export const UseBinsiapsatSatgasPreviewContext = () => {
    return useContext(BinsiapsatSatgasPreviewContext);
}