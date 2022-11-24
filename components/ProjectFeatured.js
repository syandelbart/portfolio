
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const ProjectFeatured = ({ projectData,inProjectPage }) => {
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="flex gap-10">
      <div className="relative w-[600px] min-w-[600px] max-w-[600px] h-[400px] min-h-[400px] max-h-[400px]">
        <Image src={projectData?.bg} fill className="bg-[#676767] object-cover"/>
      </div>
      <div className="">
        <h1 className="text-5xl">
          {projectData?.title}
          <span className="ml-2  text-xl dark:text-[#b1b1b1] underline underline-offset-4">
            {projectData?.client}
          </span>
        </h1>
        <p className="text-xl my-5">
          {projectData?.summary}
        </p>
        <Link href={{pathname: `/projects/${projectData?.title.toLowerCase()}`, query: query}} className="py-5 px-10 text-xl inline-block mt-5 bg-backdrop dark:bg-backdrop-dark">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default ProjectFeatured;