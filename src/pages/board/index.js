import { useNavigate } from "react-router-dom";
import { bnrName, icBase, icDataGathering, icInfantry, icOnlineLesson, icTank, icWarning, imgMainBg } from "../../assets";
import { Content, Navbar } from "../../components";
import { RouterName } from "../../utils";

const BoardPage = () => {
    const navigation = useNavigate();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="my-2 px-3 flex justify-center">
                    <img src={bnrName} alt="Banner gunner smart application" />
                </div>
                <div className="grid grid-cols-3 gap-5 px-3 mt-6 justify-center">
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.trakorps)}>
                        <div class=" h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icBase} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>TRAKORPS</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.binman)}>
                        <div class="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icInfantry} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>BINMAN</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
                        <div class="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icTank} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>BINMAT</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center gap-5 px-3 mt-6">
                    <div className="h-[5.5rem] w-[6.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
                        <div class="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icDataGathering} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>BINSIAPSAT</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] w-[6.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
                        <div class="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icOnlineLesson} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>BUKU PINTAR</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-center">
                    <div className="bg-[#4B7D5E] flex justify-center py-1 pr-3 pl-1 rounded-md">
                        <div className="flex gap-1 items-center">
                            <img src={icWarning} alt="icon" className="w-10 -mb-2" />
                            <span className="text-white text-[24px] font-extrabold" style={{ textShadow: "0px 1px 3px #000000" }}>Troop Info!</span>
                        </div>
                    </div>
                </div>
                <div className="px-3 my-3">
                    <div className="bg-[#D9D9D9] px-4 py-3 rounded-md font-semibold">
                        Prajurit Gunners memperingati HUT Ke 79 Tentara Nasional Indonesia Tahun 2024
                    </div>
                    <div className="bg-[#D9D9D9] px-4 py-3 rounded-md font-semibold mt-2">
                        Prajurit Gunners memperingati HUT Ke 79 Tentara Nasional Indonesia Tahun 2024
                    </div>
                    <div className="bg-[#D9D9D9] px-4 py-3 rounded-md font-semibold mt-2">
                        Prajurit Gunners memperingati HUT Ke 79 Tentara Nasional Indonesia Tahun 2024
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BoardPage;