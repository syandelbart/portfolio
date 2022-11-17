import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDir = path.join(process.cwd(), "projects");

/**
 * @returns {Array} Array of project names returned in a format that can be used by getStaticPaths
 */
export const getAllProjects = async () => {
  const projectNames = fs.readdirSync(projectsDir);
  const projectNamesFiltered = projectNames.filter((projectName) => projectName.substring(projectName.lastIndexOf("-") + 1, projectName.lastIndexOf(".md")) == "en");

  return projectNames.map((projectName) => {
    let locale = projectName.substring(projectName.lastIndexOf("-") + 1, projectName.lastIndexOf(".md"));

    return {
      params : {
        project: `${projectName.substring(0, projectName.lastIndexOf("-"))}`,
      },
    }
  });
}



/**
 * 
 * @param {String} projectName The name of the project to get data for
 * @returns {Object} The data for the project, including the title, date, and content
 */
export const getProjectData = async (project) => {
  const fileContents = fs.readFileSync(path.join(projectsDir, `${project}.md`), "utf8");
  // Use matter to split the metadata from the content in the .md file
  const matterConversed = matter(fileContents);

  const htmlContent = await remark()
    .use(html)
    .process(matterConversed.content);

  let locale = project.substring(project.lastIndexOf("-") + 1, project.length);

  return {
    ...matterConversed.data,
    locale : locale,
    content : htmlContent.toString(),
  }
};




export const getAllProjectsData = async () => {
  const projectNames = fs.readdirSync(projectsDir);
  let allProjectsData = projectNames.map(async (projectName) => { 
    return await getProjectData(`${projectName.replace(/\.md$/, "")}`)
  });
  return await Promise.all(allProjectsData);
}

export const getAllProjectDataSorted = async () => {
  return (await getAllProjectsData()).sort((a, b) => {
    if(a.date || (new Date()).getTime() < b.date || (new Date()).getTime()) return 1;
    else return -1;
  });
}

export const getAllProjectDataSortedLocale = async (locale = "en") => {
  return (await getAllProjectDataSorted()).filter(project => project.locale === locale);
}


