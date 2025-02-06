
type ButtonProps = {
  text: string;
  icon?: React.ReactNode;
  link?: string;
};
const Button = ({ text, icon, link }: ButtonProps) => {
  return (
    <a href={link} className="rounded-xl border border-solid border-gray-700 transition-colors flex items-center justify-center bg-foreground text-background gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
      {icon && <span className="icon">{icon}</span>}
      {text}
    </a>
  );
};

const ButtonAnimated = ({ text, icon, link }: ButtonProps) => {
  return (
    <a href={link} className="rounded-xl border border-solid border-gray-700 flex items-center justify-center bg-foreground gap-2 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 hover:scale-105 duration-500 shadow-lg hover:drop-shadow-2xl hover:shadow-green-400 hover:cursor-pointer hover:text-green-400">
      {icon && <span className="icon">{icon}</span>}
      {text}
    </a>
  );
};

export { Button, ButtonAnimated };