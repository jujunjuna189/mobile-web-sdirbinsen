import { icMarchingBand, imgMainBg } from "../../../../assets";
import { AudioPlayer, Content, Navbar } from "../../../../components";
import { UseTrakorpsDetailContext } from "../../../../contexts/trakorps/TrakorpsDetailContext";

const TrakorpsHymnePage = () => {
    const { satuan } = UseTrakorpsDetailContext();

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
                            <img src={icMarchingBand} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Hymne</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md p-3">
                        {satuan?.hymne_lagu ? (
                            <AudioPlayer source={satuan?.hymne_lagu ?? ''} />
                        ) : (
                            <span>Lagu himne belum ditambahkan</span>
                        )}
                    </div>
                    <div className="bg-white rounded-md min-h-[75vh] p-3 mt-2">
                        {(!satuan?.hymne || satuan?.hymne === '-') && (
                            <div className="flex justify-center py-3 flex-col items-center">
                                <span className="font-semibold">Tidak ada lirik</span>
                                <span>Lirik Hymne Belum Ditambahkan</span>
                            </div>
                        )}
                        <div className="mt-3" dangerouslySetInnerHTML={{ __html: satuan?.hymne }} />
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsHymnePage;