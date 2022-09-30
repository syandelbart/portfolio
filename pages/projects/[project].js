
import Layout from '../../components/layout'
import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/scss/Home.module.scss'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {getAllProjects, getProjectData} from "../../modules/projects";


export const getStaticPaths = async () => {
  const paths = await getAllProjects();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  console.log("Did something");
  if(!context?.params?.project) throw new Error("No project name provided");
  const projectData = await getProjectData(context.params.project);
  console.log(projectData);

  return {
    props: {
      projectData,
    }
  }
};


const Project = ({projectData}) => {
  return (
    <Layout>
      <Head>
        <title>{projectData.title} - Projects - syandelbart.com</title>
      </Head>
      <main>
        {projectData.content}
      </main>
    </Layout>
  );
}

export default Project;