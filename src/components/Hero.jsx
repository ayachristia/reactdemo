import heroSvg from '/imgs/Illustration.svg'
import '/src/style/style.scss';
import Button from './button';


export default function Hero(){
    return (
        <>
        <section className="hero">

            <section className="hero__slide">

            <section className="hero__textbox">
                <section className="hero__text">
                    <h1 className="hero__headline">
                        <span className=" hero__headline--black">
                            Lessons and insights
                        </span>
                        <span className="hero__headline--green">
                            from 8 years
                        </span>
                    </h1>
                    <p className="hero__phara">
                        Where to grow your business as a photographer: site or social media?
                    </p>
                </section>

                <Button background="#4CAF4F">Register</Button>
            </section>
            
            <div className="hero__imgcontainer">
                <img src={heroSvg} alt="" className="hero__img" />
            </div>
            </section>
            


        </section>
        </>
    )
}