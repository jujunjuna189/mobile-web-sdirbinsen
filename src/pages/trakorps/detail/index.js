import { bnrBg, icCultural, icExperts, icMarchingBand, icMarchingBand2, icMilitary, icMilitaryMan, icSoldier, icWorldWar, imgMainBg } from "../../../assets";
import { Content, Navbar } from "../../../components";
import { UseTrakorpsDetailContext } from "../../../contexts/trakorps/TrakorpsDetailContext";
import { RouterName } from "../../../utils";

const TrakorpsDetailPage = () => {
    const { navigation, satuan } = UseTrakorpsDetailContext();
    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="my-2 px-3 flex justify-center items-center py-2">
                    <img src={bnrBg} alt="Banner gunner smart application" />
                    <div className="absolute pb-2">
                        <div className="flex justify-center items-center pt-1">
                            {satuan.logo && (
                                <img src={satuan?.logo} alt="icon" className="w-[60px] -mb-3" />
                            )}
                        </div>
                        <div className="text-center mt-3 px-3">
                            <strong className="text-[#D6D156] font-black text-xl" style={{ textShadow: "0px 1px 3px #000000" }}>{satuan?.nama}</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3" onClick={() => navigation(RouterName.trakorpsDetailSejarah)}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icWorldWar} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Sejarah</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.trakorpsDetailLambangSatuan, { state: { satuan: { id: satuan.id } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icMilitary} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Lambang Satuan</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.trakorpsDetailTradisiSatuan, { state: { satuan: { id: satuan.id } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icCultural} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Tradisi Satuan</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.trakorpsDetailDataPrestasi, { state: { satuan: { id: satuan.id } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icExperts} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Prestasi</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.trakorpsDetailDataPejabatDansat, { state: { satuan: { id: satuan.id } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icMilitaryMan} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Pejabat Dansat</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.trakorpsDetailDataPurnawirawan, { state: { satuan: { id: satuan.id } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Purnawirawan</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.trakorpsDetailMars, { state: { satuan: { id: satuan.id } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icMarchingBand2} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Lagu Mars</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.trakorpsDetailHymne, { state: { satuan: { id: satuan.id } } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icMarchingBand} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Lagu Hymne</strong>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default TrakorpsDetailPage;