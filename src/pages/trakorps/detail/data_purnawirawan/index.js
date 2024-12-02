import { Content, Navbar } from "../../../../components";
import { icMilitaryMan, imgMainBg } from "../../../../assets";
import { UseTrakorpsDetailDataPurnawirawanContext } from "../../../../contexts/trakorps/TrakorpsDetailDataPurnawirawanContext";

const TrakorpsDataPurnawirawanPage = () => {
    const { satuan } = UseTrakorpsDetailDataPurnawirawanContext();

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
                            <img src={icMilitaryMan} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Purnawirawan</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md min-h-[75vh] p-2">
                        {satuan?.data?.length === 0 && (
                            <div className="flex justify-center py-3 flex-col items-center">
                                <span className="font-semibold">Tidak ada data</span>
                                <span>Data Purnawirawan Belum Ditambahkan</span>
                            </div>
                        )}
                        {satuan?.data?.map((item, index) => {
                            return (
                                <div key={index} className="flex gap-3 border py-1 px-1 rounded-lg mb-2">
                                    {item.gambar && (
                                        <div className="h-16 max-h-16 min-h-16 w-16 max-w-16 min-w-16 relative border rounded-lg overflow-hidden mt-1">
                                            <img src={item.gambar} alt="ImagePrestasi" className="object-cover w-full h-full" />
                                        </div>
                                    )}
                                    <div className="leading-5">
                                        <span className="font-semibold text-[14px]">{item.nama}</span>
                                        <p>{item.deskripsi}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsDataPurnawirawanPage;