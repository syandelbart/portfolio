
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProjectDefault = ({ projectData }) => {
  const router = useRouter();
  const { locales, locale: activeLocale } = router;

  return (
    <div className="flex gap-10 flex-col">
      <div className="relative w-[400px] min-w-[400px] max-w-[400px] h-[250px] min-h-[250px] max-h-[250px]">
        <Image src={projectData?.bg} fill className="bg-[#676767] object-cover"/>
      </div>
      <div className="text-white w-5/6">
        <h1 className="text-5xl">
          {projectData?.title}
        </h1>
        <p className="text-xl my-5">
          {projectData?.summary}
        </p>
        <Link href={`/projects/${projectData.title.toLowerCase()}`} locale={activeLocale} className="py-5 px-10 text-xl bg-[#333333]">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default ProjectDefault;