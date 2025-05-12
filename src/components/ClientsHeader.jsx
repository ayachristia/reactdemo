    import icon0 from "/icons/Logo.png";
    import icon1 from "/icons/Logo1.png";
    import icon2 from "/icons/Logo2.png";
    import icon3 from "/icons/Logo3.png";
    import icon4 from "/icons/Logo4.png";
    import icon5 from "/icons/Logo5.png";


export default function ClientsHeader(){
    return (
        <>
        <div className="clients">

            <header className="clients__header">
                <h2 className="clients__headline">
                    Our Clients
                </h2>
                <p className="clients__text"> 
                    We have been working with some Fortune 500+ clients
                </p>
            </header>

            <footer className="clients__footer">
                <img src={icon0} alt="Icon" className="clients__icon" />
                <img src={icon1} alt="Icon" className="clients__icon" />
                <img src={icon2} alt="Icon" className="clients__icon" />
                <img src={icon3} alt="Icon" className="clients__icon" />
                <img src={icon4} alt="Icon" className="clients__icon" />
                <img src={icon5} alt="Icon" className="clients__icon" />
                <img src={icon2} alt="Icon" className="clients__icon" />
            </footer>
        </div>
        </>
    )
}