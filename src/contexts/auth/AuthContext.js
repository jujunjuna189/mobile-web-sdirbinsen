import { createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../api/AuthRequest";
import { clearLocal, setLocalUser } from "../../service/LocalStorage";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const navigation = useNavigate();

    const setInitial = (permission) => {
        var initial = '/board';
        return initial;
    }

    const login = async (username, password) => {
        await loginRequest({
            body: {
                username: username,
                password: password,
            }
        }).then((res) => {
            setLocalUser({ ...res });
            // Set initial page
            var initial = setInitial(res?.permission);
            res && navigation(initial);;
        });
    }

    const logout = () => {
        clearLocal();
        navigation('/');
    }

    return (
        <AuthContext.Provider value={{ login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const UseAuthContext = () => {
    return useContext(AuthContext);
}