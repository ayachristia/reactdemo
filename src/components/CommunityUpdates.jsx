import MarketingCard from './MarketingCard';
import { communityUpdateCards } from '../data';
import '/src/style/style.scss';

export default function communityUpdate(){
    return (
        <>
        <section className="communityUpdate">
        <header className="communityUpdate__header">
            <h1 className="communityUpdate__headline">
            Caring is the new marketing
            </h1>
            <p className="communityUpdate__subtext">
                The Nexcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more.​
            </p>
        </header>

        <section className="communityUpdate__main">
            {communityUpdateCards.map(card=>(
               <MarketingCard
               key={card.id}
               image={card.image}
               text={card.text}
               link={card.link}
               />
            ))}
        </section>

        </section>
        

        </>
    )
}