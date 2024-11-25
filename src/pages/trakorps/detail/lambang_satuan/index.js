import { Content, Navbar } from "../../../../components";
import { icMilitary, imgMainBg } from "../../../../assets";
import { UseTrakorpsDetailLambangSatuanContext } from "../../../../contexts/trakorps/TrakorpsDetailLambangSatuanContext";

const TrakorpsLambangSatuanPage = () => {
    const { satuan } = UseTrakorpsDetailLambangSatuanContext();

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
                            <img src={icMilitary} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Lambang Satuan</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md min-h-[75vh] p-3">
                        {satuan?.picture && (
                            <img src={satuan.picture} alt={"lambang"} className={`w-full aspect-video rounded-lg border ${!satuan.picture && "bg-slate-400"}`} />
                        )}
                        <div className="mt-2">
                            <span className="font-semibold">Deskripsi</span>
                            <div className="mt-1" style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: satuan?.deskripsi ?? '-' }} />
                        </div>
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsLambangSatuanPage;