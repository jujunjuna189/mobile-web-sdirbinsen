import { Content, Navbar } from "../../../../components";
import { icExperts, imgMainBg } from "../../../../assets";
import { useState } from "react";
import { RouterName } from "../../../../utils";
import { useLocation, useNavigate } from "react-router-dom";

const TrakorpsMenusPrestasiPage = () => {
    const navigation = useNavigate();
    const location = useLocation();
    const [menus, setMenus] = useState([
        {
            title: 'Tugas Operasi',
            isActive: false,
        },
        {
            title: 'Olahraga',
            isActive: false,
        }
    ]);

    const onTab = (index) => {
        menus.forEach((item) => {
            item.isActive = false;
        });

        menus[index].isActive = true;
        setMenus([...menus]);
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
                            <img src={icExperts} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Data Prestasi</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    {menus.map((item, index) => {
                        return (
                            <div key={index} className="mb-2 cursor-pointer" onClick={() => onTab(index)}>
                                <div className="bg-[#4B7D5E] rounded-lg px-2 py-3">
                                    <div className="flex gap-2 items-center">
                                        <div className="flex justify-center items-center py-1">
                                            {/* <img src={icExperts} alt="icon" className="w-[40px] -mb-1" /> */}
                                        </div>
                                        <div className="text-center">
                                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>{item.title}</strong>
                                        </div>
                                    </div>
                                    <div>
                                        {item.isActive && (
                                            <div>
                                                <div className="bg-white rounded-lg mt-2 mx-2 p-2" onClick={() => navigation(RouterName.trakorpsDetailDataPrestasi, {state: {...location.state, bidang: item.title, kategori: 'satuan'}})}>
                                                    Satuan
                                                </div>
                                                <div className="bg-white rounded-lg mt-2 mx-2 p-2" onClick={() => navigation(RouterName.trakorpsDetailDataPrestasi, {state: {...location.state, bidang: item.title, kategori: 'perorangan'}})}>
                                                    Perorangan
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsMenusPrestasiPage;