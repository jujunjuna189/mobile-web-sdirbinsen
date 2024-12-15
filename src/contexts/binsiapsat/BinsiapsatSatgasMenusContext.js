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
                    onClick: () => navigation(RouterName.binsiapsatSatgasPreview, { state: { category: { icon: icStickyNote, title: "Data Satgas Saat Ini" } } })
                },
                {
                    icon: icContinuous,
                    title: 'Rotasi Satgas',
                    onClick: () => navigation(RouterName.binsiapsatSatgasPreview, { state: { category: { icon: icContinuous, title: "Rotasi Satgas" } } })
                },
                {
                    icon: icHourglass,
                    title: 'Data Riwayat Satgas',
                    onClick: () => navigation(RouterName.binsiapsatSatgasSatuan, { state: { category: { icon: icHourglass, title: "Riwayat Satgas" } } })
                },
            ],
        };

        setMenus([...menus[location.state?.category?.key]]);
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