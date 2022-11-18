
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link';
import styles from '../../styles/scss/Home.module.scss'
import projectModalStyles from '../../styles/scss/ProjectModal.module.scss'
import projectStyles from '../../styles/scss/Projects.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {getAllProjects, getProjectData} from "../../modules/projects";
import ProjectFeatured from "../../components/ProjectFeatured";

import { useTranslation, useLanguageQuery } from 'next-export-i18n';
import { useRouter } from "next/router";

import i18n from "../../i18n/index";

import textStylingMarkdown from "../../styles/scss/textStylingMarkdown.module.scss";
import { faArrowLeft, faCaretLeft, faLeftLong } from "@fortawesome/free-solid-svg-icons";


export const getStaticPaths = async () => {
  const paths = await getAllProjects();
  return {
    paths,
    fallback: false,
  };
};



export const getStaticProps = async (context) => {
  if(!context?.params?.project) throw new Error("No project name provided");


  //get all project data translations
  let projectData = Object.keys(i18n.translations).map(async (lang) => {
    return await getProjectData(`${context.params.project}-${lang}`);
  });

  projectData = await Promise.all(projectData);

  // Reduce the object to an array of language keys and language specific project data
  projectData = projectData.reduce((acc, cur) => {
    acc[cur.locale] = cur;
    return acc;
  }, {});



  return {
    props: {
      projectData : projectData
    }
  }
};


const Project = ({projectData}) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  projectData = projectData[(router.query.lang || "en")];

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
            <Link href={{ pathname: "/projects", query: query}} className="text-2xl block mb-5 text-red-500">
              <FontAwesomeIcon style={{ fontSize:24}} icon={faCaretLeft} /> Back to projects page
            </Link>
            <ProjectFeatured projectData={projectData} inProjectPage={true}/>
            <span className={`${textStylingMarkdown.textStylingMarkdown}  text-white mt-5 inline-block`} dangerouslySetInnerHTML={{ __html : projectData.content }}></span>
          </div>
    </div>

  );
}

export default Project;