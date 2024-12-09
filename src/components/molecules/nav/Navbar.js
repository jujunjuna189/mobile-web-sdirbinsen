import { useNavigate } from "react-router-dom";
import { logLogo } from "../../../assets";
import { RouterName } from "../../../utils";

const Navbar = () => {
    const navigation = useNavigate();
    return (
        <div>
            <div className="flex justify-between py-2 px-3">
                <div className="leading-3 flex gap-3 cursor-pointer" onClick={() => navigation(RouterName.board)}>
                    <img src={logLogo} alt="logo gunner smart app" className="rounded-md shadow-all-yellow" width={40} />
                    <span className="font-semibold text-2xl text-[#F9FF3F]">Gunner Smart App</span>
                </div>
                <div className="w-10 h-10 border border-red-500 rounded-full bg-slate-300"></div>
            </div>
        </div>
    );
}

export default Navbar;