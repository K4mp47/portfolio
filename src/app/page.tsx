import Experience from "./components/Experience/experience";
import Hero from "./components/Hero/hero";
import TechStack from "./components/TechStack/techstack";
import Works from "./components/Works/works";

export default function Home() {
  return (
    <div className="grid items-start justify-items-center min-h-screen pb-20 gap-16 sm:p-28">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full px-auto xl:px-60">
        <Hero />
        <div className="w-full">
          <TechStack />
        </div>
        <div className="w-full">
          <Experience />
        </div>
        <div className="w-full">
          <Works />
        </div>
      </main>
    </div>
  );
}
