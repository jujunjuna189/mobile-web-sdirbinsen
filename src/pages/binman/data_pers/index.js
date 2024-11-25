import { useNavigate } from "react-router-dom";
import { bnrBg, icArmy, icSoldier2, imgMainBg } from "../../../assets";
import { Content, Navbar } from "../../../components";
import { RouterName } from "../../../utils";

const BinmanPersPage = () => {
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
                            <img src={icArmy} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>Data Pers</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3" onClick={() => navigation(RouterName.binmanPersList, { state: { category: 'Akmil' } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Akmil</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmanPersList, { state: { category: 'Sepa Pk' } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Sepa Pk</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmanPersList, { state: { category: 'Secapa PK' } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Secapa PK</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmanPersList, { state: { category: 'Ba PK' } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Ba PK</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmanPersList, { state: { category: 'Ba Reg' } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Ba Reg</strong>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmanPersList, { state: { category: 'Ta' } })}>
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Ta</strong>
                        </div>
                    </div>
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinmanPersPage;