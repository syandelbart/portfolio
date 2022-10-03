

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head"

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
    <div>
      <Head>
        <title>Projects - syandelbart.com</title>
        <meta property="og:title" content="Projects - syandelbart.com" />
        <meta name="description" content="My previous, current and future projects shown in one place, all together" key="desc" />
      </Head>
        <ProjectContainer projects={allProjectsData}/>
    </div>
  )
}

export default Projects;