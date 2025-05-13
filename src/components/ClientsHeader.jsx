    import icon0 from "/icons/Logo.png";
    import icon1 from "/icons/Logo1.png";
    import icon2 from "/icons/Logo2.png";
    import icon3 from "/icons/Logo3.png";
    import icon4 from "/icons/Logo4.png";
    import icon5 from "/icons/Logo5.png";
    
import '/src/style/style.scss';


export default function ClientsHeader(){
    return (
        <>
        <section className="clients">

            <header className="clients__header">
                <h2 className="clients__headline">
                    Our Clients
                </h2>
                <p className="clients__text"> 
                    We have been working with some Fortune 500+ clients
                </p>
            </header>

            <footer className="clients__footer">
                <ul className="clients__logo-list">
                    <li>
                    <img src={icon0} alt="Icon 1" className="clients__icon" />
                    </li>
                    <li>
                    <img src={icon1} alt="Icon 2" className="clients__icon" />
                    </li>
                    <li>
                    <img src={icon2} alt="Icon 3" className="clients__icon" />
                    </li>
                    <li>
                    <img src={icon3} alt="Icon 4" className="clients__icon" />
                    </li>
                    <li>
                    <img src={icon4} alt="Icon 5" className="clients__icon" />
                    </li>
                    <li>
                    <img src={icon5} alt="Icon 6" className="clients__icon" />
                    </li>
                    <li>
                    <img src={icon2} alt="Icon 7" className="clients__icon" />
                    </li>
                </ul>
            </footer>
        </section>
        </>
    )
}