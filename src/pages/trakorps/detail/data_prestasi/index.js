import { Content, Navbar } from "../../../../components";
import { icExperts, imgMainBg } from "../../../../assets";
import { UseTrakorpsDetailDataPrestasiContext } from "../../../../contexts/trakorps/TrakorpsDetailDataPrestasiContext";

const TrakorpsDataPrestasiPage = () => {
    const { satuan } = UseTrakorpsDetailDataPrestasiContext();

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
                            <img src={icExperts} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Prestasi</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md min-h-[75vh] p-2">
                        {satuan?.data?.length === 0 && (
                            <div className="flex justify-center py-3 flex-col items-center">
                                <span className="font-semibold">Tidak ada data</span>
                                <span>Data Prestasi Belum Ditambahkan</span>
                            </div>
                        )}
                        {satuan?.data?.map((item, index) => {
                            if (item.kategori === 'perorangan') {
                                return (
                                    <div key={index} className="border py-1 px-1 rounded-lg">
                                        <div className="flex gap-3 mb-2">
                                            {item.gambar && (
                                                <div className="h-16 max-h-16 min-h-16 w-16 max-w-16 min-w-16 relative border rounded-lg overflow-hidden mt-1">
                                                    <img src={item.gambar} alt="ImagePrestasi" className="object-cover w-full h-full" />
                                                </div>
                                            )}
                                            <div className="leading-5">
                                                <div className="">
                                                    <div className="flex gap-1">
                                                        <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                            <span className="font-medium">Nama</span>
                                                            <span>:</span>
                                                        </div>
                                                        <div className="grow">
                                                            <span className="font-medium"> {item.nama ?? '-'}</span>
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
                                                            <span className="font-medium">Tahun</span>
                                                            <span>:</span>
                                                        </div>
                                                        <div className="grow">
                                                            <span className="font-medium"> {item.tahun ?? '-'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="my-2" />
                                                <span className="font-semibold text-[14px]">{item.title}</span>
                                                <div className="mt-3" style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: item.deskripsi }} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            } else {
                                return (
                                    <div key={index} className="border py-1 px-1 rounded-lg">
                                        <div className="flex gap-3 mb-2">
                                            {item.gambar && (
                                                <div className="h-16 max-h-16 min-h-16 w-16 max-w-16 min-w-16 relative border rounded-lg overflow-hidden mt-1">
                                                    <img src={item.gambar} alt="ImagePrestasi" className="object-cover w-full h-full" />
                                                </div>
                                            )}
                                            <div className="leading-5">
                                                <div className="">
                                                    <div className="flex gap-1">
                                                        <div className="w-16 max-w-16 min-w-16 flex justify-between">
                                                            <span className="font-medium">Tahun</span>
                                                            <span>:</span>
                                                        </div>
                                                        <div className="grow">
                                                            <span className="font-medium"> {item.tahun ?? '-'}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="my-2" />
                                                <span className="font-semibold text-[14px]">{item.title}</span>
                                                <p>{item.deskripsi}</p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        })}
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsDataPrestasiPage;