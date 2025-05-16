import '/src/style/style.scss';
import StatsCards from './StatsCards';
// import { achievementsCards } from '../data';
import { useEffect, useState } from 'react';



export default function Achievements(){
    const [statsData, setStatsData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(()=>{
        async function fetchData(){
            try{
                const url = "/cards.json";
                const response = await fetch(url)
                const data = await response.json()
                setStatsData(data)
            }catch(error){
                console.error('Error fetching data:', error)
            }finally{
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    console.log('StatsData;',statsData)

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
                
                {isLoading ? <h1>Loading...</h1> : statsData.stats.map(card=>(
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