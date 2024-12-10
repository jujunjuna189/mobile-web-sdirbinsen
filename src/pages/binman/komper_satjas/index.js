import { bnrBg, icArmedForces, icDataGathering, icFilter, imgMainBg } from "../../../assets";
import { Content, InputSearch, Navbar } from "../../../components";
import { UseBinmanKompersSatjasListContext } from "../../../contexts/binman/BinmanKompersSatjasContext";
import { dateFormatterV4 } from "../../../utils";

const BinmanKompersSatjarPage = () => {
    const { part, kompers, onSearch, onChangeTab, getColumnKey, onTogglePersonelDetail } = UseBinmanKompersSatjasListContext();
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
                            <img src={icDataGathering} alt="icon" className="w-[100px] -mb-3" />
                        </div>
                        <div className="text-center">
                            <strong className="text-[#D6D156] font-black text-2xl" style={{ textShadow: "0px 1px 3px #000000" }}>KOMPERS SATJAR</strong>
                        </div>
                    </div>
                </div>
                <div className="flex gap-4 px-3 mt-4 mb-2">
                    {part.map((item, index) => {
                        return (
                            <div key={index} className={`grow flex gap-2 items-center ${item.isActive ? "bg-[#C7CB26]" : "bg-[#4B7D5E]"} rounded py-2 px-2`} onClick={() => onChangeTab(index)}>
                                <img src={icArmedForces} alt="icon" className="w-[30px] -mb-2" />
                                <span className="font-bold text-white text-lg" style={{ textShadow: "0px 1px 3px #000000" }}>
                                    {item.title}
                                </span>
                            </div>
                        );
                    })}
                </div>
                <div className="sticky top-0 z-10 bg-black py-2">
                    <div className="flex gap-3 px-3">
                        <InputSearch onChange={(value) => onSearch({ value: value })} placeholder="Cari Kompers Satjar..." />
                        <div className="bg-white px-4 py-2 rounded-lg flex justify-center items-center">
                            <img src={icFilter} alt="icon" className="w-8" />
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    {kompers?.data?.length === 0 && (
                        <div className="bg-[#4B7D5E] rounded-md px-2 py-5 bg-opacity-60 relative mb-2 text-center flex flex-col">
                            <span className="text-white font-medium text-base">Tidak ada data kompers satjar</span>
                        </div>
                    )}
                    {kompers?.data?.map((item, index) => {
                        return (
                            <div key={index} className="bg-[#4B7D5E] border border-[#B8C558] rounded-md px-2 py-2 bg-opacity-60 relative mb-2" onClick={() => onTogglePersonelDetail(index)}>
                                <div className="absolute top-1 -left-2 w-6 h-6 bg-[#4B7D5E] border border-[#FFDB66] flex justify-center items-center rounded-full">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{index + 1}</span>
                                </div>
                                <div className="pl-4 pr-2">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>{item.title}</span>
                                </div>
                                <div className="mt-5 pl-4 pr-2 flex justify-end">
                                    <span className="text-white font-bold" style={{ textShadow: "0px 1px 3px #000000" }}>
                                        Dibuat: {dateFormatterV4(item.created_at)}
                                    </span>
                                </div>
                                {item.isShowDetail && (
                                    <div className="bg-white py-2 px-2 rounded-lg mt-2 flex gap-2 justify-between">
                                        <table className="w-full">
                                            <thead>
                                                <tr>
                                                    {Object.keys(getColumnKey(item)?.[0] ?? {}).map((itemChild, indexChild) => {
                                                        return (
                                                            <th key={indexChild} className={`${indexChild === 0 && 'w-full text-start'} min-w-7`}>{itemChild}</th>
                                                        );
                                                    })}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {((getColumnKey(item) ?? []).length === 0) && (
                                                    <tr>
                                                        <th className="text-center" colSpan={Object.keys(getColumnKey(item)?.[0] ?? {}).length}>Tidak ada data</th>
                                                    </tr>
                                                )}
                                                {(getColumnKey(item) ?? []).map((itemChild, indexChild) => {
                                                    return (
                                                        <tr key={indexChild}>
                                                            {Object.keys(getColumnKey(item)?.[indexChild] ?? {}).map((itemChildData, indexChildData) => {
                                                                return (
                                                                    <td key={indexChildData} className={`${indexChildData !== 0 && 'text-center'} border-b`}>{itemChild[itemChildData]}</td>
                                                                );
                                                            })}
                                                        </tr>
                                                    );
                                                })}
                                            </tbody>
                                        </table>
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
export default BinmanKompersSatjarPage;