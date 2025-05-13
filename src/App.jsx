import '/src/style/style.scss';
import Section from './components/Section';

import Hero from './components/Hero'
import ClientsHeader from './components/ClientsHeader'
import Community from './components/Community'
import Achievements from './components/Achievements';
import Marketing from './components/CommunityUpdates';


function App() {

  return (
    <>
    <main>
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
