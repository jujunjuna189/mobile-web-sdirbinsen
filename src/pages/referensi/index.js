import { imgMainBg } from "../../assets";
import { Button, Content, InputText, Navbar } from "../../components";
import { UseReferensiContext } from "../../contexts/referensi/ReferensiContext";

const ReferensiPage = () => {
    const { referensi, filter, onNext, onPrev } = UseReferensiContext();

    return (
        <Content>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-hidden flex justify-center items-end">
                <img src={imgMainBg} alt="BackgroundApp" className="object-cover w-full" />
            </div>
            <div className="absolute top-0 bottom-0 left-0 right-0 overflow-y-auto">
                <Navbar />
                <div className="px-3 mt-5">
                    <div>
                        <InputText className="shadow-none h-12" value={`>${filter.path}`} placeholder="Paste path" />
                    </div>
                    <hr className="my-4" />
                    <div className="">
                        <span className="font-semibold text-white">Folder</span>
                    </div>
                    <div className="mt-2 gap-2">
                        {referensi?.data?.map((item, index) => {
                            return (
                                <Button key={index} className="bg-[#4B7D5E] bg-opacity-60 pl-2 pr-1 py-3 flex justify-between items-center mb-2">
                                    <div onClick={() => onNext({ value: item.title })} className="grow">
                                        <div className="flex gap-2 pr-6 items-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="text-yellow-500" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 3a1 1 0 0 1 .608 .206l.1 .087l2.706 2.707h6.586a3 3 0 0 1 2.995 2.824l.005 .176v8a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-11a3 3 0 0 1 2.824 -2.995l.176 -.005h4z" /></svg>
                                            <span className="text-white">{item.title}</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center px-2">
                                        {item.link && (
                                            <div onClick={() => window.open(item.link)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="text-white" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                                            </div>
                                        )}
                                    </div>
                                </Button>
                            );
                        })}
                    </div>
                </div>
                <div className="flex gap-3 absolute bottom-10 left-0 right-0 justify-center">
                    <Button className="text-sm border bg-white px-10" onClick={() => onPrev()}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 6l-6 6l6 6" /></svg>
                    </Button>
                    <Button className="text-sm border bg-white px-10" onClick={() => onNext({ value: '' })}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M9 6l6 6l-6 6" /></svg>
                    </Button>
                </div>
                <div className="h-20" />
            </div>
        </Content >
    );
};

export default ReferensiPage;
