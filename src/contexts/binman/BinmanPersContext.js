import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getPersonilRequest } from "../../api/PersonilRequest";

const BinmanPersContext = createContext();

export const BinmanPersContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [filter, setFilter] = useState({});
    const [personil, setPersonil] = useState({});

    const getPersonil = async ({ search = "", tmt_1 }) => {
        setPersonil({});
        await getPersonilRequest({ filter: `per_page=20&sumber_pa=${location?.state?.category}&tmt_1=${tmt_1 ?? (filter.tmt_1 ?? '')}&search=${search}` }).then((res) => {
            setPersonil(res);
        });
    }

    const handleScroll = async (event) => {
        const { scrollTop, scrollHeight, clientHeight } = event.target;
        // Cek apakah scroll sudah mentok ke bawah
        if ((scrollTop + 1) + clientHeight >= scrollHeight && !personil.loading) {
            setPersonil({ ...personil, loading: true });
            await getPersonilRequest({ filter: `page=${(personil.current_page ?? 1) + 1}&per_page=20&sumber_pa=${location?.state?.category}&tmt_1=${filter.tmt_1 ?? ''}&search=${filter.search ?? ''}` }).then((res) => {
                setPersonil({ ...res, data: [...(personil.data ?? []), ...res.data], loading: false });
            });
        }
    };

    const onSearch = ({ search, tmt_1 }) => {
        getPersonil({ search: search, tmt_1: tmt_1 });
        search != null && setFilter({ search: search });
        tmt_1 != null && setFilter({ tmt_1: tmt_1 });
    }

    const onTogglePersonelDetail = (index) => {
        if (!personil.data[index].isShowDetail) {
            const indexTrue = personil.data.findIndex((x) => x.isShowDetail === true);
            indexTrue >= 0 && (personil.data[indexTrue].isShowDetail = false);
        }
        personil.data[index].isShowDetail = !personil.data[index]?.isShowDetail;
        setPersonil({ ...personil });
    }

    useEffect(() => {
        getPersonil({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmanPersContext.Provider value={{ navigation, location, filter, personil, handleScroll, onSearch, onTogglePersonelDetail }}>
            {children}
        </BinmanPersContext.Provider>
    );
}

export const UseBinmanPersContext = () => {
    return useContext(BinmanPersContext);
}