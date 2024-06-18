"use client";
import { useState } from 'react';
import Button from '@/components/Button'
import img from "../../public/bg.png";
import ImageCard from '@/components/ImageCard';
import SparklesText from '@/magicui/sparkles-text';

const Navbar = () => {
  const [navIsOpened, setNavIsOpened] = useState(false);

  const closeNavbar = () => {
    setNavIsOpened(false);
  };

  const toggleNavbar = () => {
    setNavIsOpened(navIsOpened => !navIsOpened);
  };

  return (
    <>
      <div aria-hidden={true} onClick={closeNavbar} className={`fixed bg-gray-800/40 inset-0 z-30 ${navIsOpened ? "lg:hidden" : "hidden lg:hidden"}`} />
      <header className="sticky top-0 w-full flex items-center h-20 border-b-2 border-b-black z-40 bg-white/80 backdrop-filter backdrop-blur-xl">
        <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center courier-prime-regular text-base sm:text-lg">
          <div className="flex items-center min-w-max">
            <a href="/" className="relative flex items-center gap-2.5">
              <span aria-hidden={true} className="flex">
                <span className="w-3 h-6 flex bg-blue-500" />
                <span className="w-3 h-6 flex bg-bg mt-2" />
              </span>
              <span className="inline-flex text-lg font-bold text-indigo-950">
                Make My Resume 
              </span>
            </a>
          </div>
        </nav>
      </header>
    </>
  );
};

interface FeatureItemProps {
  text: React.ReactNode;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => {
  return (
    <div className="text-black/80 flex gap-x-3">
      <span className="w-7 h-7 max-h-7 min-w-[1.75rem] bg-emerald-300 text-emerald-900 rounded-md flex items-center justify-center">
        ✓
      </span>
      {text}
    </div>
  );
};

const features = [
  {
    id: 1,
    text: (
      <>
        Harvard Standard  |{" "}
        <a
          className="text-indigo-400"
          href="https://cdn-careerservices.fas.harvard.edu/wp-content/uploads/sites/161/2023/08/College-resume-and-cover-letter-4.pdf"
        >
          view
        </a>
      </>
    ),
  },
  {
    id: 2,
    text: "ATS Compatible",
  },
  {
    id: 3,
    text: "Easily AI Customizable",
  },
  {
    id: 4,
    text: "Download in PDF",
  },
];

const MainPage = () => {
  return (
    <>
      <div
        style={{
          backgroundImage: `linear-gradient(to right, white, #fff, rgba(78, 84, 89, 0.3)), url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
        }}
        className="bg-gradient-to-tr from-black-50/10 to-red-200"
      >
        <Navbar />
        <section className="py-8 courier-prime-regular sm:mt-10 lg:mt-20 mb-28">
          <div className="mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex flex-col lg:flex-row lg:items-stretch gap-x-6">
            <div className="lg:w-[47%] py-4 lg:py-8 xl:py-12 space-y-7">
              <h1 className=" text-3xl/snug sm:text-5xl/tight lg:text-4xl/tight xl:text-5xl/tight font-semibold">
                Make Resume with <span className="relative bg-gradient-to-r from-[var(--sparkles-first-color)] to-[var(--sparkles-second-color)] bg-clip-text text-transparent"><SparklesText text="Copilot AI*"/></span> <span className="bg-blue-500/10  border border-dashed border-blue-500 px-3 hidden">Less Time
                </span>
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-6 ">
                {features.map(feature => (
                  <FeatureItem key={feature.id} text={feature.text} />
                ))}
              </div>
              <Button className = "lg:max-w-sm px-24 py-4 bg-blue-600 text-white text-2xl"
                onClick={() => {
                }}
              >
                <a href="https://makemyresume.netlify.app/edit">Create Now</a>
              </Button>
            
              <p className="p-1 text-sm flex text-black/50">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="16" viewBox="0 0 24 24" fill="none" stroke="#4400ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lightbulb">
                  <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
                  <path d="M9 18h6" />
                  <path d="M10 22h4" />
                </svg>
                Prefer Laptop and auto-saving is unavailable <br />*Supported in MS Edge Browser
                
              </p>
            </div>
            <div className="flex flex-1 relative lg:h-auto">
              <div className="relative h-max lg:absolute left-0 top-0 flex lg:w-auto lg:mx-16 ">
                <ImageCard imageUrl={'https://github.com/Vedant-edu/Resumo/blob/main/src/assets/image.png?raw=true'}/>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MainPage;
