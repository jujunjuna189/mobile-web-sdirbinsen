import { imgMainBg } from "../../../assets";
import { Content, Navbar } from "../../../components";
import { UseBinsiapsatSatgasPreviewContext } from "../../../contexts/binsiapsat/BinsiapsatSatgasPreviewContext";

const BinsiapsatSatgasPreviewPage = () => {
    const { location, siapsat } = UseBinsiapsatSatgasPreviewContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="px-3 mt-1">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3">
                        <div className="flex justify-center items-center py-2">
                            <img src={location?.state?.category?.icon} alt="icon" className="w-[35px]" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{location?.state?.category?.title ?? ''}</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md min-h-[75vh] p-3">
                        {!siapsat?.[location.state?.category?.title]?.description && (
                            <div className="flex justify-center py-3 flex-col items-center">
                                <span className="font-semibold">Tidak ada data</span>
                                <span>Data belum ditambahkan</span>
                            </div>
                        )}
                        <div className="mt-3" style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: siapsat?.[location.state?.category?.title]?.description ?? '' }} />
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default BinsiapsatSatgasPreviewPage;