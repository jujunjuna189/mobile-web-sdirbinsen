import { useNavigate } from "react-router-dom";
import { bnrBg, icAmmo, icArtillery, icBinoculars, icBrain, icCompass, icExplosive, icLightningCircle, icManagement, icSettings, icTank, icTowTruck, imgMainBg } from "../../assets";
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
                            <img src={icTank} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>BINMAT</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icArtillery, title: "Meriam & Peluncur Rocket" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icArtillery} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Meriam {'&'} Peluncur Roket</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icSettings, title: "Sistem Utama" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSettings} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Sistem Utama</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icManagement, title: "Sistem Pendukung" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icManagement} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Sistem Pendukung</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icTowTruck, title: "Kendaraan Penarik" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icTowTruck} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Kendaraan Penarik</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icBrain, title: "Alpibak" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icBrain} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Alpibak</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icBinoculars, title: "Albidik" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icBinoculars} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Albidik</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icCompass, title: "Aljar" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icCompass} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Aljar</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icLightningCircle, title: "Alhub" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icLightningCircle} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Alhub</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icExplosive, title: "Aldalbak" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icExplosive} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Aldalbak</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatSatuan, { state: { icon: icAmmo, title: "Data MKB" } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icAmmo} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data MKB</strong>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinmatPage;