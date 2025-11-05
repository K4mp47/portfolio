"use client"
import axios from "axios";
import { useEffect, useMemo, useState } from "react";
import Folder from "../Folder/folder";
import Image from "next/image";

const TechStack = () => {
  const [packageData, setPackageData] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const coloredSquares = useMemo(() => [
    <Image
      alt="OlyCyber Logo"
      src="/olybg.png"
      key="olicyber"
      width={10}
      height={10}
      layout="responsive"
      className="w-20 h-6 rounded-xl transition-all duration-300 transform rotate-3"/>,
    <Image
      alt="TryHackMe Logo"
      src="/tryhackme.webp"
      key="hackthebox"
      width={10}
      height={5}
      layout="responsive"
      className="w-25 h-8 rounded-xl transition-all duration-300 scale-90  transform rotate-3"/>,
    <Image
      alt="Hack The Box Logo"
      src="/hackthebox.png"
      key="tryhackme"
      width={10}
      height={5}
      layout="responsive"
      className="w-20 h-25 rounded-xl transition-all duration-300"/>,
  ], []);


  // List of packages we want to display in our tech stack
  const packages = useMemo(() => [
    'react',
    'next',
    'vue',
    'tailwindcss',
    'typescript',
    'c++',
    'node',
    'css',
    'html',
    'java',
    'framer-motion',
    'python',
    'git',
    'gsap',
    'nextjs',
  ], []);

  useEffect(() => {
    const fetchPackageData = async () => {
      try {
        setIsLoading(true);

        // Create an array of promises for each package request
        const promises = packages.map(pkg =>
          axios.get(`https://registry.npmjs.org/${pkg}/latest`)
        );

        // Wait for all requests to settle
        const results = await Promise.allSettled(promises);

        // Process each result as it completes
        results.forEach((result, index: number) => {
          const packageName = packages[index];
          if (result.status === "fulfilled") {
            const version = (result.value.data as { version: string }).version;
            setPackageData(prevData => ({
              ...prevData,
              [packageName]: version,
            }));
          } else {
            console.error(`Failed to fetch data for ${packageName}:`, result.reason);
          }
        });
      } catch (error) {
        console.error("Failed to fetch package data:", error);
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchPackageData();
  }, [packages]);

  return (
    <div className="px-4 min-h-[calc(100vh+8rem)]">
      <h1 id="knowledge" className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">My tech stack.</h1>
      <div className="flex gap-2 justify-start items-center text-slate-400 mb-8">
        <p className="leading-7">Working everyday to increase my knowledge,
          that&apos;s what I&apos;m learned from school and my personal studies.<br />
          My knowledge isn&apos;t perfect, but I do my best to improve.</p>
      </div>
      <aside className="bg-slate-950 border border-solid border-slate-700 text-white p-6 rounded-lg w-full font-mono">
        <div className="flex justify-between items-center">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <p className="text-sm font-bold">bash</p>
        </div>
        <div className="mt-4">
          <p className="text-green-400">$ <span className="text-white">npm install TechStack knowledge</span></p>
          <p>------------------------------</p>
          {isLoading ? (
            <p className="text-yellow-400">Loading package data...</p>
          ) : error ? (
            <p className="text-red-400">Error: {error}</p>
          ) : (
            Object.entries(packageData).map(([pkg, version]) => (
              <p key={pkg} className="text-white flex">
                [<span className="text-green-400">+</span>] {pkg}@{version}
              </p>
            ))
          )}
          <p>------------------------------</p>
          <p className="text-white flex">
            [<span className="text-yellow-400">!</span>] Always open to learning new technologies.
          </p>
          <br />
          <p className="text-green-400">$ </p>
        </div>
      </aside>
      <h1 id="knowledge" className="scroll-m-20 mt-8 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">
        Passion for Cybersecurity.
      </h1>
      <p className="leading-7 text-slate-400 mb-8">
        Exploring the world of ethical hacking, network defense, and digital forensics.  
        Constantly learning new techniques, tackling real-world challenges, and improving my skills through hands-on cybersecurity labs and courses on platforms like TryHackMe and Hack The Box.
      </p>
      <div style={{ width: "100%", height: '320px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '8rem' }}>
        <Folder size={2} color="#4ade80" className="" items={coloredSquares} />
      </div>
    </div>
  );
};

export default TechStack;
