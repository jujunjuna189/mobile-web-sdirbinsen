import { imgMainBg } from "../../../assets";
import { Content, Navbar } from "../../../components";

const BukuPintarPreviewPage = () => {
    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="sticky top-0 z-10 bg-black pb-2">
                    <div className="px-3 mt-1">
                        <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3">
                            <div className="flex justify-between grow">
                                <div className="flex gap-2 items-center">
                                    <div className="flex justify-center items-center py-1">
                                    </div>
                                    <div className="text-center">
                                        <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Buku Pintar</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-2 justify-center">

                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BukuPintarPreviewPage;