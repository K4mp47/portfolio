const Footer = () => {
  return (
    <div className="grid items-start justify-items-center gap-16 sm:px-28 sm:py-8 bg-slate-950 border border-solid border-slate-950 border-t-slate-700 w-full">
      <div className="w-full m-4 px-4 xl:px-60">
        <div className="flex flex-col sm:flex-row justify-between">
          <div className="text-md w-1/2">
            <h4 className="font-bold">K4mp47 | Alberto Campagnolo</h4>
            <p className="leading-7 text-slate-400">Front-end developer</p>
          </div>
          <div className="flex gap-20 justify-between items-start text-slate-400">
            <div className="flex flex-col">
              <p className="text-slate-50 font-bold">Me</p>
              <a 
                href="#knwoledge" 
                className="leading-7"
              >
                knowledge
              </a>
              <a 
                href="#cv" 
                className="leading-7"
              >
                CV
              </a>
            </div>
            <div className="flex flex-col">
              <p className="text-slate-50 font-bold">This site</p>
              <a 
                href="#blank" 
                className="leading-7"
              >
                Source code
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between">
          <p className="leading-7 text-xs text-slate-400"> © 2025 Alberto. All rights reserved.</p>
          <a href="https://www.youtube.com/watch?v=cvh0nX08nRw" className="leading-7 text-xs text-slate-400"> don&apos;t press me </a>
        </div>
      </div>
    </div>
  )
}

export default Footer;