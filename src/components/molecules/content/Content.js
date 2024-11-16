const Content = (props) => {
    return (
        <div className="bg-white h-screen overflow-hidden flex justify-center">
            <div className="min-h-[78.5vh] w-full max-w-[31.25rem] relative shadow-all text-[16px]">
                {props.children}
            </div>
        </div>
    );
}

export default Content;