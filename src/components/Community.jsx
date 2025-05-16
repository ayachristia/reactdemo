import MemberCard from "./CommunityCards";
import '/src/style/style.scss';
import { useEffect, useState } from 'react';


export default function Community(){

    //klassisk callback function/sideEffect
      //if dependency array is empty, useEffect hook only fires when component is shown on screen 1st time
    
      //re-rending af useEffect data
      const [communityData, setCommunityData] = useState(null);
      //til alternativ UI some placeholder billede
      const [isLoading, setIsLoading] = useState(true);
    
      useEffect(()=>{
        async function fetchData(){
          try{
          const url = "/cards.json"
          const response = await fetch(url)
          const data = await response.json()
          setCommunityData(data)
        }catch (error){
          console.error('Error fetching data:', error)
        } finally {
          setIsLoading(false); // Same idea as the `.finally()` block
        }
        }
        fetchData()
        
      }, [])

      console.log(communityData)
   
      // fetch("/communityCards.json")
      // .then(res=>res.json())
      // .then(result => console.log(result))
      //.finally(() => setIsLoading(false))

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
                {isLoading ? <h1>Loading...</h1>:communityData.communities.map(card=> (
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