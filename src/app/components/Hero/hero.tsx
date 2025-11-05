import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button, ButtonAnimated } from "../Button/button";
import { FileText } from "lucide-react";
import PixelBlast from "../PixelBlast/pixelblast";

const Hero = () => {
  return (
    <div className="flex flex-col justify-start px-4 min-h-[calc(100vh-12rem)]">
      <div style={{ width: '60%', height: '500px', position: 'absolute', zIndex: -1, }}>
        <PixelBlast
          variant="circle"
          pixelSize={8}
          color="#4ade99"
          patternScale={4}
          patternDensity={1.3}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0}
          rippleThickness={0.5}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      <Badge className="w-fit my-4 bg-slate-950 rounded-3xl border border-solid border-slate-700">
        <span className="p-[0.3rem] bg-green-400 rounded-full mr-2 shadow-[0rem_0rem_1rem_0.2rem] shadow-green-300"></span>
        <p className="leading-7 text-lg">
          Available for projects
        </p>
      </Badge>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-2">
        Hi, I&apos;m <span className="text-green-400">Alberto</span>,
        <br />
        a <span className="text-green-400">Web</span> & <span className="text-green-400">Software developer</span>.
      </h1>
      <div className="flex gap-2 justify-start items-center text-white/90">
        <MapPin color="#4ade80" />
        <p className="leading-7">Veneto, Italy</p>
      </div>
      <div className="flex gap-2 justify-start items-center mt-2 text-white/90">
        <p className="leading-7">
          Mainly working in the front-end ecosystem, I&apos;m a developer who thrives on learning and building.
          <br />
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
