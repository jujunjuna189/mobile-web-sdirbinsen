import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getLearningRequest } from "../../api/LearningRequest";

const BukuPintarListContext = createContext();

export const BukuPintarListContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [learning, setLearning] = useState({});

    const getLearning = async ({ filter = "" }) => {
        await getLearningRequest({ path: location.state?.path, filter: `search=${filter}` }).then((res) => {
            setLearning(res);
            console.log(res);
        });
    }

    const onSearch = ({ value }) => {
        getLearning({ filter: value });
    }

    useEffect(() => {
        getLearning({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BukuPintarListContext.Provider value={{ navigation, location, learning, onSearch }}>
            {children}
        </BukuPintarListContext.Provider>
    );
}

export const UseBukuPintarListContext = () => {
    return useContext(BukuPintarListContext);
}