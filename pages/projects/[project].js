
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from '../../styles/scss/Home.module.scss'
import projectModalStyles from '../../styles/scss/ProjectModal.module.scss'
import projectStyles from '../../styles/scss/Projects.module.scss'
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
  if(!context?.params?.project) throw new Error("No project name provided");
  const projectData = await getProjectData(context.params.project);

  return {
    props: {
      projectData,
    }
  }
};


const Project = ({projectData}) => {
  return (

<div>
      <Head>
        <title>{ projectData.title } - Projects - syandelbart.com</title>
        <meta property="og:title" content={`${projectData.title} - Projects - syandelbart.com`} />
        <meta name="description" content={ projectData.summary } key="desc" />
        <meta
          property="og:image"
          content={`https://www.syandelbart.com/images/${projectData.bg}`}
        />
      </Head>
      <div className={`${projectModalStyles.project_modal} z-50 top-0 w-screen flex items-center justify-center pt-10 flex-col `}>
        <div className="w-6/12 flex flex-col justify-center items-center">
          <Link href="/projects">
            <a className="w-full text-white text-xl uppercase">ᐊ Back to projects page</a>
          </Link>
          
          <div className="w-full flex flex-row mt-5 ml-5">
            <div className={`${projectModalStyles.project_modal_image} w-3/5 h-80 bg-green-500 relative overflow-hidden`}>
              <div className={`${projectStyles.project_image} h-full w-full absolute bg-cover`}>
                <Image
                  src={projectData.bg}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw, "
                />
              </div>
            </div>
            <div className="ml-4 w-2/5 text-white">
              <div className="border-l-4 bg-brand-button pl-2 p-2">
                <h1 className="text-4xl uppercase">{ projectData.title }</h1>
                <h2 class="text-md font-bold text-white">
                  { projectData.client }
                </h2>
                <p class="text-base">{ projectData.summary }</p>
              </div>

              <div class="h-full">
                <div class="project-button-container flex flex-row">
                  {/* <a
                    v-if="projectData[project_name].code"
                    target="_blank"
                    :href="projectData[project_name].code"
                  >Code</a>
                  <a
                    v-if="projectData[project_name].yt"
                    target="_blank"
                    class="youtube"
                    :href="projectData[project_name].yt"
                  >Filmpje</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <span class="project-description w-6/12 text-reg mt-5 inline-block" dangerouslySetInnerHTML={{ __html : projectData.content }}>

        </span>
      </div>
</div>



      

      

  );
}

export default Project;