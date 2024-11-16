const Card = (props) => {
    return (
        <div className={`p-2 rounded-md bg-white border border-slate-400 ${props.styles}`} onClick={() => props.onClick && props.onClick()}>
            {props.children}
        </div>
    );
}

export default Card;