import { imgMainBg } from "../../../assets";
import { Content, Navbar } from "../../../components";
import { UseBinsiapsatSatgasMenusContext } from "../../../contexts/binsiapsat/BinsiapsatSatgasMenusContext";

const BinsiapsatSatgasMenusPage = () => {
    const { menus } = UseBinsiapsatSatgasMenusContext();
    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="px-3 mt-4 justify-center flex flex-col gap-2">
                    {menus.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] rounded-md px-3" onClick={() => item.onClick && item.onClick()}>
                                <div className="flex gap-2 items-center">
                                    <div className="flex justify-center items-center py-3">
                                        <img src={item.icon} alt="icon" className="w-[30px] -mb-1" />
                                    </div>
                                    <div className="flex justify-between grow">
                                        <div className="text-center">
                                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{item.title}</strong>
                                        </div>
                                    </div>
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
export default BinsiapsatSatgasMenusPage;