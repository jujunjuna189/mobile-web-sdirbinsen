import { useNavigate } from "react-router-dom";
import { bnrBg, icBook, icOnlineLesson, imgMainBg } from "../../assets";
import { Content, Navbar } from "../../components";
import { RouterName } from "../../utils";

const BukuPintarPage = () => {
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
                            <img src={icOnlineLesson} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>BUKU PINTAR</strong>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-5 px-3 mt-6 justify-center">
                    <div className="h-[5.5rem] w-[6.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "alutsista" } })}>
                        <div className=" h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icBook} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>ALUTSISTA</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] w-[6.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "munisi" } })}>
                        <div className="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icBook} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>MUNISI</strong>
                            </div>
                        </div>
                    </div>
                    <div className="h-[5.5rem] w-[6.5rem] rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "pejabat-satuan" } })}>
                        <div className="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icBook} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>PEJABAT SATUAN</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BukuPintarPage;