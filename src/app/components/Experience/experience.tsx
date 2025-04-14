'use client'
import React from "react"
import { FolderOpen, Braces } from "lucide-react"

type ExpItem = {
  name: string
  icon?: React.ReactNode
  children?: ExpItem[]
}

const techStack: ExpItem[] = [
  {
    name: "Jobs",
    icon: <Braces className="w-4 h-4" />,
    children: [
      { name: "• Elettronica Veneta S.p.a. software developer: main focus on improve the company's website and scraping it " },
    ],
  },
  {
    name: "Degrees",
    icon: <Braces className="w-4 h-4" />,
    children: [
      { name: "• High school degree: ICT and Telecomunication (2017-2022)" },
      { name: "• Degree in data science from the Ca' Foscari University of Venice (in progress)" },
      { name: "• Web Design Degree from FreeCodeCamp Course" }
    ],
  },
  {
    name: "Hackathons",
    icon: <Braces className="w-4 h-4" />,
    children: [
      { name: '• Attended Hackathon VarGroup in Rimini,Italy. Third place at the competition' },
    ],
  },
]

const ExpItem: React.FC<{ item: ExpItem; level: number }> = ({ item, level }) => {
  const [isOpen, setIsOpen] = React.useState(true)

  return (
    <div className="ml-4 text-xl">
      <div
        className="flex items-center cursor-pointer hover:text-gray-400 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        {item.children ? (
          <FolderOpen className={`w-5 h-5 mr-2 ${isOpen ? "text-green-400" : "text-gray-400"}`} />
        ) : (
          item.icon
        )}
        <span className="ml-2">{item.name}</span>
      </div>
      {isOpen && item.children && (
        <div className="mb-4">
          {item.children.map((child, index) => (
            <ExpItem key={index} item={child} level={level + 1} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function Experience() {
  return (
    <section className="px-4 w-full min-h-screen">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-8">Career history.</h1>
      <div className="flex gap-2 justify-start items-center text-slate-400 mb-8">
        <p className="leading-7">All my experience so far. Always looking for new opportunities to learn and grow.</p>
      </div>
      <div className="bg-slate-950 rounded-lg shadow-lg border border-solid border-slate-700 p-4">
        <div className="flex justify-start relative items-center m-2">
          <p className="text-sm font-bold flex">Press &nbsp;<FolderOpen className="w-5 h-5 text-gray-400" />&nbsp; to Open/Close</p>
        </div>
        {techStack.map((item, index) => (
          <ExpItem key={index} item={item} level={0} />
        ))}
      </div>
    </section>
  )
}
