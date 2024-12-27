import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ProjectItem = ({ image, title, description, liveLink, githubRepo }) => {
  return (
    <div className="card bg-base-100 shadow-xl cursor-pointer hover:-translate-y-2 transition-transform duration-200 relative z-10">
      <figure>
        <img
            className="w-full h-[240px] object-cover"
          src={image}
          alt={title}
          loading="lazy"
        />
      </figure>
      <div className="card-body">
        <h2 className="heading5">{title}</h2>
        <p className="small-text line-clamp-4">{description}</p>
        
        <div className="flex items-center gap-2 mt-2">
            <a className="text-sm  text-text-primary-light dark:text-text-primary-dark underline" href={liveLink} target="_black"><FontAwesomeIcon icon={faLink} className="me-1"/>Live Preview</a>
            <a className="text-sm  text-text-primary-light dark:text-text-primary-dark underline" href={githubRepo} target="_black"><FontAwesomeIcon icon={faGithub} className="me-1"/>View Code</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
