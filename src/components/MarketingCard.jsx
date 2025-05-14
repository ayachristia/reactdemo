import rightArrow from '/communityUpdate/Right.png'

export default function MarketingCard({image, text, link}){
    return (
        <>
        <section className="marketingCard">
            <img src={image} className="marketingCard__img" />
            <section className="marketingCard__textbox">
                <p className="marketingCard__text">
                    {text}
                </p>
                <a href={link} className="marketingCard__text--green">Readmore <img src={rightArrow}/></a>
            </section>
        </section>
        </>
    )
}