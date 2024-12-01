import { useEffect, useRef, useState } from "react";
import { icFilter } from "../../../../assets";

const FilterPersonilPopup = (props) => {
    const ref = useRef();
    const currentYear = new Date().getFullYear();
    const years = Array.from({ length: currentYear - 1945 + 1 }, (_, index) => 1945 + index).reverse();
    const [isShow, setIsShow] = useState(false);

    const toogleModal = () => {
        setIsShow(!isShow);
    };

    const handleClickOutside = (event) => {
        if (!ref?.current?.contains(event.target)) {
            setIsShow(false);
        }
    };

    const onFilter = (item) => {
        props.onFilter && props.onFilter(item);
        setIsShow(false);
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="inline-block" ref={ref}>
            <div className="cursor-pointer">
                <div className="flex gap-3 items-center">
                    <div className="bg-white relative px-3 py-[0.6rem] rounded-lg flex justify-center items-center">
                        <img src={icFilter} alt="icon" className="w-10" onClick={() => toogleModal()} />
                        <div className={`absolute right-14 top-0 z-20 ${!isShow && "hidden"}`}>
                            <div className="pt-3 border-2 rounded-lg bg-white w-40 z-10 shadow-all">
                                <div className="leading-3 px-3">
                                    <span className="text-base font-medium">Filter berdasarkan tahun</span>
                                </div>
                                <div className="mt-2 h-[10rem] overflow-y-auto  px-3">
                                    {years.map((item, index) => {
                                        return (
                                            <div key={index} className="py-2 border-y font-black" onClick={() => onFilter(item)}>
                                                {item}
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="py-2 border-t font-black bg-red-100 text-center text-red-800" onClick={() => onFilter("")}>
                                    Hapus Filter
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPersonilPopup;
