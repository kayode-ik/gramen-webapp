import Footer from "../../components/Footer";
import { useState, useEffect } from "react";

import projectBg from "../../assets/projectBg.svg";
import proImg1 from "../../assets/proImg1.svg";
import proImg2 from "../../assets/proImg2.svg";
import proImg3 from "../../assets/proImg3.svg";
import proImg4 from "../../assets/proImg4.svg";

import "../../styles/projectStyles.css";
import ProjectItem from "../../components/ProjectList";

import projectData from "../../utils/projects";

import client from "../../client";

const ProjectPage = () => {
  const [proData, setProData] = useState([]);
  const [projectDetails, setProjectDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   setProData(projectData.items);
  // }, [projectData]);

  // console.log(proData, "=== ");

  // console.log(projectDetails, "projectDetails");

  useEffect(() => {
    client
      .fetch(
        `*[_type == "projectsPage"] {
          projects[] {
            id,
            company,
            title,
            subtitle,
            "imageUrl": companyImage.asset->url,
            description
          }
      }`
      )
      .then((data) => {
        setProjectDetails(data[0]?.projects);
        setLoading(false); // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error(error);
        setLoading(false); // Set loading to false in case of error
      });
  }, []);

  return (
    <div className="projectContainerWeb">
      <div
        className="projectSection bg-cover bg-center "
        style={{ backgroundImage: `url(${projectBg})`, height: "30vh" }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}
        <div className="projectText">
          <h2 className="font-extralight text-center pt-24 text-white font-semiBold uppercase text-4xl tracking-wide">
            Projects
          </h2>
        </div>3
      </div>

      <div className="projectContent pt-24">
        {loading ? ( // Render the loader if loading is true
          <div className="flex justify-center items-center h-full pb-12">
            <div className="spinner border-t-4 border-b-4 border-gray-500 rounded-full w-12 h-12">Loading...</div>
          </div>
        ) : (
          <div className="topContent px-48 pb-12">
            {projectDetails.length > 0
              ? projectDetails?.map((item, index) => (
                  <ProjectItem
                    key={index}
                    id={item.id}
                    // image={item.companyImage}
                    image={item.imageUrl}
                    company={item.company}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                  />
                ))
              : ""}
          </div>
        )}
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default ProjectPage;
