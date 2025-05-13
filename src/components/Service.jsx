import Button from "./button"

export default function Service({image, headline, text}){
    return (
        <>
        <section className="service">
            <div className="service__imgcontainer">
                <img src={image} alt="" className="service__img" />
            </div>

            <section className="service__textbox">
            < Button>Learn More</Button>
            </section>
        </section>
        </>
    )
}