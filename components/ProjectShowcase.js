import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/scss/Projects.module.scss'

const ProjectShowcase = ({projectData}) => {
return (
  <div className="w-52 bg-cover flex flex-col mx-10">
    <div className={`${styles.project_image_container} h-36 w-full bg-center bg-no-repeat relative rounded-2xl border-2 border-solid overflow-hidden`}>
      <Image 
          className={`${styles.project_image} absolute bg-cover`}
          src={projectData.bg}
          layout="fill"
          sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
        />
        {/* Could be youtube class as well */}
        <Link href={"/projects/" + projectData.title.toLowerCase()}>
          <a className={styles.readmore}></a>
        </Link>
      <h1 className="bg-black py-0.5 px-1">{projectData.title}</h1>
      <h2 className="bg-black py-0.5 px-1">{projectData.category}</h2>
  </div>
  <div className={`${styles.project_summary} break-words`}>
    { projectData.summary }
  </div>
  <div className={`${styles.project_button_container}`}>
    {/* <a v-if="index.page && index.yt" target="_blank" :href="index.page" @click="$router.push(`/projects/${index.name}`)">Read</a> */}
    {/* <a v-if="index.code" target="_blank" :href="index.code">Show code</a> */}
  </div>
</div>
)
};

export default ProjectShowcase;