import CommunityUpdateCards from "./CommunityUpdateCards"
import '/src/style/style.scss';

import image1 from '/communityUpdate/streamlined.jpg';
import image2 from '/communityUpdate/safeguard.jpg';
import image3 from '/communityUpdate/revamp.jpg';


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
            < CommunityUpdateCards
            image={image1}
            text="Creating Streamlined Safeguarding Processes with OneRen"
            link="#"
            />
            < CommunityUpdateCards
            image={image2}
            text="What are your safeguarding responsibilities and how can you manage them?"
            link="#"
            />
            < CommunityUpdateCards
            image={image3}
            text="Revamping the Membership Model with Triathlon Australia"
            link="#"
            />
        </section>

        </section>
        

        </>
    )
}