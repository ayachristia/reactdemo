export default function Button({background,children}){
    // let {size,color,children} = props;
    // console.log(props)
    
    return (
        <button className="button" style={{background:background}}>{children}</button>
    )
}