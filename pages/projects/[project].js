
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from '../../styles/scss/Home.module.scss'
import projectModalStyles from '../../styles/scss/ProjectModal.module.scss'
import projectStyles from '../../styles/scss/Projects.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {getAllProjects, getProjectData} from "../../modules/projects";
import ProjectFeatured from "../../components/ProjectFeatured";


export const getStaticPaths = async ({ locales }) => {
  const paths = await getAllProjects();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  if(!context?.params?.project) throw new Error("No project name provided");
  const projectData = await getProjectData(`${context.params.project}-${context.locale}`);

  return {
    props: {
      projectData,
    }
  }
};


const Project = ({projectData}) => {
  return (
    <div className="min-h-screen w-screen justify-center items-center relative bg-background">
          <Head>
            <title>{ projectData.title } - Projects - syandelbart.com</title>
            <meta property="og:title" content={`${projectData.title} - Projects - syandelbart.com`} />
            <meta name="description" content={ projectData.summary } key="desc" />
            <meta
              property="og:image"
              content={`https://www.syandelbart.com/images/${projectData.bg}`}
            />
          </Head>
          <div className="container mx-auto py-48">
            <Link href="/projects" className="w-full text-white text-xl uppercase">
              ᐊ Back to projects page
            </Link>
            <ProjectFeatured projectData={projectData} inProjectPage={true}/>
            <span className="project-description w-6/12 text-reg mt-5 inline-block" dangerouslySetInnerHTML={{ __html : projectData.content }}></span>
          </div>
    </div>

  );
}

export default Project;