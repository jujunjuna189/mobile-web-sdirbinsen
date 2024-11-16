import { logLogo } from "../../../assets";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between py-2 px-3">
                <div className="leading-3 flex gap-3">
                    <img src={logLogo} alt="logo gunner smart app" className="rounded-md shadow-all-yellow" width={40} />
                    <span className="font-semibold text-2xl text-[#F9FF3F]">Gunner Smart App</span>
                </div>
                <div className="w-10 h-10 border border-red-500 rounded-full bg-slate-300"></div>
            </div>
        </div>
    );
}

export default Navbar;