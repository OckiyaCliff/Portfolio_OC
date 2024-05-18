import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import character from '../../assets/character.png';
import environment from '../../assets/environment.png';
import goat from '../../assets/goat.jpeg';
import book from '../../assets/book.jpg';
import count from '../../assets/count.png';
import airrand from '../../assets/airrand.png';
import travel from '../../assets/travel.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects & Portfolio</h1>
      <h3 className={styles.projectTitle} id='ProjectTitle'>Digital Art Projects</h3>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={character}
          link="https://www.instagram.com/ivy.art0/"
          h3="Character"
          p="character design "
        />
        <ProjectCard
          src={environment}
          link="https://www.instagram.com/ivy.art0/"
          h3="Environment"
          p="landscape design"
        />
        <ProjectCard
          src={book}
          link="https://www.saanrize.com/"
          h3="Book cover"
          p="Book illustrations"
        />
        <ProjectCard
          src={goat}
          link="https://twitter.com/Goatbls"
          h3="Nft"
          p="Nft Art"
        />
      </div>

      <br />
      <br />
      <br />
      
      <h3 className={styles.projectTitle} id='ProjectTitle'>Web/Mobile Dev Projects</h3>
      <div className={styles.projectsContainer}>
        <ProjectCard
           src={airrand}
           link="https://airrand.vercel.app/"
           h3="Airrand"
            p="Errand App"
        />
        <ProjectCard
          src={travel}
          link="https://github.com/OckiyaCliff/Nextjs_TravelAfrica"
          h3="TrAfrica"
          p="Travel App"
        />
        <ProjectCard
          src={count}
          link="https://github.com/OckiyaCliff/Solidity_EthCounter"
          h3="Counter"
           p="Count Eth App"
        />
        
      </div>

      <br />
      <br />
      <br />
      
      <h3 className={styles.projectTitle} id='ProjectTitle'>StartUps</h3>
      <div className={styles.projectsContainer}>
        <ProjectCard
           src={viberr}
           link="https://github.com/Ade-mir/company-landing-page-2"
           h3="Kanki Studio"
            p="Animation/Game Studio"
        />
        <ProjectCard
          src={airrand}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Airrand"
          p="Errand Networking"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Eckowatts"
           p="Renewable Energy"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Metapoly"
          p="Fitness App"
        />
      </div>
    </section>
  );
}

export default Projects;
