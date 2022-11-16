
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectFeatured = ({ projectData,inProjectPage }) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  return (
    <div className="flex gap-10">
      <div className="relative w-[600px] min-w-[600px] max-w-[600px] h-[400px] min-h-[400px] max-h-[400px]">
        <Image src={projectData?.bg} fill className="bg-[#676767] object-cover"/>
      </div>
      <div className="text-white">
        <h1 className="text-7xl">
          {projectData?.title}
        </h1>
        <p className="text-xl my-5">
          {projectData?.summary}
        </p>
        <Link href={`/projects/${projectData.title.toLowerCase()}`} locale={activeLocale} className="py-5 px-10 text-xl mt-5 bg-[#333333]">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default ProjectFeatured;