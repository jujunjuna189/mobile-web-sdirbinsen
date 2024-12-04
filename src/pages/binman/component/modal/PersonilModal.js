import { useEffect, useRef, useState } from "react";

const PersonilModal = (props) => {
    const ref = useRef();
    const [isShow, setIsShow] = useState(false);

    const toogleModal = () => {
        setIsShow(!isShow);
    };

    const handleClickOutside = (event) => {
        if (!ref?.current?.contains(event.target)) {
            setIsShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="" ref={ref}>
            <div className="cursor-pointer" onClick={() => toogleModal()}>
                {props.children}
            </div>
            <div className={`fixed top-0 bottom-0 left-0 right-0 flex justify-center items-start z-10 ${!isShow && "hidden"}`}>
                <div className="absolute w-full h-full bg-black opacity-30 z-10" onClick={() => toogleModal()}></div>
                <div className="p-3 border rounded-lg bg-white md:w-96 md:h-auto w-full h-full z-10 md:mt-5">
                    <div className="leading-3">
                        <span className="font-bold text-lg">Biodata Personel</span>
                        <br />
                        <small>Detail biodata personel</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonilModal;
