import { useNavigate } from "react-router-dom";
import { bnrBg, icDataGathering, icEssay, icProcess, icWorkPlan, imgMainBg } from "../../assets";
import { Content, Navbar } from "../../components";
import { RouterName } from "../../utils";

const BinsiapsatPage = () => {
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
                            <img src={icDataGathering} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>BINSIAPSAT</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3" onClick={() => navigation(RouterName.binsiapsatSatuan, { state: { category: { title: "PEMBINAAN SATUAN", key: "haljol" } } })}>
                        <div className="flex justify-center items-center py-2">
                            <img src={icProcess} alt="icon" className="w-[30px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Haljol Binsat Armed</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binsiapsatSatuan, { state: { category: { title: "DATA EKKO", key: "ekko" } } })}>
                        <div className="flex justify-center items-center py-2">
                            <img src={icEssay} alt="icon" className="w-[30px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data EKKO</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binsiapsatSatgasMenus, { state: { category: { key: "satgas" } } })}>
                        <div className="flex justify-center items-center py-2">
                            <img src={icWorkPlan} alt="icon" className="w-[30px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Satuan Satgat OPS DN</strong>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinsiapsatPage;