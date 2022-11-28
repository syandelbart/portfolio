
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

const ProjectSemiFeatured = ({ projectData }) => {
  const router = useRouter();
  const { t } = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="flex gap-10 flex-col">
      <div className="relative w-full max-w-[600px] h-[350px] min-h-[350px] max-h-[350px]">
        <Image src={projectData?.bg} fill className="bg-[#676767] object-cover"/>
      </div>
      <div className="w-5/6">
        <h1 className="text-5xl">
          {projectData?.title} 
          <span className="ml-2  text-base text-gray-700 dark:text-[#b1b1b1] underline underline-offset-4">
            {projectData?.client}
          </span>
        </h1>
        <p className="text-xl my-5">
          {projectData?.summary}
        </p>
        <Link href={{pathname: `/projects/${projectData?.title.toLowerCase()}`, query: query}} className="bg-backdrop dark:bg-backdrop-dark py-5 px-10 text-xl inline-block mt-5">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default ProjectSemiFeatured;