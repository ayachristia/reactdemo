import '/src/style/style.scss';
import StatsCards from './StatsCards';
import { achievementsCards } from '../data';

// import membersLogo from "/achievements/Vector1.png";
// import clubs from "/achievements/vector2.png";
// import event from "/achievements/Vector3.png";
// import payment from "/achievements/Vector4.png";

export default function Achievements(){
    return (
        <>
        <section className="achievements">
        <section className="achievements__section achievements__header">
            <h1 className="achievements__headline">
                <span className="achievements__headline achievements__headline--black">Helping a local</span>
                <span className="achievements__headline achievements__headline--green">business reinvent itself</span>
            </h1>
            <p className="achievements__text">
                We reached here with our hard work and dedication
            </p>
        </section>

        <section className="achievements__section">
            <section className="achievements__activity">
                {achievementsCards.map(card=>(
                    <StatsCards
                    key={card.id}
                    logo={card.logo}
                    amount={card.amount}
                    text={card.text}
                    />
                ))}
            </section>
        </section>
        </section>
        
        </>
    )
}