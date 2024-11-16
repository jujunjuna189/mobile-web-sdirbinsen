import { useNavigate } from "react-router-dom";
import { bnrBg, icBase, icFilter, icInfantry, icTank, imgMainBg } from "../../assets";
import { Content, InputSearch, Navbar } from "../../components";
import { RouterName } from "../../utils";

const TrakorpsPage = () => {
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
                            <img src={icBase} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>TRAKORPS</strong>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 mt-3 px-3">
                    <InputSearch placeholder="Cari Satuan..." />
                    <div className="bg-white px-4 py-2 rounded-lg flex justify-center items-center">
                        <img src={icFilter} alt="icon" className="w-8" />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-5 px-3 mt-6 justify-center">
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.trakorpsDetail)}>
                        <div class=" h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icBase} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>TRAKORPS</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
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
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
                        <div class=" h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icBase} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>TRAKORPS</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
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
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
                        <div class=" h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icBase} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>TRAKORPS</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]">
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
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default TrakorpsPage;