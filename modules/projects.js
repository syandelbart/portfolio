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

  return projectNames.map((projectName) => {
    return {
      params : {
        project: projectName.replace(/\.md$/, ""),
      }
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


  return {
    title : matterConversed.data.title,
    date : matterConversed.data.date,
    content : htmlContent.toString(),
  }
};