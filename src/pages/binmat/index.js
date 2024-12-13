import { useNavigate } from "react-router-dom";
import { bnrBg, icAmmo, icBrain, icManagement, icMateriel, icSettings, imgMainBg } from "../../assets";
import { Content, Navbar } from "../../components";
import { RouterName } from "../../utils";

const BinmatPage = () => {
    const navigation = useNavigate();
    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="my-2 px-3 flex justify-center items-center">
                    <img src={bnrBg} alt="Banner gunner smart application" />
                    <div className="absolute pb-2">
                        <div className="flex justify-center items-center pt-1">
                            <img src={icMateriel} alt="icon" className="w-[100px]" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>BINMAT</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { category: { icon: icSettings, title: "Sistem Utama", key: "sistem-utama" } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSettings} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Sistem Utama</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { category: { icon: icManagement, title: "Sistem Pendukung", key: "sistem-pendukung" } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icManagement} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Sistem Pendukung</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { category: { icon: icAmmo, title: "MKB", key: "mkb" } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icAmmo} alt="icon" className="w-[35px] -mb-1" />
                        </div>
                        <div className="text-center ml-1">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>MKB</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { category: { icon: icBrain, title: "Harwat", key: "harwat" } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icBrain} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Harwat</strong>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinmatPage;