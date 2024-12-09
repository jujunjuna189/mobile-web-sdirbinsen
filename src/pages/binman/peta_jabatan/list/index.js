import { icFilter, icSoldier3, imgMainBg } from "../../../../assets";
import { Content, InputSearch, Navbar } from "../../../../components";
import { UseBinmanPetaJabatanListContext } from "../../../../contexts/binman/BinmanPetaJabatanListContext";
import { calculateDifferenceDate } from "../../../../utils/calculate/CalculateDate";
import { ValidDateConvert } from "../../../../utils/convert/ValidDateConvert";

const BinmanPetaJabatanListPage = () => {
    const { satuan, petaJabatanSummary, petaJabatan, onSearch, onFilter } = UseBinmanPetaJabatanListContext();
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
                    <InputSearch onChange={(value) => onSearch({ value: value })} placeholder="Cari Jabatan..." />
                    <div className="bg-white px-4 py-2 rounded-lg flex justify-center items-center">
                        <img src={icFilter} alt="icon" className="w-8" />
                    </div>
                </div>
                <div className="flex gap-2 mt-3 px-3">
                    <div className="rounded bg-[#2E8288] p-3 text-center grow" onClick={() => onFilter({ field: 'personil_id', value: "filled" })}>
                        <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{petaJabatanSummary?.filled ?? '-'} Jabatan Terisi</strong>
                    </div>
                    <div className="rounded bg-[#81070A] p-3 text-center grow" onClick={() => onFilter({ field: 'personil_id', value: "empty" })}>
                        <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{petaJabatanSummary?.empty ?? '-'} Jabatan Kosong</strong>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    {(Object.keys(petaJabatan?.data ?? {})).length === 0 && (
                        <div className="bg-[#4B7D5E] rounded-md px-2 py-5 bg-opacity-60 relative mb-2 text-center flex flex-col">
                            <span className="text-white font-medium text-base">Tidak ada data peta jabatan</span>
                        </div>
                    )}
                    {(Object.keys(petaJabatan?.data ?? {}))?.map((item, index) => {
                        return (
                            <div key={index}>
                                {petaJabatan?.data[item].map((itemChild, indexChild) => {
                                    return (
                                        <div key={indexChild} className={`${itemChild.personil ? "bg-[#2E8288]" : "bg-[#81070A]"} rounded-md px-2 py-2 relative mb-2`}>
                                            <div className={`absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full`}>
                                                <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{indexChild + 1}</span>
                                            </div>
                                            <div className="pl-4 pr-2">
                                                <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{itemChild.jabatan}</span>
                                                <div className="flex flex-col">
                                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>Lama: {itemChild.personil?.tmt_jab != null ? calculateDifferenceDate(ValidDateConvert(itemChild.personil?.tmt_jab), new Date()).years === 0 ? "Tahun" : `${calculateDifferenceDate(ValidDateConvert(itemChild.personil?.tmt_jab), new Date()).years} Tahun` : "-"} {itemChild.personil?.tmt_jab != null ? calculateDifferenceDate(ValidDateConvert(itemChild.personil?.tmt_jab), new Date()).months === 0 ? 'Bulan' : `${calculateDifferenceDate(ValidDateConvert(itemChild.personil?.tmt_jab), new Date()).months} Bulan` : "-"}</span>
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
                                                                    <span className="font-medium">: {itemChild.personil?.nama ?? '-'}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-1">
                                                                <div className="w-16">
                                                                    <span className="font-medium">NRP</span>
                                                                </div>
                                                                <div className="grow">
                                                                    <span className="font-medium">: {itemChild.personil?.nrp ?? '-'}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-1">
                                                                <div className="w-16">
                                                                    <span className="font-medium">Pangkat</span>
                                                                </div>
                                                                <div className="grow">
                                                                    <span className="font-medium">: {itemChild.personil?.pangkat ?? '-'}</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex gap-1">
                                                                <div className="w-16">
                                                                    <span className="font-medium">TMT</span>
                                                                </div>
                                                                <div className="grow">
                                                                    <span className="font-medium">: {itemChild.personil?.tmt_jab ?? '-'}</span>
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
                        );
                    })}
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default BinmanPetaJabatanListPage;