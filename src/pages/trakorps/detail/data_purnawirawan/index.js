import { Content, Navbar } from "../../../../components";
import { icSoldier, imgMainBg } from "../../../../assets";
import { UseTrakorpsDetailDataPurnawirawanContext } from "../../../../contexts/trakorps/TrakorpsDetailDataPurnawirawanContext";

const TrakorpsDataPurnawirawanPage = () => {
    const { satuan, onTogglePersonelDetail } = UseTrakorpsDetailDataPurnawirawanContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="px-3 mt-1">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3">
                        <div className="flex justify-center items-center py-1">
                            <img src={icSoldier} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Purnawirawan</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    {satuan?.data?.length === 0 && (
                        <div className="bg-[#4B7D5E] rounded-md px-2 py-5 bg-opacity-60 relative mb-2 text-center flex flex-col">
                            <span className="text-white font-medium text-base">Tidak ada data</span>
                            <small className="text-white font-medium">Data Purnawirawan Belum Ditambahkan</small>
                        </div>
                    )}
                    {satuan?.data?.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative mb-2" onClick={() => onTogglePersonelDetail(index)}>
                                <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{index + 1}</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src={icSoldier} alt="img" width={80} />
                                    </div>
                                    <div>
                                        <span className="text-white font-bold uppercase" style={{ textShadow: "0px 1px 3px #000000" }}>{item.nama}</span>
                                        <div className="mt-2 flex flex-col">
                                            <span className="text-white" style={{ textShadow: "0px 1px 3px #000000" }}>Pangkat: {item.pangkat}</span>
                                            <span className="text-white" style={{ textShadow: "0px 1px 3px #000000" }}>Jabatan: {item.jabatan}</span>
                                        </div>
                                    </div>
                                </div>
                                {item.isShowDetail && (
                                    <div className="bg-white border border-black rounded-md p-2">
                                        <div className="flex gap-2">
                                            <div className="leading-5">
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Leting</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.leting ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">HP</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.no_hp ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Alamat</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.alamat ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Keterangan</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.deskripsi ?? '-'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsDataPurnawirawanPage;