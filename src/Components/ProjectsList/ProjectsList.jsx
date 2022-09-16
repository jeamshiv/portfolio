import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AllProjectsData } from '../../MemoryData/ProjectsData';

export default function ProjectsList() {
  const [portfolioData, setPortfolioData] = useState([]);

  useEffect(() => {
    setPortfolioData(AllProjectsData);
  }, []);

  return (
    <section className="px-3 pt-5">
      <div className="text-center mb-3">
        <h5>Portfolio</h5>
        <h1 className="style-title">My Projects</h1>
      </div>
      <div className="row">
        {portfolioData.map((item, key) => (
          <div
            key={key}
            className="col-lg-4 col-md-6 portfolioInfoCardWrapper mt-3 wow fadeInUp"
            data-wow-delay={key / 2 + 0.2 + 's'}>
            <div style={{ position: 'relative' }}>
              <img src={item.headerImage} className="img-fluid" alt="" />
            </div>
            <div className="py-2 w-75 borderRadius12 portfolioInfoCard">
              <p className="text-secondary mb-1 text-center">{item.type}</p>

              <Link to={`/${item.type}/${item.projectId}`}>
                <h4 className="text-center txt-595959">{item.title}</h4>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
