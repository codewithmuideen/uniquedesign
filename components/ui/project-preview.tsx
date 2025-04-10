import * as React from "react";
import { motion, useScroll } from "framer-motion";

import Arrow from "@/public/assets/icons/arrow.svg";

interface ProjectPreviewProps {
  name?: string | undefined;
  description?: string | undefined;
  imageUrl?: string | undefined;
  bgColor?: string | undefined;
  dark?: boolean | undefined;
}

const PreviewAnimation = {
  initial: {
    y: 30,
    opacity: 0,
    scale: 0.9,
  },
  animate: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      ease: [0.6, 0.01, 0.05, 0.95],
      duration: 0.8,
    },
  },
};

const ProjectPreview: React.FC<ProjectPreviewProps> = ({
  name = "Project Name",
  description = "Project Description",
  imageUrl = "/assets/project-1.png",
  bgColor = "#e4e4e7",
  dark = "false",
}) => {
  return (
    <div
      className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
      style={{ background: `${bgColor}` }}
      // initial="initial"
      // whileInView="animate"
      // variants={PreviewAnimation}
    >
      <div
        className={`h-full w-full px-10 py-6 duration-[500ms] hover:scale-105 bg-cover bg-no-repeat bg-center transition-all ease-in-out`}
        style={{ backgroundImage: `url('${imageUrl}')` }}
      >
        <div className="flex justify-between">
          <div>
            <h2 className="text-lg font-medium dark:text-white">{name}</h2>
            <p className="text-sm text-zinc-500 dark:text-zinc-300">
              {description}
            </p>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-white rounded-full cursor-pointer">
            <Arrow className="w-6 h-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectPreview;
