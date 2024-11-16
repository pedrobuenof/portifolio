import Welcome from './Welcome/Welcome'
import './Home.css'


export default function Home() {
  return (
    <main>
      <section className="welcome-section" id="welcome">
        <Welcome />
      </section>
    </main>
  )
}
