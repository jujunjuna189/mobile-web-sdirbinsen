import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getSatuanKompersSatjarRequest } from "../../api/SatuanRequest";

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

        var fieldData = [];
        var valueData = [];

        var data = JSON.parse(item.form);
        Object.keys((data?.cellPins ?? {}))?.forEach((item) => {
            const keys = Object.keys(data.cellValues).filter(key => {
                // eslint-disable-next-line no-unused-vars
                const [_, col] = key.split('-'); // Pisahkan berdasarkan tanda "-"
                return Number(col) === Number(item); // Cek jika kolom sama
            });
            valueData.push(keys);
            fieldData.push(data?.cellPins[item].columnName);
        });

        var values = {};
        valueData.forEach((item, index) => {
            for (var i = 0; i < valueData[index].length; i++) {
                values = { ...values, [i]: [...(values[i] ?? []), valueData[index][i]] };
            }
        });

        dataBatch = {
            field: fieldData,
            value: values,
        };

        console.log(dataBatch);

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