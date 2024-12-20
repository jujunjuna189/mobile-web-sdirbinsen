import { useNavigate } from "react-router-dom";
import { bnrBg, icArmy, icDataGathering, icInfantry, imgBgNoBg, imgMainBg } from "../../assets";
import { Content, Navbar } from "../../components";
import { RouterName } from "../../utils";

const BinmanPage = () => {
    const navigation = useNavigate();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgBgNoBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="my-2 px-3 flex justify-center items-center">
                    <img src={bnrBg} alt="Banner gunner smart application" />
                    <div className="absolute pb-2">
                        <div className="flex justify-center items-center pt-1">
                            <img src={icInfantry} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>BINMAN</strong>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-1 px-3 mt-5 justify-center">
                    <div className="rounded-lg p-[0.20rem]" onClick={() => navigation(RouterName.binmanPers)}>
                        <div className="flex flex-row items-center h-full bg-[#4B7D5E] rounded-lg">
                            <div className="flex justify-center items-center py-2 px-2">
                                <img src={icArmy} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>DATA PERS</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg p-[0.20rem]" onClick={() => navigation(RouterName.binmanPetaJabatan)}>
                        <div className="flex flex-row items-center h-full bg-[#4B7D5E] rounded-lg">
                            <div className="flex justify-center items-center py-2 px-2">
                                <img src={icInfantry} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>PETA JABATAN</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-lg p-[0.20rem]" onClick={() => navigation(RouterName.binmanKompersSatjar)}>
                        <div className="flex flex-row items-center h-full bg-[#4B7D5E] rounded-lg">
                            <div className="flex justify-center items-center py-2 px-2">
                                <img src={icDataGathering} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>KOMPER SATJAR</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinmanPage;