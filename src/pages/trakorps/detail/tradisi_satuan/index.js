import { Content, Navbar } from "../../../../components";
import { icCultural, imgMainBg } from "../../../../assets";
import { UseTrakorpsDetailTradisiSatuanContext } from "../../../../contexts/trakorps/TrakorpsDetailTradisiSatuanContext";

const TrakorpsTradisiSatuanPage = () => {
    const { satuan } = UseTrakorpsDetailTradisiSatuanContext();

    const checkFileType = (url) => {
        // Daftar ekstensi untuk gambar dan video
        const imageExtensions = ['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'];
        const videoExtensions = ['mp4', 'avi', 'mov', 'wmv', 'mkv', 'webm'];
        // Ambil ekstensi file dari URL
        const extension = url.split('.').pop().toLowerCase();

        if (imageExtensions.includes(extension)) {
            return 'image';
        } else if (videoExtensions.includes(extension)) {
            return 'video';
        } else {
            return 'unknown';
        }
    };

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
                            <img src={icCultural} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Tradisi Satuan</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md min-h-[75vh] p-3">
                        {(!satuan?.video && !satuan?.deskripsi) && (
                            <div className="flex justify-center py-3 flex-col items-center">
                                <span className="font-semibold">Tidak ada data</span>
                                <span>Data Tradisi Satuan Belum Ditambahkan</span>
                            </div>
                        )}
                        {(satuan?.video && checkFileType(satuan?.video) === "image") && (
                            <img src={satuan?.video} alt={"tradisi"} className={`w-full aspect-video rounded-lg border ${!satuan?.video && "bg-slate-400"}`} />
                        )}
                        {(satuan?.video && checkFileType(satuan?.video) === "video") && (
                            <video controls>
                                <source src={satuan?.video + '?time=' + new Date().getTime()} />
                            </video>
                        )}
                        {satuan?.deskripsi && (
                            <div className="mt-2">
                                <span className="font-semibold">Deskripsi</span>
                                <div className="mt-1" style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: satuan?.deskripsi ?? '-' }} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsTradisiSatuanPage;