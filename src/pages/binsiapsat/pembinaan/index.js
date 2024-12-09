import { imgMainBg } from "../../../assets";
import { Content, Navbar } from "../../../components";
import { UseBinsiapsatPembinaanContext } from "../../../contexts/binsiapsat/BinsiapsatPembinaanContext";

const BinsiapsatPembinaanPage = () => {
    const { satuan, menus, siapsat, onTogglePersonelDetail } = UseBinsiapsatPembinaanContext();
    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="px-3 mt-1">
                    <div className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3">
                        <div className="flex justify-between grow">
                            <div className="flex gap-2 items-center">
                                <div className="flex justify-center items-center py-1">
                                    {satuan?.logo ? (
                                        <img src={satuan?.logo} alt="icon" className="w-[35px] h-[35px] object-contain" />
                                    ) : (
                                        <div className="w-[35px] h-[35px]" />
                                    )}
                                </div>
                                <div className="text-center">
                                    <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{satuan?.nama ?? ''}</strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center flex flex-col gap-2">
                    {menus.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md px-3" onClick={() => onTogglePersonelDetail(index)}>
                                <div className="flex gap-2 items-center">
                                    <div className="flex justify-center items-center py-6">
                                        {/* <img src={icDataGathering} alt="icon" className="w-[40px] -mb-1" /> */}
                                    </div>
                                    <div className="flex justify-between grow">
                                        <div className="text-center">
                                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{item.title}</strong>
                                        </div>
                                        <div>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 9l6 6l6 -6" /></svg>
                                        </div>
                                    </div>
                                </div>
                                {item.isShowDetail && (
                                    <div className="bg-white border border-black rounded-md p-2 mb-3">
                                        <div className="flex gap-2">
                                            <div className="leading-5 min-h-72">
                                                {(!siapsat.image && !siapsat.description) && (
                                                    <span>Tidak ada data</span>
                                                )}
                                                {siapsat.image && (
                                                    <div className="flex justify-center">
                                                        <img src={siapsat.image} alt={siapsat.nama} className={`aspect-square rounded-lg ${!siapsat.image && "bg-slate-400"}`} />
                                                    </div>
                                                )}
                                                {siapsat.description && (
                                                    <div style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: siapsat.description }} />
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinsiapsatPembinaanPage;