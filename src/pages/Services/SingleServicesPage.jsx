import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import serviceData from "../../utils/services";
import projectData from "../../utils/projects";
import "../Services/singleServiceStyles.css";
import ServeHero from "../../assets/SingleServicePage.svg";
import singleServeImg from "../../assets/structureImageBg.svg";
import ProjectItem from "../../components/ProjectList";

import proImg1 from "../../assets/proImg1.svg";
import proImg2 from "../../assets/proImg2.svg";
import proImg3 from "../../assets/proImg3.svg";
import Footer from "../../components/Footer";

const SingleServicesPage = (props) => {
  const { slug } = useParams();

  const [proData, setProData] = useState([]);

  useEffect(() => {
    setProData(projectData);
  }, [projectData]);

  // Find the selected service item using the slug
  const selectedItem = serviceData.items?.find((item) => item.id === slug);

  if (!selectedItem) {
    return <div>Service not found</div>;
  }

  //   console.log(proData, "proData");

  return (
    <div className="singleServiceContainer">
      {/* Hero Image */}
      <div
        className="singleServeSection bg-cover bg-center "
        style={{ backgroundImage: `url(${ServeHero})`, height: "35vh" }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-50  z-0"></div> */}
        <div className="singleServeText">
          <h2 className="font-extralight text-white font-bold uppercase text-5xl tracking-wide">
            {selectedItem.title}
          </h2>
          <img src={selectedItem.image} alt="" />
        </div>
      </div>

      {/* Service Content */}
      <div className="serviceDesc">
        <div className="serviceDescWrapper">
          <div className="descContent">
            <h2>Description</h2>

            <span>
              Provision of all resources including but not limited to materials,
              equipment, consumables, and competent personnel required for
              carrying out the implementation of the recommended remedial
              structural works as detailed in the fabrication assurance report
              and structural drawing for Produced Water Disposal Platform
              currently located at Gramen yard in Warri.
            </span>

            <div className="descList">
              <ol>
                <li>
                  Construction Work Package And Scope Of Work for Offshore
                </li>
                <li>Facilities Remediation and Loadout</li>
                <li>Fabrication Assurance Report</li>
                <li>Structural Drawing</li>
                <li>FFS-PU-5116-C Load-Out and Marine Transportation.</li>
                <li>Operating Environment: Floating and Fixed Platform</li>
                <li>Deck Integration Report</li>
              </ol>
            </div>
          </div>

          {/* image */}
          <div className="descImage">
            <img src={singleServeImg} alt="" />
          </div>
        </div>
      </div>

      {/* Other Services */}
      {/* <div className="otherServeWrapper">
        <div className="otherServeContent">
          <p>Projects</p>

          <span>
            Some of Gramen’s Premier Projects in Structural & Pipeline
            Construction
          </span>
        </div>

        <div className="otherServeProject">
          {proData.items?.map((item, index) => (
            <ProjectItem
              key={index}
              id={item.id}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </div>
      </div> */}

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SingleServicesPage;
