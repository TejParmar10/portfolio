import { project } from "@/types/main";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SectionWrapper from "../SectionWrapper";
import ProjectCard from "./ProjectCard";
import { Link } from "react-scroll";

interface Props {
    projectsData: project[];
}

const Projects = ({ projectsData }: Props) => {
    return (
        <SectionWrapper id="projects" className="mx-4 md:mx-10 min-h-screen"> {/* Ensures 10px spacing on both sides */}
            <h2 className="text-4xl text-center mb-6">Projects</h2>

            <Swiper
                modules={[Pagination, Autoplay]}
                spaceBetween={15} // Ensures proper spacing between cards
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
                className="w-full px-4 md:px-10" // Added left-right padding
            >
                {projectsData.map((project: project, index: number) => (
                    <SwiperSlide key={index} className="flex justify-center items-stretch"> {/* Ensures equal height */}
                        <ProjectCard {...project} />
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* View All Button */}
            <div className="flex justify-center mt-6">
                <a
                    href="https://github.com/TejParmar10" // Replace with your GitHub profile URL
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-violet-600 text-white px-6 py-2 rounded-md hover:shadow-xl transition-all"
                >
                    View All Projects
                </a>
            </div>
        </SectionWrapper>
    );
};

export default Projects;


type MouseEventHandler = (event: React.MouseEvent<HTMLButtonElement>) => void;

export const ViewAll = ({ handleClick, title, scrollTo }: { handleClick: MouseEventHandler, title: string, scrollTo: string }) => {
    return (
        <>
            <div className="bg-white dark:bg-grey-900 w-4/5 mx-auto blur-xl z-20 -translate-y-14 h-16"></div>
            <div className="text-center -translate-y-24">
                {title === 'View All' ?
                    <button onClick={handleClick} className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} py-1.5 rounded-md hover:shadow-xl transition-all`}>
                        {title}
                    </button>
                    :
                    <Link
                        to={scrollTo}
                        className={`bg-violet-600 text-white px-4 ${title === 'View All' ? 'animate-bounce' : 'animate-none'} cursor-pointer py-1.5 rounded-md hover:shadow-xl transition-all`}
                        offset={-60}
                        smooth={true}
                        duration={500}
                        // @ts-ignore
                        onClick={() => handleClick()}
                    >{title}</Link>
                }
            </div>
        </>
    )
}