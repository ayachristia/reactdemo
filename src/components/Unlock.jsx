import Button from "./button"
import unlockImage from '/unlock/rafiki.svg'

export default function Unlock(){
    return (
        <>
        <section className="unlock">
            <div className="unlock__imgcontainer">
                <img src={unlockImage} alt="Classroom" className="unlock__img" />
            </div>

            <section className="unlock__content">
                <section className="unlock__textbox">
                <h2 className="unlock__headline">
                    The unseen of spending three years at Pixelgrade
                </h2>
                <p className="unlock__text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia totam non repudiandae eligendi illo, voluptas culpa cupiditate alias quis. Sed asperiores, nulla dignissimos omnis similique quam quas beatae? Sapiente, quaerat?
                </p>
                </section>
            
            < Button className="button" background="#4CAF4F">Learn More</Button>
            </section>
        </section>
        </>
    )
}