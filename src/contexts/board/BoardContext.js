import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAnnouncementRequest } from "../../api/AnnouncementRequest";

const BoardContext = createContext();

export const BoardContextProvider = ({ children }) => {
    const navigation = useNavigate();
    const location = useLocation();
    // local state
    const [announcement, setAnnouncement] = useState({});

    const getAnnouncement = async ({ filter = "" }) => {
        await getAnnouncementRequest({}).then((res) => {
            setAnnouncement(res);
        });
    }

    useEffect(() => {
        getAnnouncement({});
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <BoardContext.Provider value={{ navigation, location, announcement }}>
            {children}
        </BoardContext.Provider>
    );
}

export const UseBoardContext = () => {
    return useContext(BoardContext);
}