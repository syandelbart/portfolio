import ProjectShowcase from "./ProjectShowcase";
import styles from '../styles/scss/Projects.module.scss'

const ProjectContainer = ({ projects }) => {
  return (
    <div className={`${styles.projects_container} w-10/12 mt-10 mx-auto flex flex-row items-start justify-center relative flex-wrap`}>
      {projects.map((project) => {
        return (
          <ProjectShowcase projectData={project} />
        );
      })}
  </div>
  );
}

export default ProjectContainer;