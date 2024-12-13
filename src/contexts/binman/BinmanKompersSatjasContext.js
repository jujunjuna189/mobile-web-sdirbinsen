import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSatuanKompersSatjarRequest } from "../../api/SatuanRequest";
import { countColumnsWithKey, getColumnTableGenerator } from "../../service/TableGeneratorExplore";

const BinmanKompersSatjasListContext = createContext();

export const BinmanKompersSatjasListContextProvider = ({ children }) => {
    const navigation = useNavigate();
    // local state
    const [part, setPart] = useState([
        {
            title: 'Pa',
            key: 'Pa',
            isActive: true,
        },
        {
            title: 'Ba',
            key: 'Ba',
            isActive: false,
        },
        {
            title: 'Ta',
            key: 'Ta',
            isActive: false,
        },
    ]);
    const [kompers, setKompers] = useState({});

    const getKompersSatjas = async ({ search = "", filter = {} }) => {
        await getSatuanKompersSatjarRequest({ filter: `part=${filter.part ?? ""}&search=${search}` }).then((res) => {
            setKompers(res);
        });
    }

    const onSearch = ({ value }) => {
        getKompersSatjas({ search: value });
    }

    const onChangeTab = (index) => {
        part.forEach((item) => {
            item.isActive = false;
        });

        part[index].isActive = true;
        setPart([...part]);
        getKompersSatjas({ filter: { part: part[index].key } });
    }

    const getColumnKey = (item) => {
        var dataBatch = [];

        console.log(JSON.parse(item.form) ?? {});
        console.log(getColumnTableGenerator({ data: JSON.parse(item.form) ?? {}, keyword: 'Rekap' }));
        getColumnTableGenerator({ data: JSON.parse(item.form)?.mergedCells ?? [], columnKey: 'Rekap' }).filter((_, index) => index !== 0).forEach((itemChild) => {
            var field = {};
            const result = countColumnsWithKey(JSON.parse(item.form)?.cellValues, itemChild.col);
            result.forEach((itemChildData, indexChildData) => {
                field[itemChild.content] = JSON.parse(item.form)?.cellValues?.[`${itemChildData}`] ?? '-';
                dataBatch[indexChildData] = { ...dataBatch[indexChildData], ...field };
            });
        });

        return dataBatch;
    }

    const onTogglePersonelDetail = (index) => {
        if (!kompers.data[index].isShowDetail) {
            const indexTrue = kompers.data.findIndex((x) => x.isShowDetail === true);
            indexTrue >= 0 && (kompers.data[indexTrue].isShowDetail = false);
        }
        kompers.data[index].isShowDetail = !kompers.data[index]?.isShowDetail;
        setKompers({ ...kompers });
    }

    useEffect(() => {
        onChangeTab(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmanKompersSatjasListContext.Provider value={{ navigation, part, kompers, onSearch, onChangeTab, getColumnKey, onTogglePersonelDetail }}>
            {children}
        </BinmanKompersSatjasListContext.Provider>
    );
}

export const UseBinmanKompersSatjasListContext = () => {
    return useContext(BinmanKompersSatjasListContext);
}