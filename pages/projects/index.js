

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Head from "next/head"
import { useRouter } from "next/router";

import ProjectSemiFeatured from "../../components/ProjectSemiFeatured";
import ProjectDefault from "../../components/ProjectDefault";
import ProjectFeatured from "../../components/ProjectFeatured";

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
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  const allProjectsDataSortedByLocale = allProjectsData.filter(project => project.locale === activeLocale);
  const allProjectsFeatured = allProjectsDataSortedByLocale.filter(project => project.featured === true);


  return (
    <div className="min-h-screen w-screen justify-center items-center relative bg-background" >
      <Head>
        <title>Projects - syandelbart.com</title>
        <meta property="og:title" content="Projects - syandelbart.com" />
        <meta name="description" content="My previous, current and future projects shown in one place, all together" key="desc" />
      </Head>
      <div className="container mx-auto py-48">
        <ProjectFeatured projectData={allProjectsFeatured[0]} />
        {
          allProjectsData.keys().length > 1 ? (
            <div className="grid grid-cols-2 mt-20">
              <ProjectSemiFeatured projectData={allProjectsFeatured[0]}/>
              <ProjectSemiFeatured projectData={allProjectsFeatured[0]}/>
            </div>
          ) : null
        }
        <div className="grid grid-cols-3 mt-20">
          {
            allProjectsDataSortedByLocale.map((project) => {
              return (
                <ProjectDefault projectData={project} />
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Projects;