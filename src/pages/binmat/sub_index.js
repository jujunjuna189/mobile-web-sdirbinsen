import { bnrBg, icAbstract, imgMainBg } from "../../assets";
import { Content, Navbar } from "../../components";
import { UseBinmatSubContext } from "../../contexts/binmat/BinmatSubContext";
import { RouterName } from "../../utils";

const BinmatSubPage = () => {
    const { navigation, location, satuan, category } = UseBinmatSubContext();
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
                            <img src={icAbstract} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center mt-3 flex flex-col">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>KOMPONEN</strong>
                            <small className="text-[#D6D156] font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{satuan.nama}</small>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    {category.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md flex gap-2 items-center px-3 mt-2" onClick={() => navigation(RouterName.binmatList, { state: { ...location.state, type: { title: item.title, key: item.key } } })}>
                                <div className="flex justify-center items-center py-1">
                                    <img src={item.icon} alt="icon" className="w-[40px] -mb-1" />
                                </div>
                                <div className="text-center">
                                    <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{item.title}</strong>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="h-20" />
            </div>
        </Content>
    );
}
export default BinmatSubPage;