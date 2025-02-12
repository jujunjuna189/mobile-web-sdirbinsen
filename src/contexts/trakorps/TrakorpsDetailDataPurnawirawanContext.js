import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getSatuanPurnawirawanRequest } from "../../api/SatuanRequest";

const TrakorpsDetailDataPurnawirawanContext = createContext();

export const TrakorpsDetailDataPurnawirawanContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [filter, setFilter] = useState({});
    const [satuan, setSatuan] = useState({});

    const getDataPurnawirawan = async ({ search = '' }) => {
        await getSatuanPurnawirawanRequest({ filter: `search=${search}`, params: { satuan: { id: location.state?.satuan.id } } }).then((res) => {
            setSatuan(res);
        });
    }

    const handleScroll = async (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        // Cek apakah scroll sudah mentok ke bawah
        if ((scrollTop + 1) + clientHeight >= scrollHeight && !satuan.loading) {
            setSatuan({ ...satuan, loading: true });
            await getSatuanPurnawirawanRequest({ filter: `page=${(satuan.current_page ?? 1) + 1}&per_page=20&satuan_id=${location.state?.satuan.id}&search=${filter.search ?? ''}` }).then((res) => {
                setSatuan({ ...res, data: [...(satuan.data ?? []), ...res.data], loading: false });
            });
        }
    };

    const onTogglePersonelDetail = (index) => {
        if (!satuan.data[index].isShowDetail) {
            const indexTrue = satuan.data.findIndex((x) => x.isShowDetail === true);
            indexTrue >= 0 && (satuan.data[indexTrue].isShowDetail = false);
        }
        satuan.data[index].isShowDetail = !satuan.data[index]?.isShowDetail;
        setSatuan({ ...satuan });
    }

    const onSearch = ({ search }) => {
        getDataPurnawirawan({ search: search });
        search != null && setFilter({ search: search });
    }

    useEffect(() => {
        getDataPurnawirawan({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <TrakorpsDetailDataPurnawirawanContext.Provider value={{ navigation, filter, satuan, handleScroll, onTogglePersonelDetail, onSearch }}>
            {children}
        </TrakorpsDetailDataPurnawirawanContext.Provider>
    );
}

export const UseTrakorpsDetailDataPurnawirawanContext = () => {
    return useContext(TrakorpsDetailDataPurnawirawanContext);
}