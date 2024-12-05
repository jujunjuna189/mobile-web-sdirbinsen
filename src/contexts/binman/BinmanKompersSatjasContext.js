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

    useEffect(() => {
        onChangeTab(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BinmanKompersSatjasListContext.Provider value={{ navigation, part, kompers, onSearch, onChangeTab }}>
            {children}
        </BinmanKompersSatjasListContext.Provider>
    );
}

export const UseBinmanKompersSatjasListContext = () => {
    return useContext(BinmanKompersSatjasListContext);
}