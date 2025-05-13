import MemberCard from "./CommunityCards";
import '/src/style/style.scss';
import { communityCards } from "../data";


export default function Community(){
    return (
        <>
        <section className="community">
            <header className="community__header">
                <h1 className="community__headline">
                    Manage your entire community in a single system
                </h1>
                <p className="community__subheadline">
                    Who is Nextcent suitable for?
                </p>
            </header>

            <section className="community__main">
                {communityCards.map(card=> (
                    <MemberCard 
                    key={card.id}
                    image={card.image} 
                    headline={card.headline} 
                    text={card.text}/>
                ))}
            </section>
        </section>
        </>
    )
}