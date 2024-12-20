import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanDetailRequest } from "../../api/SatuanRequest";
import { getSiapsatRequest } from "../../api/SiapsatRequest";
import { RouterName } from "../../utils";

const BinsiapsatPembinaanContext = createContext();

export const BinsiapsatPembinaanContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [siapsat, setSiapsat] = useState({});
    const [satuan, setSatuan] = useState({});
    const [menus, setMenus] = useState([
        {
            icon: '',
            title: 'Orgas',
            router: RouterName.binsiapsatSatuan,
            isShowDetail: false,
        },
        {
            icon: '',
            title: 'Personel',
            router: "",
            isShowDetail: false,
        },
        {
            icon: '',
            title: 'Meteriil',
            router: "",
            isShowDetail: false,
        },
        {
            icon: '',
            title: 'Doktrin',
            router: "",
            isShowDetail: false,
        },
        {
            icon: '',
            title: 'Fasilitas',
            router: "",
            isShowDetail: false,
        },
        {
            icon: '',
            title: 'Latihan',
            router: "",
            isShowDetail: false,
        },
    ]);

    const getSatuan = async () => {
        await getSatuanDetailRequest({ id: location.state?.satuan?.id }).then((res) => {
            setSatuan(res);
        });
    }

    const onTogglePersonelDetail = (index) => {
        if (!menus[index].isShowDetail) {
            const indexTrue = menus.findIndex((x) => x.isShowDetail === true);
            indexTrue >= 0 && (menus[indexTrue].isShowDetail = false);
        }
        menus[index].isShowDetail = !menus[index]?.isShowDetail;
        setMenus([...menus]);
        onGetSiapsat({ satuan_id: location.state?.satuan?.id, menu: menus[index] });
    }

    const onGetSiapsat = async ({ satuan_id, menu }) => {
        setSiapsat({});
        await getSiapsatRequest({ filter: `category=${location.state?.category ?? ''}&satuan_id=${satuan_id}&title=${menu.title}` }).then((res) => {
            setSiapsat(res?.data?.[0] ?? {});
        });
    }

    useEffect(() => {
        getSatuan();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinsiapsatPembinaanContext.Provider value={{ navigation, location, satuan, menus, siapsat, onTogglePersonelDetail }}>
            {children}
        </BinsiapsatPembinaanContext.Provider>
    );
}

export const UseBinsiapsatPembinaanContext = () => {
    return useContext(BinsiapsatPembinaanContext);
}