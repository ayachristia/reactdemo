import heroSvg from '/imgs/Illustration.svg'

export default function Hero(){
    return (
        <>
        <div className="hero">

            <div className="hero__imgContainer">
                <img src={heroSvg} alt="" className="hero__img" />
            </div>


            <div className="hero__textbox">
                <section className="hero__text">
                    <h1 className="hero__headline">
                        <span className="hero__headline--black">
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

                <button className="hero__btn">
                    Register
                </button>
            </div>


        </div>
        </>
    )
}