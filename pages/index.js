import { useRef } from "react";
import Header from "../components/Header";
// import ServiceCard from "../components/ServiceCard";
import Socials from "../components/Socials";
import WorkCard from "../components/WorkCard";
import { useIsomorphicLayoutEffect } from "../utils";
import { stagger } from "../animations";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";

// Local Data
import data from "../data/portfolio.json";

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();
  const textOne = useRef();
  const textTwo = useRef();
  const textThree = useRef();
  const textFour = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  useIsomorphicLayoutEffect(() => {
    stagger(
      [textOne.current, textTwo.current, textThree.current, textFour.current],
      { y: 40, x: -10, transform: "scale(0.95) skew(10deg)" },
      { y: 0, x: 0, transform: "scale(1)" }
    );
  }, []);

  return (
    <div className={`relative ${data.showCursor && "cursor-none"}`}>
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>

      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
        <div className="flex flex-col laptop:flex-row items-center laptop:items-start laptop:mt-20 mt-10">
          {/* Left Side: Image */}
          <div className="w-full laptop:w-1/4 flex justify-center laptop:justify-start">
            <img
              src="/portfolio-image.jpg"
              alt="Portfolio"
              className="rounded-xl shadow-[-10px_10px_60px_0px_rgba(70,70,70,0.5)] max-h-[600px] object-cover"
            />
          </div>

          {/* Right Side: Text + Socials */}
          <div className="w-full laptop:w-3/4 mt-10 laptop:mt-0 laptop:ml-10">
            <div className="mt-5">
              <h1
                ref={textOne}
                className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl p-1 tablet:p-2 font-bold w-4/5 mob:w-full laptop:w-4/5"
              >
                {data.headerTaglineOne}
              </h1>

              <h3
                ref={textTwo}
                className="text-lg tablet:text-3xl laptop:text-3xl laptopl:text-5xl p-1 tablet:p-2 font-medium w-4/5 laptop:w-4/5"
              >
                {data.headerTaglineTwo}
              </h3>

              <h3
                ref={textThree}
                className="text-lg tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-1 tablet:p-2 font-medium w-4/5 laptop:w-4/5"
              >
                {data.headerTaglineThree}
              </h3>

              <h3
                ref={textFour}
                className="text-lg tablet:text-2xl laptop:text-2xl laptopl:text-3xl p-1 tablet:p-2 font-medium w-4/5 laptop:w-4/5"
              >
                {data.headerTaglineFour}
              </h3>
            </div>

            <Socials className="mt-2 laptop:mt-5" />
          </div>
        </div>


        <br></br>
        <br></br>
        <hr class="border-t-4 my-4 border-gray-300" ref={workRef}></hr>
        <br></br>
        <br></br>
        <div className="mt-15 laptop:mt-45 p-2 laptop:p-0">
          <h1 className="text-5xl text-bold">My Projects</h1>

          <div className="mt-5 laptop:mt-10 grid grid-cols-1 tablet:grid-cols-2 gap-4">
            {data.projects.map((project) => (
              <WorkCard
                key={project.id}
                img={project.imageSrc}
                name={project.title}
                description={project.description}
                onClick={() => window.open(project.url)}
              />
            ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        
        <br></br>
        <br></br>
        <hr class="border-t-4 my-4 border-gray-300" ref={aboutRef}></hr>
        <br></br>
        <br></br>
        <div className="mt-15 laptop:mt-45 p-2 laptop:p-0" ref={workRef}>
          <h1 className="text-5xl text-bold">About Me</h1>
          <p className="tablet:m-10 mt-2 text-xl laptop:text-3xl w-full laptop:w-3/5">
            {data.aboutpara}
          </p>
        </div>

        <Footer />
      </div>
    </div>
  );
}
