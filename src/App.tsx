import About from "./components/About"
import Contact from "./components/Contact"
import Education from "./components/Education"
import HeroContent from "./components/HeroContent"
import Project from "./components/Project"
import TechStack from "./components/TechStack"
import Layout from "./layout/layout"

function App() {
  return (
    <Layout>
      <HeroContent />
      <About />
      <Education />
      <TechStack />
      <Project />
      <Contact />
    </Layout>
  )
}

export default App
