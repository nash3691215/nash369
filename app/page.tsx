import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ProblemSolution from '@/components/ProblemSolution'
import Services from '@/components/Services'
import Boutique from '@/components/Boutique'
import Resultats from '@/components/Resultats'
import About from '@/components/About'
import Newsletter from '@/components/Newsletter'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Boutique />
        <Resultats />
        <About />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
