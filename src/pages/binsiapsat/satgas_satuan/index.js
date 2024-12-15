import { bnrBg, icDataGathering, icHourglass, imgMainBg } from "../../../assets";
import { Content, InputSearch, Navbar } from "../../../components";
import { UseBinsiapsatSatuanContext } from "../../../contexts/binsiapsat/BinsiapsatSatuanContext";
import { RouterName } from "../../../utils";

const BinsiapsatSatgasSatuanPage = () => {
    const { navigation, location, satuan, onSearch } = UseBinsiapsatSatuanContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="my-2 px-3 flex justify-center items-center">
                    <img src={bnrBg} alt="Banner gunner smart application" />
                    <div className="absolute pb-2">
                        <div className="flex justify-center items-center pt-1">
                            <img src={location.state?.category?.icon ?? icDataGathering} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>{location.state?.category?.title ?? "PEMBINAAN SATUAN"}</strong>
                        </div>
                    </div>
                </div>
                <div className="sticky top-0 z-10 bg-black py-2">
                    <div className="flex gap-3 px-3">
                        <InputSearch onChange={(value) => onSearch({ value: value })} placeholder="Cari Satuan..." />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-5 px-3 mt-4 justify-center">
                    {satuan?.data?.map((item, index) => {
                        return (
                            <div key={index} className="rounded-md bg-gradient-to-r from-[#A49F1D] via-[#FFFDBC] to-[#CFB20E] p-[0.20rem]" onClick={() => navigation(RouterName.binsiapsatSatgasPreview, { state: { satuan: item, category: { icon: icHourglass, title: "Riwayat Satgas" } } })}>
                                <div className="h-full bg-[#4B7D5E]">
                                    <div className="flex justify-center items-center py-1">
                                        <img src={item.logo} alt="icon" className="w-[50px] max-w-[50px] h-[55px] -mb-2" />
                                    </div>
                                    <div className="text-center leading-5 mt-2">
                                        <strong className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{item.nama}</strong>
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
export default BinsiapsatSatgasSatuanPage;