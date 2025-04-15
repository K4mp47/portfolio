import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonAnimated } from "../Button/button";
import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-start px-4 min-h-[calc(100vh-12rem)]">
      <Badge className="w-fit my-4 bg-slate-950 rounded-3xl border border-solid border-slate-700">
        <span className="p-[0.3rem] bg-green-400 rounded-full mr-2 shadow-[0rem_0rem_1rem_0.2rem] shadow-green-300"></span>
        <p className="leading-7 text-lg">
          Available for projects
        </p>
      </Badge>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
        Hi, I&apos;m <span className="text-green-400">Alberto</span>, 
        <br/>
        a <span className="text-green-400">web</span> and <span className="text-green-400">sofware developer</span>.
      </h1>
      <div className="flex gap-2 justify-start items-center text-slate-400">
        <MapPin color="#4ade80" /> 
        <p className="leading-7">Veneto, Italy</p>
      </div> 
      <div className="flex gap-2 justify-start items-center mt-2 text-slate-400">
        <p className="leading-7">
          Mainly working in the front-end ecosystem, I&apos;m a developer who thrives on learning and building.
          <br/>
          Actively studying Data Science at the University of Ca&apos; Foscari Venezia.
        </p>
      </div>
      <div className="flex gap-4 items-start w-full sm:flex-row mt-4">
        <div className="lg:hidden">
          <Button text="Download CV" icon={<FileText />} link="/CV_Campagnolo.pdf" />
        </div>
        <div className="hidden lg:block">
          <ButtonAnimated text="Download CV" icon={<FileText />} link="/CV_Campagnolo.pdf" />
        </div>
      </div>
    </div>
  );
};

export default Hero;