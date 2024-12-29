import { Content, Navbar } from "../../../../components";
import { icMilitaryMan, imgMainBg } from "../../../../assets";
import { UseTrakorpsDetailDataPejabatDansatContext } from "../../../../contexts/trakorps/TrakorpsDetailDataPejabatDansatContext";

const TrakorpsDataPejabatDansatPage = () => {
    const { satuan } = UseTrakorpsDetailDataPejabatDansatContext();

    const renderStar = (star) => {
        var element = [];
        if(star <= 4){
            for(var i = 1; i <= star; i++){
            element.push(
                <svg  xmlns="http://www.w3.org/2000/svg" className="text-yellow-500" width="16"  height="16"  viewBox="0 0 24 24"  fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
            );
            }
        }else{
            element.push(<span>Bintang tidak valid</span>);
        }
        
        return element;
    }

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
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Pejabat Dansat</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md min-h-[75vh] p-2">
                        {satuan?.data?.length === 0 && (
                            <div className="flex justify-center py-3 flex-col items-center">
                                <span className="font-semibold">Tidak ada data</span>
                                <span>Data Pejabat Dansat Belum Ditambahkan</span>
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
                                        <div className="flex justify-between">
                                            <span className="font-semibold text-[14px]">{item.nama}</span>
                                            <div className="flex items-center">
                                                {renderStar(item.star ?? 0)}
                                            </div>
                                        </div>
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
export default TrakorpsDataPejabatDansatPage;