export default function Button({background,color,children, onClick, className, minWidth}){
    // let {size,color,children} = props;
    // console.log(props)

    const minWidthValue = minWidth ? 
        (typeof minWidth === 'number' ? `${minWidth}px` : minWidth) : 
        undefined;
    
    return (
        <button
            className={`button ${className || ''}`}
            style={{ background, color , minWidth: minWidthValue}}
            onClick={onClick}  // Forward the onClick prop
        >
            {children}
        </button>
    )
}