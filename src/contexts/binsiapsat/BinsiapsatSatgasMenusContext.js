import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { icContinuous, icHourglass, icStickyNote } from "../../assets";
import { RouterName } from "../../utils";

const BinsiapsatSatgasMenusContext = createContext();

export const BinsiapsatSatgasMenusContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [menus, setMenus] = useState([]);

    const getMenus = () => {
        const menus = {
            'satgas': [
                {
                    icon: icStickyNote,
                    title: 'Data Satgas Saat Ini',
                    isShowDetail: false,
                    onClick: () => { },
                },
                {
                    icon: icContinuous,
                    title: 'Rotasi Satgas',
                    router: "",
                    onClick: () => { },
                },
                {
                    icon: icHourglass,
                    title: 'Data Riwayat Satgas',
                    isShowDetail: false,
                    onClick: () => navigation(RouterName.binsiapsatSatgasSatuan, { state: { category: { icon: icHourglass, title: "Data Riwayat Satgas" } } })
                },
            ],
        };

        setMenus([...menus[location.state?.category]]);
    }

    useEffect(() => {
        getMenus();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinsiapsatSatgasMenusContext.Provider value={{ navigation, location, menus }}>
            {children}
        </BinsiapsatSatgasMenusContext.Provider>
    );
}

export const UseBinsiapsatSatgasMenusContext = () => {
    return useContext(BinsiapsatSatgasMenusContext);
}