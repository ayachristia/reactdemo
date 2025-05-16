import '/src/style/style.scss';
import Section from './components/Section';

import Hero from './components/Hero'
import ClientsHeader from './components/ClientsHeader'
import Community from './components/Community'
import Achievements from './components/Achievements';
import Marketing from './components/CommunityUpdates';
import Unlock from './components/Unlock';
import Header from './components/header';

import { useEffect, useState } from 'react';


function App() {

  

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // useState: 
  // let walkingLight = "Green"

  // function setWalkingLight(newColor){
  //   walkingLight = newColor;
  // }

  // useState hook i react:
  //count er værdien i useStatePowers
  //setCount er den useState function react har default som ændrer den originale værdi istedetfor at man skal queryselecte og opdatere manuelt med operatorer
  // const [Count, setCount] = useState(23)
  // const [isWalkingLightOn, setIsWalkingLightOn] = useState(false)

  return (
    <>
    <Header/>
    <main>
      {/* <h1>{Count}</h1>
      <button onClick={()=>setCount(Count+1)}>Add one to count</button>

      <h1 onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Profile" : "Login"}</h1> */}
      {/* <button onClick={()=>setIsWalkingLightOn(!isWalkingLightOn)}></button> */}

      <section className="home">
         <Section backgroundColor="#F5F7FA">< Hero/></Section>
          <Section>
          < ClientsHeader/>
          </Section>
          <Section backgroundColor="#FFFFFF">
          < Community/>
          </Section>
      </section>
     
     <section className="body">
          < Section backgroundColor="#FFFFFF">
          < Unlock/>
          </Section>
          < Section backgroundColor="#F5F7FA">
          < Achievements/>
          </Section>
          < Section backgroundColor="#FFFFFF">
          < Marketing/>
          </Section>
    </section>
      
      
    </main>
    </>
  )
}

  export default App
