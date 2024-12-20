import { Content, InputSearch, Navbar } from "../../../../components";
import { icPeople, icSoldier2, imgMainBg } from "../../../../assets";
import { UseBinmanPersContext } from "../../../../contexts/binman/BinmanPersContext";
import FilterPersonilPopup from "../../component/popup/FilterPersonilPopup";

const BinmanPersListPage = () => {
    const { location, filter, personil, handleScroll, onSearch, onTogglePersonelDetail } = UseBinmanPersContext();
    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto" onScroll={handleScroll}>
                <Navbar />
                <div className="sticky top-0 z-10 bg-black pb-2">
                    <div className="px-3 mt-1">
                        <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3">
                            <div className="flex justify-between grow">
                                <div className="flex gap-2 items-center">
                                    <div className="flex justify-center items-center py-1">
                                        <img src={icSoldier2} alt="icon" className="w-[40px] -mb-1" />
                                    </div>
                                    <div className="text-center">
                                        <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{location.state?.category ?? ''}</strong>
                                    </div>
                                </div>
                                <div className="rounded-md border border-[#FFDB66] my-1 bg-[#2E8288] flex justify-center items-center px-3">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{personil?.total ?? '0'} Personel</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3 px-3">
                        <InputSearch onChange={(value) => onSearch({ search: value })} placeholder="Cari Personel..." />
                        <FilterPersonilPopup onFilter={(value) => onSearch({ tmt_1: value })} />
                    </div>
                    {(Object.keys(filter).length > 0 && Object.keys(filter).every((item) => filter[item] !== "")) && (
                        <div className="px-3 mt-2 text-white flex flex-row gap-1">
                            <span className="">Filter:</span>
                            <div className="flex flex-row gap-2">
                                {Object.keys(filter).map((item, index) => {
                                    return (
                                        <span key={index}>{filter[item]}</span>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>
                <div className="px-3 mt-2 justify-center">
                    {personil?.data?.length === 0 && (
                        <div className="bg-[#4B7D5E] rounded-md px-2 py-5 bg-opacity-60 relative mb-2 text-center flex flex-col">
                            <span className="text-white font-medium text-base">Tidak ada data personel</span>
                        </div>
                    )}
                    {personil?.data?.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative mb-2" onClick={() => onTogglePersonelDetail(index)}>
                                <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{index + 1}</span>
                                </div>
                                <div className="flex gap-2">
                                    <div className="">
                                        <img src={icPeople} alt="img" width={80} />
                                    </div>
                                    <div>
                                        <span className="text-white font-bold uppercase" style={{ textShadow: "0px 1px 3px #000000" }}>{item.nama}</span>
                                        <div className="mt-2 flex flex-col">
                                            <span className="text-white" style={{ textShadow: "0px 1px 3px #000000" }}>NRP: {item.nrp}</span>
                                            <span className="text-white" style={{ textShadow: "0px 1px 3px #000000" }}>Satuan: {item.satuan?.nama}</span>
                                        </div>
                                    </div>
                                </div>
                                {item.isShowDetail && (
                                    <div className="bg-white border border-black rounded-md p-2">
                                        <div className="flex gap-2">
                                            <div className="leading-5">
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Tgl Lahir</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.tanggal_lahir ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Tmp Lahir</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.tempat_lahir ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Agama</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.agama ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Suku Bangsa</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.suku_bangsa ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Gol Darah</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.golongan_darah ?? '-'}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="my-2" />
                                        <div className="flex gap-2">
                                            <div className="leading-5">
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Jabatan</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.jabatan ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Pangkat</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.pangkat ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Korps</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.korps ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Sumber PA</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.sumber_pa ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">TMT</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.tmt_1 ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">TMT Jab</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.tmt_jab ?? '-'}</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                        <span className="font-medium">Psi</span>
                                                        <span>:</span>
                                                    </div>
                                                    <div className="grow">
                                                        <span className="font-medium"> {item.psi ?? '-'}</span>
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
export default BinmanPersListPage;