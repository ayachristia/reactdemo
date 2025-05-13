export default function MemberCard({image, headline, text}){
    return (
        <>
        <div className="communityCard">
            <header className="communityCard__header">
                <img src={image} alt="Logo"/>
                <h2>{headline}</h2>
            </header>
            
            <section className="communityCard__content">
                <p className="communityCard__text">
                {text}
                </p>
            </section>
        </div>
        </>
        
    )
}

