import { icFilter, icSoldier3, imgMainBg } from "../../../../assets";
import { Content, InputSearch, Navbar } from "../../../../components";
import { UseBinmanPetaJabatanListContext } from "../../../../contexts/binman/BinmanPetaJabatanListContext";

const BinmanPetaJabatanListPage = () => {
    const { satuan } = UseBinmanPetaJabatanListContext();
    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="px-3 mt-1">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3">
                        <div className="flex justify-between grow">
                            <div className="flex gap-2 items-center">
                                <div className="flex justify-center items-center py-1">
                                    {satuan?.logo ? (
                                        <img src={satuan?.logo} alt="icon" className="w-[35px] h-[35px] object-contain" />
                                    ) : (
                                        <div className="w-[35px] h-[35px]" />
                                    )}
                                </div>
                                <div className="text-center">
                                    <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{satuan?.nama ?? ''}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 mt-3 px-3">
                    <InputSearch onChange={(value) => { }} placeholder="Cari Jabatan..." />
                    <div className="bg-white px-4 py-2 rounded-lg flex justify-center items-center">
                        <img src={icFilter} alt="icon" className="w-8" />
                    </div>
                </div>
                <div className="flex gap-2 mt-3 px-3">
                    <div className="rounded bg-[#2E8288] p-3 text-center grow">
                        <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Jabatan Terisi</strong>
                    </div>
                    <div className="rounded bg-[#81070A] p-3 text-center grow">
                        <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Jabatan Kosong</strong>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    {([1, 2])?.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md px-2 py-2 relative mb-2">
                                <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{index + 1}</span>
                                </div>
                                <div className="pl-4 pr-2">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Tes Nama Lengkap</span>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Lama: 0 Tahun 7 Bulan</span>
                                    </div>
                                    <div className="bg-white border border-black rounded-md p-2">
                                        <div className="flex gap-2">
                                            <div>
                                                <img src={icSoldier3} alt="img" width={60} />
                                            </div>
                                            <div className="leading-5">
                                                <div className="flex gap-1">
                                                    <div className="w-16">
                                                        <span className="font-medium">Nama</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium">: Januar Idrus</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16">
                                                        <span className="font-medium">NRP</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium">: 111069398294290</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16">
                                                        <span className="font-medium">Pangkat</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium">: Mayor</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16">
                                                        <span className="font-medium">TMT</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium">: 06 September 2024</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default BinmanPetaJabatanListPage;