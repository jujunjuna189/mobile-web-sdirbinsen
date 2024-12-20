import { icBookMilitary, icFilter, imgMainBg } from "../../../assets";
import { Content, InputSearch, Navbar } from "../../../components";
import { UseBukuPintarListContext } from "../../../contexts/buku_pintar/BukuPintarContext";

const BukuPintarListPage = () => {
    const { learning, location, onSearch } = UseBukuPintarListContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="sticky top-0 z-10 bg-black pb-2">
                    <div className="px-3 mt-1">
                        <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 py-2">
                            <div className="flex gap-2 items-center">
                                <div className="text-center">
                                    <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{location.state?.title ?? ''}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 mt-3 px-3">
                        <InputSearch onChange={(value) => onSearch({ value: value })} placeholder={`Cari Buku...`} />
                        <div className="bg-white px-4 py-2 rounded-lg flex justify-center items-center">
                            <img src={icFilter} alt="icon" className="w-8" />
                        </div>
                    </div>
                </div>
                {learning?.data?.length === 0 && (
                    <div className="mt-2 px-3">
                        <div className="bg-[#4B7D5E] rounded-md px-2 py-5 bg-opacity-60 relative mb-2 text-center flex flex-col leading-4">
                            <span className="text-white font-medium text-base">Tidak ada data buku</span>
                            <small className="text-white">Buku belum ditambahkan</small>
                        </div>
                    </div>
                )}
                <div className="grid grid-cols-2 gap-3 px-3 mt-2 justify-center">
                    {learning?.data?.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md px-2 py-2 bg-opacity-60 relative" onClick={() => window.open(`https://docs.google.com/gview?url=${item.file}`, '_self')}>
                                <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{index + 1}</span>
                                </div>
                                <div className="flex flex-col justify-between">
                                    <div className="bg-gray-300 rounded-lg overflow-hidden flex justify-center items-center">
                                        <div className="p-4">
                                            <img src={icBookMilitary} alt="gambar" className="w-full aspect-square" />
                                        </div>
                                    </div>
                                    <div className="leading-5">
                                        <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{item.jenis}</span>
                                        <div className="mt-2 text-white text-[14px]">
                                            <div className="">
                                                <span className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{item.title}</span>
                                            </div>
                                        </div>
                                    </div>
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
export default BukuPintarListPage;