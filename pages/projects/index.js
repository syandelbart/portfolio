

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ProjectContainer from "../../components/ProjectContainer";
import { getAllProjectDataSorted } from '../../modules/projects';

export const getStaticProps = async (context) => {
  const allProjectsData = await getAllProjectDataSorted();

  return {
    props: {
      allProjectsData,
    }
  }
};





const Projects = ({allProjectsData}) => {
  return (
      <main>
        <ProjectContainer projects={allProjectsData}/>
      </main>
  )
}

export default Projects;