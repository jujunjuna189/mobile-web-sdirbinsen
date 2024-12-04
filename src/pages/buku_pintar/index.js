import { useNavigate } from "react-router-dom";
import { bnrBg, icArtillery, icChecked, icDrone, icMeasureDistance, icNote, icOnlineLesson, icRupiah, icStartup, imgMainBg } from "../../assets";
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
                <div className="grid md:grid-cols-3 grid-cols-2 gap-5 px-3 mt-6 justify-center">
                    <div className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "alutsista" } })}>
                        <div className="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icArtillery} alt="icon" className="w-[55px] -mb-2 object-fill" />
                            </div>
                            <div className="text-center mt-2">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Alutsista Armed</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "munisi" } })}>
                        <div className="h-full bg-[#4B7D5E] flex flex-col justify-between">
                            <div className="flex justify-center items-center py-1 mt-2">
                                <img src={icChecked} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center mt-2">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Tugas {'&'} Tanggung Jawab</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "pejabat-satuan" } })}>
                        <div className="h-full bg-[#4B7D5E]">
                            <div className="flex justify-center items-center py-1">
                                <img src={icDrone} alt="icon" className="w-[55px] -mb-2" />
                            </div>
                            <div className="text-center mt-2">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Hasil Litbang</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "pejabat-satuan" } })}>
                        <div className="h-full bg-[#4B7D5E] flex flex-col justify-between">
                            <div className="flex justify-center items-center py-1 mt-2">
                                <img src={icRupiah} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center mt-2">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Prioritas Renbut</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "pejabat-satuan" } })}>
                        <div className="h-full bg-[#4B7D5E] flex flex-col justify-between">
                            <div className="flex justify-center items-center py-1 mt-2">
                                <img src={icNote} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center mt-2">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Program TOT {'&'} TOK</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "pejabat-satuan" } })}>
                        <div className="h-full bg-[#4B7D5E] flex flex-col justify-between">
                            <div className="flex justify-center items-center py-1 mt-2">
                                <img src={icMeasureDistance} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center mt-2">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Roadmap Siapsat Armed</strong>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.bukuPintarList, { state: { path: "pejabat-satuan" } })}>
                        <div className="h-full bg-[#4B7D5E] flex flex-col justify-between">
                            <div className="flex justify-center items-center py-1 mt-2">
                                <img src={icStartup} alt="icon" className="w-[40px] -mb-2" />
                            </div>
                            <div className="text-center mt-2">
                                <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Renbanglarsat Armed</strong>
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