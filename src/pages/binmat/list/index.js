import { icFilter, imgMainBg } from "../../../assets";
import { Content, InputSearch, Navbar } from "../../../components";
import { UseBinmatListContext } from "../../../contexts/binmat/BinmatListContext";

const BinmatListPage = () => {
    const { location, materiel, onSearch } = UseBinmatListContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="sticky top-0 z-10 bg-black pb-2">
                    <div className="flex gap-3 mt-3 px-3">
                        <InputSearch onChange={(value) => onSearch({ value: value })} placeholder={`Cari ${location.state?.category?.title}...`} />
                        <div className="bg-white px-4 py-2 rounded-lg flex justify-center items-center">
                            <img src={icFilter} alt="icon" className="w-8" />
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-2 justify-center">
                    {materiel?.data?.length === 0 && (
                        <div className="bg-[#4B7D5E] rounded-md px-2 py-5 bg-opacity-60 relative mb-2 text-center flex flex-col">
                            <span className="text-white font-medium text-base">Tidak ada data meteriel</span>
                        </div>
                    )}
                    {materiel?.data?.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative mb-2">
                                <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{index + 1}</span>
                                </div>
                                <div className="flex justify-between pl-5">
                                    <div className="leading-5">
                                        <span className="text-white font-bold uppercase" style={{ textShadow: "0px 1px 3px #000000" }}>{item.nama}</span>
                                        <div className="mt-2 text-white text-[14px]">
                                            <div className="flex gap-1">
                                                <div className="w-16 flex justify-between">
                                                    <span className="font-medium">Satuan</span>
                                                    <span className="font-medium">:</span>
                                                </div>
                                                <div className="grow">
                                                    <span className="font-medium">{item.satuan?.nama ?? '-'}</span>
                                                </div>
                                            </div>
                                            {["taktik", "pengamanan"].includes(location.state?.type?.key) !== true && (
                                                <>
                                                    <div className="flex gap-1">
                                                        <div className="w-16 flex justify-between">
                                                            <span className="font-medium">Kondisi</span>
                                                            <span className="font-medium">:</span>
                                                        </div>
                                                        <div className="grow">
                                                            <span className="font-medium">{item.kondisi}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-1">
                                                        <div className="w-16 flex justify-between">
                                                            <span className="font-medium">Jumlah</span>
                                                            <span className="font-medium">:</span>
                                                        </div>
                                                        <div className="grow">
                                                            <span className="font-medium">{item.jumlah}</span>
                                                        </div>
                                                    </div>
                                                </>
                                            )}
                                            <div className="flex gap-1">
                                                <div className="w-16 flex justify-between">
                                                    <span className="font-medium">Keterangan</span>
                                                    <span className="font-medium">:</span>
                                                </div>
                                                <div className="grow">
                                                    <span className="font-medium">{item.keterangan}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {["taktik", "pengamanan"].includes(location.state?.type?.key) !== true && (
                                        <div className="bg-gray-300 rounded-lg overflow-hidden w-[100px] h-[80px] flex justify-center items-center">
                                            {item.file ? (
                                                <img src={item.file} alt="gambar" className="w-full h-full" />
                                            ) : (
                                                <label>Tidak ada gambar</label>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinmatListPage;