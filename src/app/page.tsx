'use client'
import { ReactNode } from "react";
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

export default function Home() {

  return (
    <div className="h-full pt-20">
      <div className="w-full text-center">
          <img className="max-w-28 mx-auto rounded-full border-gray-400 hover:border-gray-500 transition-all ease-in-out border-4" src="https://media.licdn.com/dms/image/v2/D4D03AQEC7AgcsYdnVw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720118331398?e=1736985600&v=beta&t=pTX3pVMDGwi6FpAQTjpMaSHL4q_DrxpomTNj4uUuiac" alt="" />
          <div className="font-medium text-lg mt-2">
              Davi Silva
          </div>
          <div className="text-sm font-semibold text-gray-400">
              Software Developer
          </div>
      </div>

       <div className="font-bold text-sm text-center px-2 py-1 text-gray-500 my-3">
          SOCIALS
       </div>
       <div className="flex justify-center gap-1 flex-wrap">

          {externalLinks.map((link:Link ,index)=> (
              <a key={index} href={link.url} className="">
                <div  className="px-2 py-1 rounded bg-gray-700 text-white text-sm hover:bg-gray-700/90 transition-all ease-in-out">
                    <span>
                      {link.description}
                    </span>
                </div>
              </a>
          ))}
          <div>

            <a href="/cv-davi-silva.pdf" download>
              <div className="text-center px-2 py-1 rounded bg-gray-700 hover:bg-gray-700/90 text-white text-sm transition-all ease-in-out">
                  Download my cv
              </div>
            </a>
          </div>
       </div>

       <article className="mb-3 border-b mt-5">
          <h5 className="font-bold text-sm text-center px-2 py-1 my-3 uppercase text-gray-500">About Me</h5>
          <p className="">
              I&apos;m a Brazilian 🇧🇷 born in the state of Ceará, not far from the ocean, as a child I always liked logic questions and video games. 🎮
          </p>

          <p>
              At school I played chess and participated in mathematics and astronomy Olympiads, I always studied in public schools.📚
          </p>
          
          <p>
              In high school, I went to a full-time school where I took a technical course in finance, I believed that I would work in this area in the future. But I fell in love with programming.
          </p>
          
          <p>
              In 2019 I started my bachelor&apos;s degree in computer science 💻 at the <a href="https://pt.wikipedia.org/wiki/Instituto_Federal_de_Educa%C3%A7%C3%A3o,_Ci%C3%AAncia_e_Tecnologia_do_Cear%C3%A1">federal institute of ceara</a>.
              In the middle of college, I focused on learning to program with modern languages ​​and frameworks to get a job.
          </p>
          
          <p>
              In 2023 I got a job, working as a fullstack developer, where I had contact and carried out various tasks using PHP Laravel, VueJs and also developed an application for the company using React Native. 👨‍💻
          </p>
          
          <p>        
              In the middle of 2024 I finished college and continue to seek more knowledge and challenges in my career as a developer
          </p>

      </article>
    </div>
  );
}
