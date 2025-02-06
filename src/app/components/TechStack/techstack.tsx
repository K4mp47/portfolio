// import { createClient } from "@/utils/supabase/server";

const TechStack = async () => {

  // const supabase = await createClient();
  // const { data } = await supabase.functions.invoke<Record<string, string>>("versions");
  
  //get request to https://nhcduesrdwqcvavlcnva.supabase.co/functions/v1/versions
  const url = "https://nhcduesrdwqcvavlcnva.supabase.co/functions/v1/versions"
  const token = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const response = await fetch(url, { headers });
  const data: Record<string, string> = await response.json();
    

  return (
    <div className="px-4 min-h-[calc(100vh+8rem)]">
      <h1 id="knwoledge" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">My tech stack.</h1>
      <div className="flex gap-2 justify-start items-center text-slate-400 mb-8">
        <p className="leading-7">Working everyday to increase my knowledge, 
          that&apos;s what I&apos; learned from school and my personal studies.<br/>
          My knowledge it&apos;s not perfect, but I do my best to improve.</p>
      </div>
      <aside className="bg-slate-950 border border-solid border-slate-700 text-white p-6 rounded-lg w-full font-mono ">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm font-bold">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ npm install TechStack</p>
          {data && Object.entries(data).map(([tech, version]) => (
            <p key={tech} className="text-white flex">
              [<span className="text-green-400">+</span>] {tech}@{version}
            </p>
          ))}
          <br></br>
          <p className="text-white">added {data && Object.entries(data).length} package, and audited {data && Object.entries(data).length * 2} packages in 3s</p>
          <p className="text-green-400">$</p>
        </div>
      </aside>
    </div>
  );
};

export default TechStack;