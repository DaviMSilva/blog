import { ReactNode } from "react";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

interface Link {
  description: string;
  url: string;
  Icon?: ReactNode;
}

const externalLinks: Link[] = [
  {
    description: "LinkedIn",
    url: "https://linkedin.com/in/davimsilva",
  },

  {
    description: "Github",
    url: "https://github.com/DaviMSilva",
  },
  
];

const ExternalLink = (link: Link) => {
  return (
    <a
      key={link.description}
      href={link.url}
      target="_blank"
      className="flex items-center justify-between px-3 py-2 ring-1 group"
    >
      <span className="flex items-center gap-4 text-xl ">
        {link.Icon} 
        <div>
          {link.description}  
          <div className="block w-5 bg-blue-400 h-1 group-hover:w-full  transition-all">
          </div>
        </div>
      </span>
    </a>
  );
};

export default function Home() {
  return (
    <div>
       <span className="font-bold text-sm px-2 py-1 ring-1 ring-blue-400 mb-3">
          SOCIALS
       </span>
       <div className="grid gap-4 mt-4">
          {externalLinks.map((link:Link)=> (
            <ExternalLink 
              url={link.url}
              description={link.description}
              Icon={link.Icon}
            />
          ))}
       </div>
    </div>
  );
}
