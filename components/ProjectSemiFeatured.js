
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectSemiFeatured = ({ projectData }) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  return (
    <div className="flex gap-10 flex-col">
      <div className="relative w-[600px] min-w-[600px] max-w-[600px] h-[350px] min-h-[350px] max-h-[350px]">
        <Image src={projectData?.bg} fill className="bg-[#676767] object-cover"/>
      </div>
      <div className="text-white w-5/6">
        <h1 className="text-5xl">
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

export default ProjectSemiFeatured;