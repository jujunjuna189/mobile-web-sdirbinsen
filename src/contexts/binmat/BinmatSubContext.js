import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanDetailRequest } from "../../api/SatuanRequest";
import { icBackpack, icBinoculars, icBrain, icCctv, icChess, icManagement, icRadioTransmitter, icSettings } from "../../assets";

const BinmatSubContext = createContext();

export const BinmatSubContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    const [category, setCategory] = useState([]);
    const [satuan, setSatuan] = useState({});

    const onGetMaterialKategori = async () => {
        const category = {
            "sistem-utama": [
                {
                    icon: icSettings,
                    title: "Satbak",
                    key: 'satbak',
                    isActive: false,
                },
                {
                    icon: icManagement,
                    title: "Pibak",
                    key: 'pibak',
                    isActive: false,
                },
                {
                    icon: icBinoculars,
                    title: "Pencari & Penemu Sas",
                    key: 'pencari-penemu-sas',
                    isActive: false,
                },
                {
                    icon: icBrain,
                    title: "Kodal",
                    key: 'kodal',
                    isActive: false,
                },
                {
                    icon: icBackpack,
                    title: "Logistik",
                    key: 'logistik',
                    isActive: false,
                },
                {
                    icon: icBrain,
                    title: "Kurmed",
                    key: 'kurmed',
                    isActive: false,
                },
                {
                    icon: icRadioTransmitter,
                    title: "Komunikasi",
                    key: 'komunikasi',
                    isActive: false,
                },
                {
                    icon: icChess,
                    title: "Taktik",
                    key: 'taktik',
                    isActive: false,
                },
                {
                    icon: icBrain,
                    title: "Meteorologi",
                    key: 'meteorologi',
                    isActive: false,
                },
                {
                    icon: icCctv,
                    title: "Pengamanan",
                    key: 'pengamanan',
                    isActive: false,
                },
            ],
            "sistem-pendukung": [
                {
                    icon: icBrain,
                    title: "Matsus",
                    key: 'matsus',
                    isActive: false,
                },
                {
                    icon: icBrain,
                    title: "Ranmin",
                    key: 'ranmin',
                    isActive: false,
                },
            ],
            "mkb": [
                {
                    icon: icBrain,
                    title: "New Bp",
                    key: 'new-bp',
                    isActive: false,
                },
                {
                    icon: icBrain,
                    title: "New Operational Latihan",
                    key: 'new-operational-latihan',
                    isActive: false,
                },
            ],
        };

        setCategory(category?.[location.state?.category?.key] ?? []);
    };

    const getSatuan = async () => {
        await getSatuanDetailRequest({ id: location.state?.satuan?.id }).then((res) => {
            setSatuan(res);
            console.log(res);
        });
    }

    useEffect(() => {
        onGetMaterialKategori();
        getSatuan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <BinmatSubContext.Provider value={{ navigation, location, satuan, category }}>
            {children}
        </BinmatSubContext.Provider>
    );
}

export const UseBinmatSubContext = () => {
    return useContext(BinmatSubContext);
}