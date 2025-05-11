import React from "react";
import ProjectCard from "../components/ProjectCard";
import sampleImage from "../assets/calcu.png";
import lego from "../assets/lego.png";

/**
 * 프로젝트 페이지 컴포넌트
 * 사용자의 프로젝트들을 카드 형태로 보여주는 페이지
 */
const ProjectsPage = () => {
  const projects = [
    {
      title: "나의 프로젝트1",
      description: "React를 사용하여 만든 계산기 애플리케이션",
      image: sampleImage,
    },
    {
      title: "나의 프로젝트2",
      description: "외국인을 위한 버스 애플리케이션",
      link: "https://github.com/DeveloperAcademy-POSTECH/2024-MacC-A1-2manythinking",
    },
    {
      title: "나의 프로젝트3",
      description: "레고 수집가를 위한 애플리케이션",
      image: lego,
    },
  ];

  return (
    <div className="projects-container">
      <h2>프로젝트</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            image={project.image}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
