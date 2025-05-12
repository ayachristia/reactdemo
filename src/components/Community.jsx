import icon1 from "/clienticons/Icon.png";
import icon2 from "/clienticons/Icon.png";
import icon3 from "/clienticons/Icon.png";

export default function Community(){
    return (
        <>
        <div className="community">
            <header className="community__header">
                <h1 className="community__headline">
                    Manage your entire community in a single system
                </h1>
                <p className="community__">
                    Who is Nextcent suitable for?
                </p>
            </header>

            <main className="community__main">
                <section className="community__sections">
                    <div className="community__category">
                        <img src={icon1} alt="" className="community__category-logo" />
                        <h2 className="community__Category-headline">
                            Membership Organisations
                        </h2>
                    </div>
                    <p className="community__category-text">
                        Our membership management software provides full automation of membership renewals and payments
                    </p>
                </section>
                <section className="community__sections">
                    <div className="community__category">
                        <img src={icon2} alt="" className="community__category-logo" />
                        <h2 className="community__Category-headline">
                            National Associations
                        </h2>
                    </div>
                    <p className="community__category-text">
                        Our membership management software provides full automation of membership renewals and payments
                    </p>
                </section>
                <section className="community__sections">
                    <div className="community__category">
                        <img src={icon3} alt="" className="community__category-logo" />
                        <h2 className="community__Category-headline">
                            Clubs And Groups
                        </h2>
                    </div>
                    <p className="community__category-text">
                        Our membership management software provides full automation of membership renewals and payments
                    </p>
                </section>
            </main>
        </div>
        </>
    )
}