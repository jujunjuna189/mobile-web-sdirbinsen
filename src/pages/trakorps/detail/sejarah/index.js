import { Content, Navbar } from "../../../../components";
import { icWorldWar, imgMainBg } from "../../../../assets";
import { UseTrakorpsDetailContext } from "../../../../contexts/trakorps/TrakorpsDetailContext";

const TrakorpsSejarahPage = () => {
    const { satuan } = UseTrakorpsDetailContext();
    const replaces = ({ originalHTML = "" }) => {
        const updatedHTML = originalHTML.replace(
            /style='(.*?)float: left;(.*?)'/g,
            "style='width: 95%;$1$2'"
        );

        return updatedHTML
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
                            <img src={icWorldWar} alt="icon" className="w-[40px] -mb-1" />
                        </div>
                        <div className="text-center">
                            <strong className="text-white font-black" style={{ textShadow: "0px 1px 3px #000000" }}>Sejarah</strong>
                        </div>
                    </div>
                </div>
                <div className="px-3 mt-4 justify-center">
                    <div className="bg-white rounded-md min-h-[75vh] p-3">
                        <div className="mt-3" style={{ display: 'flex', whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: replaces({ originalHTML: satuan?.sejarah }) }} />
                    </div>
                </div>
                <div className="h-10" />
            </div>
        </Content>
    );
}
export default TrakorpsSejarahPage;