import { Content, InputSearch, Navbar } from "../../../../components";
import { icFilter, icPeople, icSoldier2, imgMainBg } from "../../../../assets";

const BinmanPersListPage = () => {

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="px-3 mt-1">
                    <div class="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3">
                        <div className="flex justify-between grow">
                            <div className="flex gap-2 items-center">
                                <div className="flex justify-center items-center py-1">
                                    <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                                </div>
                                <div className="text-center">
                                    <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Akmil</strong>
                                </div>
                            </div>
                            <div className="rounded-md border border-[#FFDB66] my-1 bg-[#2E8288] flex justify-center items-center px-3">
                                <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>6 Personel</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 mt-3 px-3">
                    <InputSearch placeholder="Cari Personel..." />
                    <div className="bg-white px-4 py-2 rounded-lg flex justify-center items-center">
                        <img src={icFilter} alt="icon" className="w-8" />
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative mb-2">
                        <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                            <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>1</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="">
                                <img src={icPeople} alt="img" width={80} />
                            </div>
                            <div>
                                <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Moh Naudi Nudika, S.I.P .M.Si,. M. Tr.</span>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>NRP: 1910044720469</span>
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Satuan: PUSSENARMED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative mb-2">
                        <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                            <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>2</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="">
                                <img src={icPeople} alt="img" width={80} />
                            </div>
                            <div>
                                <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Moh Naudi Nudika, S.I.P .M.Si,. M. Tr.</span>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>NRP: 1910044720469</span>
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Satuan: PUSSENARMED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative mb-2">
                        <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                            <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>3</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="">
                                <img src={icPeople} alt="img" width={80} />
                            </div>
                            <div>
                                <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Moh Naudi Nudika, S.I.P .M.Si,. M. Tr.</span>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>NRP: 1910044720469</span>
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Satuan: PUSSENARMED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative mb-2">
                        <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                            <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>4</span>
                        </div>
                        <div className="flex gap-2">
                            <div className="">
                                <img src={icPeople} alt="img" width={80} />
                            </div>
                            <div>
                                <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Moh Naudi Nudika, S.I.P .M.Si,. M. Tr.</span>
                                <div className="mt-2 flex flex-col">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>NRP: 1910044720469</span>
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Satuan: PUSSENARMED</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default BinmanPersListPage;