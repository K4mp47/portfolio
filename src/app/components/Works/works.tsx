import { FolderGit2Icon } from "lucide-react";
import { Button, ButtonAnimated } from "../Button/button";
import { CardWithForm } from "./card";

const Works = () => {
  
  return (
    <div className="px-4">
      <div className="flex flex-row justify-between">
        <h1 id="project" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Projects</h1>
        <div className="lg:hidden">
          <Button text="Go to Github Profile" icon={<FolderGit2Icon />} link="https://github.com/K4mp47" />
        </div>
        <div className="hidden lg:block">
          <ButtonAnimated text="Go to Github Profile" icon={<FolderGit2Icon />} link="https://github.com/K4mp47" />
        </div>
      </div>
      <div className="flex gap-2 justify-start items-center text-slate-400 mb-12">
        <p className="leading-7"> 
          That&apos;s a list of my favourite projects. Some are personal, some are school projects.
          <br />
          I hope you like them.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 justify-start gap-8 bg-slate-950">
        <CardWithForm
          title="3D Portfolio Website"
          description="My 3D portfolio created using React Tailwindcss and Spline. It&apos;s a personal project."
          link="https://k4mp47.github.io/kampa_project/"
          image="/image1.png"
        />
        <CardWithForm
          title="Quote Generator Website"
          description="Quote generator created using NextJs React and Tailwindcss. It&apos;s a personal project."
          link="https://k4mp47.github.io/quote-generator/"
          image="/image2.png"
        />
        <CardWithForm
          title="Custom JSON Format Parser"
          description="A custom JSON format parser created using just C++. It&apos;s an university's project."
          link="https://github.com/K4mp47/PEL/blob/main/src/897569/json.cpp"
          image="/image.png"
        />
        <CardWithForm
          title="Ukibi Gin Website"
          description="Website created using Vue React and Tailwindcss. It&apos;s a project commissioned by a Venice's Bar."
          link=""
          image="/image3.png"
        />
      </div>
    </div>
  );
}

export default Works;
