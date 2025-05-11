import React from "react";
import FeatureCard from "../components/FeatureCard";
import catImage from "../assets/cat.png";

const HomePage = () => {
  const features = [
    {
      title: "소개",
      description: (
        <div>
          <img src={catImage} alt="Description" width="200" height="200" />
        </div>
      ),
    },
    {
      title: "프로젝트",
      description: "소프트웨어공학 프로젝트",
    },
    {
      title: "연락처",
      description: "minkyeong.choi@outlook.com",
    },
    {
      title: "깃허브",
      description: "https://github.com/Lyla-Dev",
    },
  ];

  return (
    <div className="home-container">
      <h2>환영합니다!</h2>
      <p>이 웹사이트는 React를 사용하여 만든 개인 포트폴리오입니다.</p>
      <div className="features">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
