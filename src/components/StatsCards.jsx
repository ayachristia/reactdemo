export default function StatsCards({logo, amount, text}){
    return (
        <>
        <section className="achievementsCard">
            <div className="achievementsCard__logocontainer">
            <img src={logo} className="achievementsCard__img"/>
            </div>
            <section className="achievementsCard__specs">
               <h2 className="achievementsCard__int">{amount}</h2>
            <p className="achievementsCard__text">{text}</p> 
            </section>
            
        </section>
        </>
    )
}